'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import CampaignDetail from '@/Components/(postclips)/campaigns/CampaignDetail/CampaignDetail';
import { useCallback } from 'react';
import { Campaign } from '@/Types/(postclips)/Campaign';

interface CampaignDetailWrapperProps {
    campaign: Campaign
}

const CampaignDetailWrapper: React.FC<CampaignDetailWrapperProps> = ({ campaign }) => {
    const router = useRouter();

    const handleRedirect = useCallback(() => {
        router.push('/brand/campaigns');
    }, [router]);

    useEffect(() => {
        if (!campaign) {
            toast.error('Campaign not found');
            handleRedirect();
            return;
        }

        if (campaign.status === 'active') {
            toast.error('You cannot edit active campaigns');
            handleRedirect();
            return;
        }
    }, [campaign, handleRedirect]);

    if (!campaign || campaign.status === 'active'
    ) {
        return null;
    }

    return <CampaignDetail campaign={campaign} />;
};

export default CampaignDetailWrapper; 