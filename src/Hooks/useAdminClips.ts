import { useState } from "react";
import { fetchAPI } from "@/Clients/postclips/server/ApiClient";
import { toast } from "react-toastify";
import { handleApiError } from "@/Clients/postclips/server/errorHandler";

export interface Clip {
  id: string;
  user_id: string;
  campaign_id: string;
  clip_url: string;
  thumbnail_url: string;
  metadata: any;
  status: "pending" | "approved" | "rejected" | "in_review";
  created_at: string;
  updated_at: string;
  user_profile: {
    name: string;
    profile_picture: string;
  };
  campaign: {
    title: string;
  };
  social_posts: Array<{
    status: string;
    platform: string;
    post_url: string | null;
  }>;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export const useAdminClips = () => {
  const [clips, setClips] = useState<Clip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [approving, setApproving] = useState(false);
  const [rejecting, setRejecting] = useState(false);

  const fetchClips = async (status?: string) => {
    console.log("[useClips] fetchClips called", { status, currentClipsCount: clips.length });
    try {
      setLoading(true);
      setError(null);
      const response = await fetchAPI("GET", `/admin/clips${status ? `?status=${status}` : ''}`);
      
      if (response.success && response.data?.data) {
        console.log("[useClips] fetchClips success", { 
          clipsCount: response.data.data.length,
          statuses: response.data.data.map((c: Clip) => c.status)
        });
        setClips(response.data.data);
      } else {
        const errorMessage = handleApiError(response.error);
        console.error("[useClips] fetchClips error", { error: errorMessage });
        setError(errorMessage);
        toast.error(errorMessage);
        setClips([]);
      }
    } catch (err) {
      const errorMessage = handleApiError(err);
      console.error("[useClips] fetchClips exception", { error: err });
      setError(errorMessage);
      toast.error(errorMessage);
      setClips([]);
    } finally {
      setLoading(false);
    }
  };

  const approveClip = async (clipId: string, campaignId: string): Promise<boolean> => {
    console.log("[useClips] approveClip called", { clipId, campaignId });
    try {
      setApproving(true);
      setError(null);
      const response = await fetchAPI("POST", "/admin/clips/approve", {
        clipId,
        campaignId
      });
      
      if (response.success && response.data?.data) {
        const { clip, publishResult } = response.data.data;
        console.log("[useClips] approveClip success", { 
          clipId,
          newStatus: 'approved',
          currentClipsCount: clips.length
        });
        
        // Immediately update the local state to remove the approved clip
        setClips(prevClips => {
          const updatedClips = prevClips.filter(c => c.id !== clipId);
          console.log("[useClips] approveClip state update", {
            beforeCount: prevClips.length,
            afterCount: updatedClips.length,
            removedClipId: clipId
          });
          return updatedClips;
        });

        // Refetch the clips to ensure we have the latest data
        const refetchResponse = await fetchAPI("GET", "/admin/clips?status=in_review");
        if (refetchResponse.success && refetchResponse.data?.data) {
          console.log("[useClips] refetch after approval success", {
            newClipsCount: refetchResponse.data.data.length
          });
          setClips(refetchResponse.data.data);
        }
        
        toast.success("Clip approved and published successfully");
        return true;
      } else {
        const errorMessage = handleApiError(response.error);
        console.error("[useClips] approveClip error", { error: errorMessage });
        setError(errorMessage);
        toast.error(errorMessage);
        return false;
      }
    } catch (err) {
      const errorMessage = handleApiError(err);
      console.error("[useClips] approveClip exception", { error: err });
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setApproving(false);
    }
  };

  const rejectClip = async (clipId: string): Promise<boolean> => {
    console.log("[useClips] rejectClip called", { clipId });
    try {
      setRejecting(true);
      setError(null);
      const response = await fetchAPI("POST", `/admin/clips/${clipId}/reject`);
      
      if (response.success && response.data?.data) {
        const updatedClip = response.data.data;
        console.log("[useClips] rejectClip success", { 
          clipId,
          newStatus: 'rejected',
          currentClipsCount: clips.length
        });
        
        // Immediately update the local state to remove the rejected clip
        setClips(prevClips => {
          const updatedClips = prevClips.filter(c => c.id !== clipId);
          console.log("[useClips] rejectClip state update", {
            beforeCount: prevClips.length,
            afterCount: updatedClips.length,
            removedClipId: clipId
          });
          return updatedClips;
        });

        // Refetch the clips to ensure we have the latest data
        const refetchResponse = await fetchAPI("GET", "/admin/clips?status=in_review");
        if (refetchResponse.success && refetchResponse.data?.data) {
          console.log("[useClips] refetch after rejection success", {
            newClipsCount: refetchResponse.data.data.length
          });
          setClips(refetchResponse.data.data);
        }
        
        toast.success("Clip rejected successfully");
        return true;
      } else {
        const errorMessage = handleApiError(response.error);
        console.error("[useClips] rejectClip error", { error: errorMessage });
        setError(errorMessage);
        toast.error(errorMessage);
        return false;
      }
    } catch (err) {
      const errorMessage = handleApiError(err);
      console.error("[useClips] rejectClip exception", { error: err });
      setError(errorMessage);
      toast.error(errorMessage);
      return false;
    } finally {
      setRejecting(false);
    }
  };

  return {
    clips,
    loading,
    error,
    approving,
    rejecting,
    refetchClips: fetchClips,
    approveClip,
    rejectClip
  };
}; 