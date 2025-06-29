import { useState, useCallback, useEffect, useRef } from "react";
import { fetchAPI, ErrorResponse } from "@/Clients/postclips/server/ApiClient";
import { uploadLargeFile, getCloudflareUploadUrl, uploadToCloudflare, finalizeCloudflareUpload, checkVideoStatus } from "@/Clients/postclips/server/uploadLargeFile";

import { toast } from "react-toastify";
import { handleApiError } from "@/Clients/postclips/server/errorHandler";
import { useAuth } from "@/Providers/SessionProvider";

export interface Campaign {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
  targeted_amount_of_views: number;
  total_budget: number;
  preview_images: {
    id: string;
    image_url: string;
    created_at: string;
    campaign_id: string;
  }[];
  analytics: {
    total_views: number;
    total_likes: number;
    total_clips: number;
    views_percentage: number;
    total_payments: number;
    budget_percentage: number;
  };
}

export interface CampaignsResponse {
  topCampaigns: Campaign[];
  statusCampaigns: Campaign[];
  totalAnalytics: {
    total_views: number;
    total_clips: number;
    total_link_clicks: number;
    average_views_per_clip: number;
  };
}

export interface CreateCampaignDraftData {
  title: string;
  description: string;
}

export interface CreateCampaignDraftResponse {
  success: boolean;
  data?: {
    success: boolean;
    message: string;
    data: {
      id: string;
      brand_id: string;
      profile_picture: string | null;
      title: string;
      description: string;
      targeted_social_networks: string[];
      end_date: string | null;
      created_at: string;
      targeted_amount_of_views: number;
      amount_cpm_payout: number;
      status: string;
      rules: string[];
      brand_message: string | null;
      total_budget: number;
    };
  };
  error?: ErrorResponse | string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  error?: string | ErrorResponse;
  data?: T;
}

export interface PreviewImage {
  id: string;
  image_url: string;
}

export interface ExampleClip {
  id: string;
  clip_url: string;
}

export interface MediaResponse {
  id: string;
  url: string;
}

export interface CampaignContent {
  id: string;
  title: string;
  description?: string;
  content_type: string;
  content_url: string;
  thumbnail_url?: string;
  season?: string;
  duration?: number;
  created_at: string;
  cloudflare_status: string;
  cloudflare_video_id: string;
}

export interface UpdateCampaignViewsData {
  targeted_amount_of_views: number;
  amount_cpm_payout: number;
}

export interface CampaignBillingPlan {
  id: string;
  campaign_id: string;
  plan_type: '1_month' | '3_month' | '6_month';
  price_per_month: number;
  discount_percent: number;
  payment_method: 'stripe' | 'invoice';
  created_at: string;
  updated_at: string;
}

export interface CampaignPaymentMethod {
  id: string;
  campaign_id: string;
  payment_method: 'stripe' | 'invoice';
  created_at: string;
  updated_at: string;
}

