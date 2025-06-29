export interface Campaign {
    id: string;
    title: string;
    description: string;
    brand_id: string;
    profile_picture: string | null;
    targeted_social_networks: string[];
    targeted_amount_of_views: number;
    amount_cpm_payout: number;
    status: string;
    rules: string[];
    brand_message: string | null;
    total_budget: number;
    start_date: string | null;
    end_date: string | null;
    preview_images: {
        id: string;
        image_url: string;
        created_at: string;
        campaign_id: string;
    }[];
    example_clips: {
        id: string;
        clip_url: string;
        created_at: string;
        campaign_id: string;
    }[];
}