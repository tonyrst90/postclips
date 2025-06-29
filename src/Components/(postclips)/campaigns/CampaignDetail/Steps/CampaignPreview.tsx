import React, { useState, useEffect } from 'react';

interface PreviewImage {
    id: string;
    image_url: string;
}

interface CampaignPreviewProps {
    previewImages: PreviewImage[];
    formData: {
        title: string;
        description: string;
        brand_message: string | null;
        targeted_amount_of_views: string | number;
        amount_cpm_payout: string | number;
        total_budget: string | number;
        start_date?: string;
        end_date?: string;
    };
}

const formatNumberWithCommas = (value: number | string) => {
    if (value === '') return '';
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return value;
    return num.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
};

const CampaignPreview: React.FC<CampaignPreviewProps> = ({ previewImages, formData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (previewImages.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === previewImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [previewImages.length]);

    return (
        <div className="phone-mockup" style={{
            background: '#000000',
            borderRadius: '40px',
            padding: '20px',
            maxWidth: '375px',
            margin: '0 auto',
            border: '8px solid #1A1A1A',
            boxShadow: '0 0 50px rgba(0,0,0,0.5)'
        }}>
            {/* Status Bar */}
            <div className="phone-header" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white',
                fontSize: '14px',
                padding: '5px 20px',
                marginBottom: '20px'
            }}>
                <span>9:41</span>
                <div style={{
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '12px' }}>●</span>
                    <span style={{ fontSize: '12px' }}>📶</span>
                    <span style={{ fontSize: '12px' }}>🔋</span>
                </div>
            </div>

            {/* Preview Image */}
            <div className="preview-image" style={{
                background: '#1A1A1A',
                borderRadius: '16px',
                height: '300px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {previewImages.length > 0 ? (
                    previewImages.map((image, index) => (
                        <img
                            key={image.id}
                            src={image.image_url}
                            alt="Preview"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '16px',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                opacity: index === currentImageIndex ? 1 : 0,
                                transition: 'opacity 1s ease-in-out'
                            }}
                        />
                    ))
                ) : (
                    <span>Preview Image</span>
                )}
            </div>

            {/* Campaign Info */}
            <div className="campaign-info" style={{
                color: 'white',
                padding: '0 10px'
            }}>
                <div style={{
                    fontSize: '12px',
                    color: '#666',
                    marginBottom: '4px'
                }}>
                    Logo
                </div>
                <h3 style={{
                    fontSize: '20px',
                    marginBottom: '8px',
                    fontWeight: '600',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: '1.2'
                }}>
                    {formData.title || 'Title'}
                </h3>
                <p style={{
                    fontSize: '14px',
                    color: '#666',
                    marginBottom: '24px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: '1.4'
                }}>
                    {formData.description || 'Description'}
                </p>

                {/* Metrics Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                    marginBottom: '24px'
                }}>
                    <div style={{
                        background: 'white',
                        color: 'black',
                        padding: '8px',
                        borderRadius: '8px',
                        fontSize: '11px'
                    }}>
                        <div style={{ fontWeight: '600' }}>
                            Reach {formatNumberWithCommas(formData.targeted_amount_of_views)}
                        </div>
                        <div>
                            people for ${formatNumberWithCommas(formData.amount_cpm_payout)}
                        </div>
                    </div>
                    <div>
                        <div style={{
                            background: 'white',
                            color: 'black',
                            padding: '8px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            marginBottom: '4px'
                        }}>
                            <div style={{ fontWeight: '600' }}>Budget</div>
                            <div style={{ color: '#666' }}>
                                ${formatNumberWithCommas(formData.total_budget)}
                            </div>
                        </div>

                        <div style={{
                            background: 'white',
                            color: 'black',
                            padding: '8px',
                            borderRadius: '8px',
                            fontSize: '11px'
                        }}>
                            <div style={{ fontWeight: '600' }}>
                                Targeted views
                            </div>
                            <div style={{ color: '#666' }}>
                                {formatNumberWithCommas(formData.targeted_amount_of_views)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignPreview; 