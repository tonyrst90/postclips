import { useState, useEffect } from "react";
import { fetchAPI } from "@/Clients/postclips/server/ApiClient";
import { toast } from "react-toastify";

export interface ClipperUser {
  id: string;
  email: string;
  name: string;
  profile_picture: string;
  location: string;
  gender: string;
  age_range: string;
  total_clips: number;
  total_campaigns: number;
  total_social_posts: number;
  analytics: {
    views: number;
    likes: number;
    comments: number;
    shares: number;
    favorites: number;
  };
  created_at: string;
  updated_at: string;
}

export interface UserConfiguration {
  id: string;
  user_id: string;
  direct_clips_posting: boolean;
  no_social_media_account_verification: boolean;
  created_at: string;
  updated_at: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export const useAdmin = () => {
  const [clippers, setClippers] = useState<ClipperUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [configLoading, setConfigLoading] = useState(false);
  const [configSaving, setConfigSaving] = useState(false);

  const fetchClippers = async () => {
    try {
      setLoading(true);
      const response = await fetchAPI("GET", "/admin/clippers");
      
      if (response.success && response.data?.data) {
        setClippers(response.data.data);
      } else {
        const errorMessage = response.data?.message || "Failed to fetch clippers";
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (err) {
      const errorMessage = "An error occurred while fetching clippers";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserConfiguration = async (userId: string): Promise<ApiResponse<{ data: UserConfiguration }>> => {
    try {
      setConfigLoading(true);
      const response = await fetchAPI("POST", "/admin/user-configuration", { user_id: userId });
      
      if (response.success && response.data) {
        return response;
      } else {
        const errorMessage = response.data?.message || "Failed to fetch user configuration";
        toast.error(errorMessage);
        return { success: false };
      }
    } catch (err) {
      const errorMessage = "An error occurred while fetching user configuration";
      toast.error(errorMessage);
      console.error(err);
      return { success: false };
    } finally {
      setConfigLoading(false);
    }
  };

  const updateUserConfiguration = async (
    userId: string, 
    directClipsPosting: boolean,
    noSocialMediaAccountVerification: boolean
  ): Promise<boolean> => {
    try {
      setConfigSaving(true);
      const response = await fetchAPI("POST", "/admin/user-configuration/update", {
        user_id: userId,
        direct_clips_posting: directClipsPosting,
        no_social_media_account_verification: noSocialMediaAccountVerification
      });
      
      if (response.success) {
        toast.success("Configuration updated successfully");
        return true;
      } else {
        const errorMessage = response.data?.message || "Failed to update configuration";
        toast.error(errorMessage);
        return false;
      }
    } catch (err) {
      const errorMessage = "An error occurred while updating configuration";
      toast.error(errorMessage);
      console.error(err);
      return false;
    } finally {
      setConfigSaving(false);
    }
  };

  useEffect(() => {
    fetchClippers();
  }, []);

  return {
    clippers,
    loading,
    error,
    configLoading,
    configSaving,
    refetchClippers: fetchClippers,
    fetchUserConfiguration,
    updateUserConfiguration
  };
}; 