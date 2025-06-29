import { useState, useCallback } from "react";
import { fetchAPI } from "@/Clients/postclips/server/ApiClient";
import { toast } from "react-toastify";
import { handleApiError } from "@/Clients/postclips/server/errorHandler";

export interface TopClip {
  id: string;
  campaign_id: string;
  campaign_title: string;
  clip_url: string;
  thumbnail_url: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  created_at: string;
  user_profile: {
    name: string;
    profile_picture: string;
  };
}

export interface AnalyticsOverviewData {
  total_views: number;
  total_clips_posted: number;
  average_views_per_clip: number;
  total_likes: number;
  total_comments: number;
  total_shares: number;
  total_budget_spent: number;
  total_budget_allocated: number;
  remaining_views: number;
  total_views_allocated: number;
  total_link_clicks: number;
  top_clips: TopClip[];
  // Growth data for charts (optional fields)
  views_growth_percentage?: number;
  clips_growth_percentage?: number;
  likes_growth_percentage?: number;
  comments_growth_percentage?: number;
  shares_growth_percentage?: number;
  link_clicks_growth_percentage?: number;
  accounts_growth_percentage?: number;
  total_accounts?: number;
}

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: any;
}

export const useAnalytics = () => {
  const [testDataOverview, setTestDataOverview] = useState<AnalyticsOverviewData | null>({
    total_views: 1913440929,
    total_clips_posted: 26563,
    average_views_per_clip: 72070,
    total_likes: 76360275,
    total_comments: 3468512,
    total_shares: 2112800,
    total_budget_spent: 2870161,
    total_budget_allocated: 3000000,
    remaining_views: 100000000,
    total_views_allocated: 2000000000,
    total_link_clicks: 6237880,
    link_clicks_growth_percentage: 31,
    total_accounts: 4113,
    accounts_growth_percentage: 0,
    top_clips: [
      {
        id: "1",
        campaign_id: "1",
        campaign_title: "This gotta be the best one!",
        clip_url: "https://www.tiktok.com/t/ZTjtPhV4T/",
        thumbnail_url: "https://sb.postclips.com/storage/v1/object/public/mock_data//test1thumbnail.png",
        views: 11219453,
        likes: 101437,
        comments: 7475,
        shares: 220690,
        created_at: "2024-08-01",
        user_profile: {
          name: "Adinclipsw",
          profile_picture: "",
        },
      },
      {
        id: "2",
        campaign_id: "2",
        campaign_title: "$40k is crazy #vitaly #ryangarcia #fyp #foryoupage #foryou #xyzbca #fypp",
        clip_url: "https://www.tiktok.com/t/ZTjtPChWH/",
        thumbnail_url: "https://sb.postclips.com/storage/v1/object/public/mock_data//test2thumbnail.png",
        views: 14893201,
        likes: 63612,
        comments: 3508,
        shares: 22712,
        created_at: "2024-07-31",
        user_profile: {
          name: "FightingInc",
          profile_picture: "",
        },
      },
      {
        id: "3",
        campaign_id: "3",
        campaign_title: "The moment Vitaly felt BAD for the child pred after hearing his STORY💔 #vitaly #fyp #viral",
        clip_url: "https://www.tiktok.com/t/ZTjtPbwNt/",
        thumbnail_url: "https://sb.postclips.com/storage/v1/object/public/mock_data//test3thumbnail.png",
        views: 9207810,
        likes: 57548,
        comments: 2083,
        shares: 6150,
        created_at: "2024-07-29",
        user_profile: {
          name: "FirstClassClips",
          profile_picture: "",
        },
      }
    ],
  });
  const [overviewData, setOverviewData] = useState<AnalyticsOverviewData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAnalyticsOverview = useCallback(async (
    startDate: string,
    endDate: string
  ): Promise<ApiResponse<{ data: AnalyticsOverviewData }>> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetchAPI("GET", `/analytics/overview?startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`);

      if (response.success && response.data?.data) {
        setOverviewData(response.data.data);
        return response;
      } else {
        const errorMessage = handleApiError(response.error);
        setError(errorMessage);
        toast.error(errorMessage);
        return { success: false, error: errorMessage };
      }
    } catch (err) {
      const errorMessage = handleApiError(err);
      setError(errorMessage);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshOverview = useCallback(async (startDate: string, endDate: string) => {
    await fetchAnalyticsOverview(startDate, endDate);
  }, [fetchAnalyticsOverview]);

  return {
    overviewData,
    testDataOverview,
    loading,
    error,
    fetchAnalyticsOverview,
    refreshOverview,
  };
};
