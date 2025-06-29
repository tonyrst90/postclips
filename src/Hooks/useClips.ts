import { useState } from "react";
import { fetchAPI } from "@/Clients/postclips/server/ApiClient";
import { toast } from "react-toastify";
import { handleApiError } from "@/Clients/postclips/server/errorHandler";

export interface Clip {
  id: string;
  user_profile: {
    name: string;
    profile_picture: string;
  };
  social_posts: {
    post_url: string;
    platform: string;
  }[];
  user_id: string;
  campaign_id: string;
  clip_url: string;
  thumbnail_url: string;
  metadata: any;
  status: "pending" | "approved" | "rejected" | "in_review";
  created_at: string;
  updated_at: string;
  campaign: {
    id: string;
    title: string;
    brand_id: string;
  };
  user: {
    id: string;
    email: string;
  };
}

interface GetClipsParams {
  campaignId?: string;
  status?: string;
}

export const useClips = () => {
  const [clips, setClips] = useState<Clip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClips = async (params?: GetClipsParams) => {
    try {
      setLoading(true);
      setError(null);

      // Build query string from params
      const queryParams = new URLSearchParams();
      if (params?.campaignId) queryParams.append("campaign_id", params.campaignId);
      if (params?.status) queryParams.append("status", params.status);

      const queryString = queryParams.toString();
      const url = `/clips/clips${queryString ? `?${queryString}` : ''}`;

      const response = await fetchAPI("GET", url);

      console.log("[useClips] fetchClips", { response });

      if (response.success && response.data?.data) {
        setClips(response.data.data);
      } else {
        const errorMessage = handleApiError(response.error);
        setError(errorMessage);
        toast.error(errorMessage);
        setClips([]);
      }
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      toast.error(errorMessage);
      setClips([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    clips,
    loading,
    error,
    fetchClips
  };
}; 