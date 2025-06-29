import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { useAnalytics } from '../useAnalytics';
import { renderHook, act } from '@testing-library/react';
import * as ApiClient from '@/Clients/postclips/server/ApiClient';

// Mock the API client
jest.mock('@/Clients/postclips/server/ApiClient');
jest.mock('@/Clients/postclips/server/errorHandler');
jest.mock('react-toastify');

const mockFetchAPI = ApiClient.fetchAPI as jest.MockedFunction<typeof ApiClient.fetchAPI>;

describe('useAnalytics', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch analytics overview data successfully', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          total_views: 2400000,
          total_clips_posted: 50,
          average_views_per_clip: 48000,
          total_likes: 342000,
          total_comments: 213000,
          total_shares: 402000,
          total_budget_spent: 91500,
          total_budget_allocated: 120000,
          remaining_views: 74800000,
          total_views_allocated: 100000000,
          total_link_clicks: 25800,
          views_growth_percentage: 22,
          clips_growth_percentage: 15,
          likes_growth_percentage: 10,
          comments_growth_percentage: 22,
          shares_growth_percentage: 22,
          link_clicks_growth_percentage: 10,
          top_clips: [
            {
              id: "clip_1",
              campaign_id: "campaign_1",
              campaign_title: "Test Campaign",
              clip_url: "https://example.com/clip1.mp4",
              thumbnail_url: "/assets/icons/analytics/clip.svg",
              views: 1200000,
              likes: 45000,
              comments: 12000,
              shares: 8500,
              created_at: "2024-12-01T10:00:00Z",
              user_profile: {
                name: "testuser",
                profile_picture: "/assets/icons/analytics/account-avatar-1.png"
              }
            }
          ]
        }
      }
    };

    mockFetchAPI.mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAnalytics());

    const startDate = "2024-01-01T00:00:00.000Z";
    const endDate = "2024-01-31T23:59:59.999Z";

    await act(async () => {
      await result.current.fetchAnalyticsOverview(startDate, endDate);
    });

    expect(mockFetchAPI).toHaveBeenCalledWith(
      "GET",
      `/analytics/overview?startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`
    );

    expect(result.current.overviewData).toEqual(mockResponse.data.data);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('should handle API errors gracefully', async () => {
    const mockError = {
      success: false,
      error: 'Failed to fetch analytics data'
    };

    mockFetchAPI.mockResolvedValue(mockError);

    const { result } = renderHook(() => useAnalytics());

    const startDate = "2024-01-01T00:00:00.000Z";
    const endDate = "2024-01-31T23:59:59.999Z";

    await act(async () => {
      await result.current.fetchAnalyticsOverview(startDate, endDate);
    });

    expect(result.current.overviewData).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeDefined();
  });

  it('should set loading state correctly during API call', async () => {
    const mockResponse = {
      success: true,
      data: { data: {} }
    };

    // Create a promise that we can control
    let resolvePromise: (value: any) => void;
    const promise = new Promise((resolve) => {
      resolvePromise = resolve;
    });

    mockFetchAPI.mockReturnValue(promise as any);

    const { result } = renderHook(() => useAnalytics());

    const startDate = "2024-01-01T00:00:00.000Z";
    const endDate = "2024-01-31T23:59:59.999Z";

    // Start the API call
    act(() => {
      result.current.fetchAnalyticsOverview(startDate, endDate);
    });

    // Check that loading is true
    expect(result.current.loading).toBe(true);

    // Resolve the promise
    await act(async () => {
      resolvePromise!(mockResponse);
    });

    // Check that loading is false
    expect(result.current.loading).toBe(false);
  });

  it('should refresh overview data', async () => {
    const mockResponse = {
      success: true,
      data: { data: { total_views: 1000000 } }
    };

    mockFetchAPI.mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAnalytics());

    const startDate = "2024-01-01T00:00:00.000Z";
    const endDate = "2024-01-31T23:59:59.999Z";

    await act(async () => {
      await result.current.refreshOverview(startDate, endDate);
    });

    expect(mockFetchAPI).toHaveBeenCalledWith(
      "GET",
      `/analytics/overview?startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`
    );
  });
});