export interface BrandPaymentMethod {
  id: string;
  brand_id: string;
  stripe_payment_method_id: string;
  stripe_customer_id: string;
  last_four: string;
  brand: string;
  exp_month: number;
  exp_year: number;
  name: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

interface SaveCardData {
  card_number: string;
  exp_month: string;
  exp_year: string;
  cvc: string;
  name: string;
}

export const useCampaigns = () => {
  const { token } = useAuth();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [topCampaigns, setTopCampaigns] = useState<Campaign[]>([]);
  const [totalAnalytics, setTotalAnalytics] = useState<CampaignsResponse['totalAnalytics']>({
    total_views: 0,
    total_clips: 0,
    total_link_clicks: 0,
    average_views_per_clip: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStatus, setCurrentStatus] = useState<string>('active');
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const fetchCampaigns = useCallback(async (status: string | null, searchTerm: string | null) => {
    try {
      setLoading(true);
      const response = await fetchAPI("POST", "/campaigns/", {
        status: searchTerm ? null : status,
        searchTerm: searchTerm || null
      });

      if (response.success && response.data?.data?.[0]) {
        const campaignsData = response.data.data[0];
        setTopCampaigns(campaignsData.top_campaigns || []);
        setCampaigns(campaignsData.status_campaigns || []);
        setTotalAnalytics(campaignsData.total_analytics || {
          total_views: 0,
          total_clips: 0,
          total_link_clicks: 0,
          average_views_per_clip: 0
        });
        setError(null);
      } else {
        const errorMessage = handleApiError(response.error);
        setError(errorMessage);
        toast.error(errorMessage);
        setCampaigns([]);
        setTopCampaigns([]);
        setTotalAnalytics({
          total_views: 0,
          total_clips: 0,
          total_link_clicks: 0,
          average_views_per_clip: 0
        });
      }
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      toast.error(errorMessage);
      setCampaigns([]);
      setTopCampaigns([]);
      setTotalAnalytics({
        total_views: 0,
        total_clips: 0,
        total_link_clicks: 0,
        average_views_per_clip: 0
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const createCampaignDraft = useCallback(async (data: CreateCampaignDraftData): Promise<CreateCampaignDraftResponse> => {
    try {
      setLoading(true);
      const response = await fetchAPI("POST", "/campaigns/draft", data);

      if (response.success) {
        toast.success('Campaign draft created successfully!');
        // Refresh the campaigns list
        await fetchCampaigns(currentStatus, null);
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, [currentStatus, fetchCampaigns]);

  const updateCampaignDraft = useCallback(async (campaignId: string, data: Record<string, any>): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetchAPI("PUT", `/campaigns/${campaignId}/draft`, data);

      if (response.success) {
        toast.success('Campaign draft updated successfully!');
        // Refresh the campaigns list
        await fetchCampaigns(currentStatus, null);
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, [currentStatus, fetchCampaigns]);

  const refetchCampaigns = useCallback((status: string) => {
    setCurrentStatus(status);
    fetchCampaigns(status, null);
  }, [fetchCampaigns]);

  const handleSearch = useCallback((searchTerm: string) => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      if (searchTerm.trim()) {
        fetchCampaigns(null, searchTerm);
      } else {
        fetchCampaigns(currentStatus, null);
      }
    }, 500); // 500ms debounce
  }, [fetchCampaigns, currentStatus]);

  const uploadPreviewImage = useCallback(async (campaignId: string, file: File): Promise<ApiResponse<{ data: PreviewImage }>> => {
    try {
      // Check file size (15MB limit)
      if (file.size > 15 * 1024 * 1024) {
        toast.error('Preview image size must be less than 15MB');
        return {
          success: false,
          error: 'File size exceeds limit'
        };
      }

      setLoading(true);
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetchAPI("POST", `/campaigns/${campaignId}/preview-image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.success) {
        toast.success('Image uploaded successfully!');
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
        return {
          success: false,
          error: errorMessage
        };
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const deletePreviewImage = useCallback(async (imageId: string): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetchAPI("DELETE", `/campaigns/preview-image/${imageId}`);

      if (response.success) {
        toast.success('Image deleted successfully!');
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadExampleClip = useCallback(async (campaignId: string, file: File): Promise<ApiResponse<{ data: ExampleClip }>> => {
    try {
      // Check file size (15MB limit)
      if (file.size > 15 * 1024 * 1024) {
        toast.error('Example clip size must be less than 15MB');
        return {
          success: false,
          error: 'File size exceeds limit'
        };
      }

      setLoading(true);
      const formData = new FormData();
      formData.append('clip', file);

      const response = await fetchAPI("POST", `/campaigns/${campaignId}/example-clip`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.success) {
        toast.success('Example clip uploaded successfully!');
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteExampleClip = useCallback(async (clipId: string): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetchAPI("DELETE", `/campaigns/example-clip/${clipId}`);

      if (response.success) {
        toast.success('Example clip deleted successfully!');
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadMedia = useCallback(async (campaignId: string, file: File): Promise<ApiResponse<{ data: MediaResponse }>> => {
    try {
      // Check file size (50MB limit)
      if (file.size > 50 * 1024 * 1024) {
        toast.error('Media file size must be less than 50MB');
        return {
          success: false,
          error: 'File size exceeds limit'
        };
      }

      setLoading(true);
      const formData = new FormData();
      formData.append('media', file);

      const response = await fetchAPI("POST", `/campaigns/${campaignId}/media`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.success) {
        toast.success('Media uploaded successfully!');
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteMedia = useCallback(async (mediaId: string): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetchAPI("DELETE", `/campaigns/media/${mediaId}`);

      if (response.success) {
        toast.success('Media deleted successfully!');
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadCampaignContent = useCallback(async (campaignId: string, data: {
    title: string;
    description?: string;
    content_type: string;
    content_url?: string;
    file?: File;
    thumbnail_url?: string;
    season?: string;
  }): Promise<ApiResponse<{ data: CampaignContent }>> => {
    try {
      setLoading(true);
      setUploadProgress(0);

      // Check if we have a token
      if (!token) {
        toast.error('Authentication required');
        return {
          success: false,
          error: 'No authentication token available'
        };
      }

      if (data.file) {
        // ALL file uploads go through Cloudflare to avoid server limits
        const fileSizeMB = data.file.size / (1024 * 1024);
        console.log(`Uploading file: ${data.file.name}, size: ${fileSizeMB.toFixed(2)}MB`);

        // Use the client-side upload function with token from auth context
        const response = await uploadLargeFile(
          campaignId,
          data.file,
          {
            title: data.title,
            description: data.description,
            season: data.season
          },
          token, // Pass token from auth context
          (progress) => {
            setUploadProgress(progress.percentage);
          }
        );

        setUploadProgress(0);

        if (response.success) {
          toast.success('Content uploaded successfully! Processing video...');

          // Start checking video status if it's a Cloudflare upload
          if (response.data?.data?.cloudflare_video_id) {
            checkVideoProcessingStatus(response.data.data.cloudflare_video_id);
          }

          // Refresh content list
          await fetchCampaigns(currentStatus, null);
        } else {
          const errorMessage = handleApiError(response.error);
          toast.error(errorMessage);
        }

        return response;
      } else {
        // For non-file content (links), use server action which already has auth
        const response = await fetchAPI("POST", `/campaigns/${campaignId}/content`, {
          title: data.title,
          description: data.description,
          content_type: data.content_type,
          content_url: data.content_url,
          thumbnail_url: data.thumbnail_url,
          season: data.season
        });

        if (response.success) {
          toast.success('Content added successfully!');
          await fetchCampaigns(currentStatus, null);
        } else {
          const errorMessage = handleApiError(response.error);
          toast.error(errorMessage);
        }

        return response;
      }
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  }, [currentStatus, fetchCampaigns, token]); // Add token to dependencies

  // Also update the checkVideoProcessingStatus function to use token:
  const checkVideoProcessingStatus = useCallback(async (videoId: string) => {
    if (!token) {
      console.error('No authentication token available for video status check');
      return;
    }

    let attempts = 0;
    const maxAttempts = 60; // 5 minutes max

    const checkStatus = async () => {
      try {
        const response = await checkVideoStatus(videoId, token); // Pass token

        if (response.success && response.data) {
          if (response.data.ready) {
            toast.success('Video processing complete!');
            // Refresh campaign content
            await fetchCampaigns(currentStatus, null);
            return;
          }

          if (response.data.error) {
            toast.error(`Video processing failed: ${response.data.error}`);
            return;
          }

          // Still processing - show progress
          if (response.data.progress > 0) {
            console.log(`Video processing: ${response.data.progress}% complete`);
          }

          // Continue checking
          if (attempts < maxAttempts) {
            attempts++;
            setTimeout(checkStatus, 5000); // Check every 5 seconds
          } else {
            toast.warning('Video is taking longer than expected to process. Check back later.');
          }
        }
      } catch (error) {
        console.error('Error checking video status:', error);
      }
    };

    // Start checking after 5 seconds
    setTimeout(checkStatus, 5000);
  }, [currentStatus, fetchCampaigns, token]);

  const deleteCampaignContent = useCallback(async (contentId: string): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetchAPI("DELETE", `/campaigns/content/${contentId}`);

      if (response.success) {
        toast.success('Content deleted successfully!');
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCampaignContent = useCallback(async (campaignId: string): Promise<CampaignContent[]> => {
    try {
      const response = await fetchAPI('GET', `/campaigns/${campaignId}/content`);
      if (response.success && response.data?.data) {
        return response.data.data;
      }
      return [];
    } catch (err) {
      return [];
    }
  }, []);

  const reorderCampaignContent = useCallback(async (campaignId: string, contentIds: string[]): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetchAPI("POST", `/campaigns/${campaignId}/content/reorder`, {
        contentIds
      });

      if (response.success) {
        toast.success('Content reordered successfully!');
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, []);

  // Brand Account Usernames
  const getBrandAccountUsernames = useCallback(async (brandId: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("GET", `/campaigns/brand/${brandId}/account-usernames`);
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const addBrandAccountUsername = useCallback(async (brandId: string, username: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("POST", `/campaigns/brand/${brandId}/account-usernames`, { username });
      if (response.success) {
        toast.success('Username added!');
      } else {
        toast.error('Failed to add username');
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteBrandAccountUsername = useCallback(async (brandId: string, username: string): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetchAPI("DELETE", `/campaigns/brand/${brandId}/account-usernames`, { username });
      if (response.success) {
        toast.success('Username deleted successfully');
      } else {
        toast.error('Failed to delete username');
      }
      return response;
    } catch (error) {
      const errorMessage = handleApiError(error);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Brand Account Bios
  const getBrandAccountBios = useCallback(async (brandId: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("GET", `/campaigns/brand/${brandId}/account-bios`);
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const setBrandAccountBios = useCallback(async (brandId: string, biosData: { bio: string; link: string; platforms: string[] }) => {
    try {
      setLoading(true);
      const response = await fetchAPI("POST", `/campaigns/brand/${brandId}/account-bios`, biosData);
      if (response.success) {
        toast.success('Bio added successfully!');
      } else {
        toast.error('Failed to add bio');
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteBrandAccountBio = useCallback(async (brandId: string, bioId: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("DELETE", `/campaigns/brand/${brandId}/account-bios/${bioId}`);
      if (response.success) {
        toast.success('Bio deleted successfully!');
      } else {
        toast.error('Failed to delete bio');
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Brand Account Pictures
  const getBrandAccountPictures = useCallback(async (brandId: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("GET", `/campaigns/brand/${brandId}/account-pictures`);
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const addBrandAccountPicture = useCallback(async (brandId: string, file: File) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('picture', file);
      const response = await fetchAPI("POST", `/campaigns/brand/${brandId}/account-pictures`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.success) {
        toast.success('Profile picture uploaded!');
      } else {
        toast.error('Failed to upload picture');
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteBrandAccountPicture = useCallback(async (brandId: string, pictureId: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("DELETE", `/campaigns/brand/${brandId}/account-pictures/${pictureId}`);
      if (response.success) {
        toast.success('Profile picture deleted!');
      } else {
        toast.error('Failed to delete picture');
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Campaign Captions
  const getCampaignCaptions = useCallback(async (campaignId: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("GET", `/campaigns/${campaignId}/captions`);
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const addCampaignCaption = useCallback(async (campaignId: string, caption: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("POST", `/campaigns/${campaignId}/captions`, { caption });
      if (response.success) {
        toast.success('Caption added!');
      } else {
        toast.error('Failed to add caption');
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteCampaignCaption = useCallback(async (campaignId: string, captionId: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("DELETE", `/campaigns/${campaignId}/captions/${captionId}`);
      if (response.success) {
        toast.success('Caption deleted!');
      } else {
        toast.error('Failed to delete caption');
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // --- Campaign Tags ---
  const getCampaignTags = useCallback(async (campaignId: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("GET", `/campaigns/${campaignId}/tags`);
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const addCampaignTag = useCallback(async (campaignId: string, tag: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("POST", `/campaigns/${campaignId}/tags`, { tag });
      if (response.success) {
        toast.success('Tag added!');
      } else {
        toast.error('Failed to add tag');
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteCampaignTag = useCallback(async (campaignId: string, tagId: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("DELETE", `/campaigns/${campaignId}/tags/${tagId}`);
      if (response.success) {
        toast.success('Tag deleted!');
      } else {
        toast.error('Failed to delete tag');
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // --- Campaign Outros ---
  const getCampaignOutros = useCallback(async (campaignId: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("GET", `/campaigns/${campaignId}/outros`);
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const addCampaignOutro = useCallback(async (campaignId: string, file: File) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('outro', file);
      const response = await fetchAPI("POST", `/campaigns/${campaignId}/outros`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.success) {
        toast.success('Outro uploaded!');
      } else {
        toast.error('Failed to upload outro');
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteCampaignOutro = useCallback(async (campaignId: string, outroId: string) => {
    try {
      setLoading(true);
      const response = await fetchAPI("DELETE", `/campaigns/${campaignId}/outros/${outroId}`);
      if (response.success) {
        toast.success('Outro deleted!');
      } else {
        toast.error('Failed to delete outro');
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const updateCampaignViews = useCallback(async (campaignId: string, data: UpdateCampaignViewsData): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetchAPI("PUT", `/campaigns/${campaignId}/views`, data);

      if (response.success) {
        // 
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, [currentStatus, fetchCampaigns]);

  const getCampaignBillingPlan = useCallback(async (campaignId: string): Promise<ApiResponse<{ data: CampaignBillingPlan }>> => {
    try {
      const response = await fetchAPI("GET", `/campaigns/${campaignId}/billing-plan`);
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  }, []);

  const getCampaignPaymentMethod = useCallback(async (campaignId: string): Promise<ApiResponse<{ data: CampaignPaymentMethod }>> => {
    try {
      const response = await fetchAPI("GET", `/campaigns/${campaignId}/payment-method`);
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  }, []);

  const upsertCampaignBillingPlan = useCallback(async (
    campaignId: string,
    data: {
      plan_type: '1_month' | '3_month' | '6_month',
      price_per_month: number,
      discount_percent: number,
      payment_method: 'stripe' | 'invoice',
    }
  ): Promise<ApiResponse<CampaignBillingPlan>> => {
    try {
      const response = await fetchAPI("PUT", `/campaigns/${campaignId}/billing-plan`, data);
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  }, []);

  const saveCampaignCard = useCallback(async (campaignId: string, paymentMethodId: string): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await fetchAPI("POST", `/campaigns/${campaignId}/save-card`, { paymentMethodId });

      if (response.success) {
        toast.success('Card saved successfully!');
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const getBrandPaymentMethods = useCallback(async (brandId: string): Promise<ApiResponse<{ data: BrandPaymentMethod[] }>> => {
    try {
      const response = await fetchAPI("GET", `/campaigns/brands/${brandId}/payment-methods`);
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  }, []);

  const setDefaultPaymentMethod = useCallback(async (brandId: string, paymentMethodId: string): Promise<ApiResponse> => {
    try {
      const response = await fetchAPI("POST", `/campaigns/brands/${brandId}/payment-methods/default`, {
        paymentMethodId
      });
      if (response.success) {
        toast.success('Default payment method updated');
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  }, []);

  const deletePaymentMethod = useCallback(async (brandId: string, paymentMethodId: string): Promise<ApiResponse> => {
    try {
      const response = await fetchAPI("DELETE", `/campaigns/brands/${brandId}/payment-methods/${paymentMethodId}`);
      if (response.success) {
        toast.success('Payment method deleted');
      } else {
        const errorMessage = handleApiError(response.error);
        toast.error(errorMessage);
      }
      return response;
    } catch (err) {
      const errorMessage = handleApiError(err);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  }, []);

  const upsertCampaignPaymentMethod = async (
    campaignId: string,
    paymentMethodType: 'stripe' | 'invoice',
    brandsPaymentMethodId?: string
  ): Promise<ApiResponse<{ data: CampaignPaymentMethod }>> => {
    try {
      const response = await fetchAPI("PUT", `/campaigns/${campaignId}/payment-method`, {
        paymentMethodType,
        brandsPaymentMethodId
      });
      return response;
    } catch (error) {
      toast.error('Failed to update payment method');
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update payment method'
      };
    }
  };

  const submitCampaign = async (campaignId: string): Promise<ApiResponse> => {
    try {
      const response = await fetchAPI("PUT", `/campaigns/${campaignId}/submit`);
      if (!response.success) {
        console.error('Submit campaign error:', response.error, response);
      }
      return response;
    } catch (error) {
      toast.error('Failed to submit campaign');
      console.error('Submit campaign exception:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit campaign'
      };
    }
  };

  useEffect(() => {
    fetchCampaigns('active', null);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [fetchCampaigns]);

  return {
    campaigns,
    topCampaigns,
    totalAnalytics,
    loading,
    error,
    refetchCampaigns,
    handleSearch,
    createCampaignDraft,
    updateCampaignDraft,
    uploadPreviewImage,
    deletePreviewImage,
    uploadExampleClip,
    deleteExampleClip,
    uploadMedia,
    deleteMedia,
    uploadCampaignContent,
    uploadProgress,
    deleteCampaignContent,
    fetchCampaignContent,
    reorderCampaignContent,
    getBrandAccountUsernames,
    addBrandAccountUsername,
    deleteBrandAccountUsername,
    getBrandAccountBios,
    setBrandAccountBios,
    deleteBrandAccountBio,
    getBrandAccountPictures,
    addBrandAccountPicture,
    deleteBrandAccountPicture,
    getCampaignCaptions,
    addCampaignCaption,
    deleteCampaignCaption,
    getCampaignTags,
    addCampaignTag,
    deleteCampaignTag,
    getCampaignOutros,
    addCampaignOutro,
    deleteCampaignOutro,
    updateCampaignViews,
    getCampaignBillingPlan,
    upsertCampaignBillingPlan,
    saveCampaignCard,
    getCampaignPaymentMethod,
    upsertCampaignPaymentMethod,
    getBrandPaymentMethods,
    setDefaultPaymentMethod,
    deletePaymentMethod,
    submitCampaign,
  };
};
