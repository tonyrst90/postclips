import { NextRequest, NextResponse } from "next/server";

// This is a mock implementation for the analytics overview endpoint
// In the actual backend implementation, this would:
// 1. Validate query parameters (startDate, endDate)
// 2. Authenticate the user using the Authorization header
// 3. Query the database for analytics data across all campaigns
// 4. Return aggregate data and top clips for the date range

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    // Validate required parameters
    if (!startDate || !endDate) {
      return NextResponse.json(
        {
          success: false,
          error: 'startDate and endDate parameters are required'
        },
        { status: 400 }
      );
    }

    // Validate date format (ISO 8601)
    try {
      new Date(startDate).toISOString();
      new Date(endDate).toISOString();
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid date format. Please use ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)'
        },
        { status: 400 }
      );
    }

    // Mock data structure - in real implementation, this would come from database queries
    const mockAnalyticsData = {
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
          campaign_title: "Netflix Original Series",
          clip_url: "https://example.com/clip1.mp4",
          thumbnail_url: "/assets/icons/analytics/clip.svg",
          views: 1200000,
          likes: 45000,
          comments: 12000,
          shares: 8500,
          created_at: "2024-12-01T10:00:00Z",
          user_profile: {
            name: "netflix1111",
            profile_picture: "/assets/icons/analytics/account-avatar-1.png"
          }
        },
        {
          id: "clip_2",
          campaign_id: "campaign_2",
          campaign_title: "Summer Movie Collection",
          clip_url: "https://example.com/clip2.mp4",
          thumbnail_url: "/assets/icons/analytics/clip.svg",
          views: 980000,
          likes: 38000,
          comments: 9500,
          shares: 7200,
          created_at: "2024-12-02T14:30:00Z",
          user_profile: {
            name: "clips_1279",
            profile_picture: "/assets/icons/analytics/account-avatar-2.png"
          }
        },
        {
          id: "clip_3",
          campaign_id: "campaign_3",
          campaign_title: "Holiday Special",
          clip_url: "https://example.com/clip3.mp4",
          thumbnail_url: "/assets/icons/analytics/clip.svg",
          views: 750000,
          likes: 29000,
          comments: 7800,
          shares: 5400,
          created_at: "2024-12-03T09:15:00Z",
          user_profile: {
            name: "clips_creator",
            profile_picture: "/assets/icons/analytics/account-avatar-3.png"
          }
        }
      ]
    };

    return NextResponse.json({
      success: true,
      data: mockAnalyticsData
    });

  } catch (error) {
    console.error('Analytics overview API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error'
      },
      { status: 500 }
    );
  }
}
