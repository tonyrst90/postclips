'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
    Button,
    Container,
} from 'reactstrap';

const CampaignNotFound = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.push('/brand/campaigns');
    };

    return (
        <Container fluid className="h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div style={{
                maxWidth: '360px',
                width: '100%',
                padding: '2rem',
                background: '#1A1A1A',
                borderRadius: '12px',
                textAlign: 'center'
            }}>
                <h1 className="text-white mb-4" style={{ fontSize: '24px', fontWeight: '600' }}>
                    Campaign Not Found
                </h1>
                <p className="mb-5">
                    The campaign you're looking for does not exist or you don't have permission to view it.
                </p>

                <div className="d-flex justify-content-center">
                    <Button
                        className="btn-chipped"
                        onClick={handleGoBack}
                        style={{
                            minWidth: '200px'
                        }}
                    >
                        GO TO CAMPAIGNS
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default CampaignNotFound;