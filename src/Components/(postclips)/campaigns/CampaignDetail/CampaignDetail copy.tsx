"use client";
import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { useCampaigns, PreviewImage, ExampleClip } from '@/Hooks/useCampaigns';
import { toast } from 'react-toastify';
import { fetchAPI } from "@/Clients/postclips/server/ApiClient";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setStep } from "@/Redux/Reducers/(postclips)/auth/HeaderSlice";
import CampaignStep1 from './Steps/CampaignStep1';
import CampaignStep2 from './Steps/CampaignStep2';

interface CampaignDetailProps {
    campaign: {
        id: string;
        title: string;
        description: string;
        profile_picture: string | null;
        targeted_social_networks: string[];
        end_date: string | null;
        targeted_amount_of_views: number;
        amount_cpm_payout: number;
        status: string;
        rules: string[];
        brand_message: string | null;
        total_budget: number;
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
    };
}

const CampaignDetail: React.FC<CampaignDetailProps> = ({ campaign }) => {
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<PreviewImage[]>(
        campaign.preview_images.map(img => ({
            id: img.id,
            image_url: img.image_url
        }))
    );
    const [exampleClips, setExampleClips] = useState<ExampleClip[]>(
        campaign.example_clips.map(clip => ({
            id: clip.id,
            clip_url: clip.clip_url
        }))
    );
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [uploadingImageIndex, setUploadingImageIndex] = useState<number | null>(null);
    const [uploadingClipIndex, setUploadingClipIndex] = useState<number | null>(null);
    const [deletingImageId, setDeletingImageId] = useState<string | null>(null);
    const [deletingClipId, setDeletingClipId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: campaign.title,
        description: campaign.description,
        brand_message: campaign.brand_message,
        targeted_amount_of_views: campaign.targeted_amount_of_views || '',
        amount_cpm_payout: campaign.amount_cpm_payout || '',
        total_budget: campaign.total_budget || ''
    });

    const { updateCampaignDraft, uploadPreviewImage, deletePreviewImage, uploadExampleClip, deleteExampleClip } = useCampaigns();
    const dispatch = useAppDispatch();
    const { currentStep, steps } = useAppSelector((state) => state.header);

    useEffect(() => {
        console.log("campaign", { campaign });
    }, [campaign]);

    const formatNumberWithCommas = (value: number | string) => {
        if (value === '') return '';
        const num = typeof value === 'string' ? parseFloat(value) : value;
        return num.toLocaleString();
    };

    const handleFormChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        // Remove commas before saving to state
        const cleanValue = value.replace(/,/g, '');
        setFormData(prev => ({
            ...prev,
            [field]: cleanValue
        }));
    };

    const handleSaveDraft = async () => {
        try {
            // Convert empty strings to 0 for number fields before saving
            const dataToSave = {
                ...formData,
                targeted_amount_of_views: formData.targeted_amount_of_views === '' ? 0 : parseFloat(formData.targeted_amount_of_views as string),
                amount_cpm_payout: formData.amount_cpm_payout === '' ? 0 : parseFloat(formData.amount_cpm_payout as string),
                total_budget: formData.total_budget === '' ? 0 : parseFloat(formData.total_budget as string)
            };

            await updateCampaignDraft(campaign.id, dataToSave);
        } catch (error) {
            toast.error('Error saving campaign draft');
        }
    };

    const handleNextStep = async () => {
        try {
            // Convert empty strings to 0 for number fields before saving
            const dataToSave = {
                ...formData,
                targeted_amount_of_views: formData.targeted_amount_of_views === '' ? 0 : parseFloat(formData.targeted_amount_of_views as string),
                amount_cpm_payout: formData.amount_cpm_payout === '' ? 0 : parseFloat(formData.amount_cpm_payout as string),
                total_budget: formData.total_budget === '' ? 0 : parseFloat(formData.total_budget as string)
            };
            const response = await updateCampaignDraft(campaign.id, dataToSave);
            if (response.success && currentStep < steps.length) {
                dispatch(setStep(currentStep + 1));
            }
        } catch (error) {
            toast.error('Error saving campaign draft');
        }
    };

    const handleImageChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImages(prev => {
                const newImages = [...prev];
                newImages[index] = file;
                return newImages;
            });

            setUploadingImageIndex(index);
            // Upload the image using the hook
            uploadPreviewImage(campaign.id, file).then(response => {
                if (response.success && response.data?.data) {
                    const previewImage: PreviewImage = {
                        id: response.data.data.id,
                        image_url: response.data.data.image_url
                    };
                    setPreviewImages(prev => {
                        const newImages = [...prev];
                        newImages[index] = previewImage;
                        return newImages;
                    });
                }
            }).finally(() => {
                setUploadingImageIndex(null);
            });
        }
    };

    const handleDeleteImage = async (index: number) => {
        const image = previewImages[index];
        if (!image || deletingImageId === image.id) return;

        try {
            setDeletingImageId(image.id);
            await deletePreviewImage(image.id);
            setPreviewImages(prev => {
                const newImages = [...prev];
                newImages.splice(index, 1);
                return newImages;
            });
        } catch (error) {
            console.error('Error deleting image:', error);
        } finally {
            setDeletingImageId(null);
        }
    };

    const handleExampleClipChange = async (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if (!event.target.files || !event.target.files[0]) return;

            const file = event.target.files[0];

            // Check if the file is a video
            if (!file.type.startsWith('video/')) {
                toast.error('Please upload a video file');
                return;
            }

            setUploadingClipIndex(index);

            // If there's already a clip at this index, delete it first
            if (exampleClips[index]) {
                await deleteExampleClip(exampleClips[index].id);
            }

            // Upload the new clip
            const response = await uploadExampleClip(campaign.id, file);
            if (response.success && response.data?.data) {
                const newClip = response.data.data;
                setExampleClips(prev => {
                    const newClips = [...prev];
                    newClips[index] = newClip;
                    return newClips;
                });
            }
        } catch (error) {
            console.error('Error updating example clip:', error);
        } finally {
            setUploadingClipIndex(null);
        }
    };

    const handleDeleteExampleClip = async (index: number) => {
        const clip = exampleClips[index];
        if (!clip || deletingClipId === clip.id) return;

        try {
            setDeletingClipId(clip.id);
            await deleteExampleClip(clip.id);
            setExampleClips(prev => {
                const newClips = [...prev];
                newClips.splice(index, 1);
                return newClips;
            });
        } catch (error) {
            console.error('Error deleting example clip:', error);
        } finally {
            setDeletingClipId(null);
        }
    };

    const PreviewContent = () => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        useEffect(() => {
            if (previewImages.length <= 1) return;

            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => 
                    prevIndex === previewImages.length - 1 ? 0 : prevIndex + 1
                );
            }, 5000); // Change image every 5 seconds

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
                    height: '300px', // Increased height for portrait images
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

    // const renderStep = () => {
    //     switch (currentStep) {
    //         case 1:
    //             return <CampaignStep1 campaign={campaign} onNextStep={handleNextStep} />;
    //         case 2:
    //             return <CampaignStep2 />;
    //         default:
    //             return <CampaignStep1 campaign={campaign} onNextStep={handleNextStep} />;
    //     }
    // };

    return (
        <Container fluid className="campaign-detail p-4">
            <Row>
                <Col md={8}>
                    <h1 className="text-white mb-4">Campaign details</h1>

                    <Form>
                        <div className="preview-images mb-4">
                            <Label className="text-white d-flex align-items-center gap-2">
                                Preview image
                                <span>(i)</span>
                            </Label>
                            <p className="mb-3">
                                You can upload up to 3 images, which will be displayed randomly to clippers to increase engagement
                            </p>
                            <div className="d-flex gap-3">
                                {[0, 1, 2].map((index) => (
                                    <div
                                        key={index}
                                        className="upload-box"
                                        style={{
                                            width: '200px',
                                            height: '300px',
                                            background: '#1A1A1A',
                                            border: '1px dashed rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: uploadingImageIndex === index ? 'wait' : 'pointer',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {uploadingImageIndex === index ? (
                                            <div className="uploading-indicator">
                                                <div className="spinner-border text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                <div className="mt-2">Uploading...</div>
                                            </div>
                                        ) : previewImages[index]?.image_url ? (
                                            <>
                                                <img
                                                    src={previewImages[index].image_url}
                                                    alt={`Preview ${index + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                <button
                                                    type="button"
                                                    className="delete-image-btn"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleDeleteImage(index);
                                                    }}
                                                    disabled={deletingImageId === previewImages[index]?.id}
                                                    style={{
                                                        position: 'absolute',
                                                        top: '8px',
                                                        right: '8px',
                                                        background: 'rgba(0, 0, 0, 0.5)',
                                                        border: 'none',
                                                        borderRadius: '50%',
                                                        width: '24px',
                                                        height: '24px',
                                                        color: 'white',
                                                        cursor: deletingImageId === previewImages[index]?.id ? 'wait' : 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        opacity: deletingImageId === previewImages[index]?.id ? 0.5 : 1
                                                    }}
                                                >
                                                    {deletingImageId === previewImages[index]?.id ? (
                                                        <div className="spinner-border spinner-border-sm" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    ) : (
                                                        '×'
                                                    )}
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <Input
                                                    type="file"
                                                    id={`image-${index}`}
                                                    accept="image/*"
                                                    onChange={handleImageChange(index)}
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        opacity: 0,
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                                <div className="upload-content">
                                                    <div className="upload-icon d-flex align-items-center justify-content-center mb-2">
                                                        ↑
                                                    </div>
                                                    <div>Upload file</div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <FormGroup className="mb-4">
                            <Label for="title" className="text-white">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                className="input-dark"
                                value={formData.title}
                                onChange={handleFormChange('title')}
                            />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label for="description" className="text-white">
                                Description <span>(optional)</span>
                            </Label>
                            <Input
                                type="textarea"
                                name="description"
                                id="description"
                                className="input-dark"
                                rows={4}
                                value={formData.description}
                                onChange={handleFormChange('description')}
                            />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label for="targetedViews" className="text-white">Targeted Views</Label>
                            <Input
                                type="text"
                                name="targetedViews"
                                id="targetedViews"
                                className="input-dark"
                                value={formatNumberWithCommas(formData.targeted_amount_of_views)}
                                onChange={handleFormChange('targeted_amount_of_views')}
                                placeholder="Enter targeted views"
                            />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label for="cpmPayout" className="text-white">CPM Payout</Label>
                            <Input
                                type="text"
                                name="cpmPayout"
                                id="cpmPayout"
                                className="input-dark"
                                value={formatNumberWithCommas(formData.amount_cpm_payout)}
                                onChange={handleFormChange('amount_cpm_payout')}
                                placeholder="Enter CPM payout"
                            />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label for="totalBudget" className="text-white">Total Budget</Label>
                            <Input
                                type="text"
                                name="totalBudget"
                                id="totalBudget"
                                className="input-dark"
                                value={formatNumberWithCommas(formData.total_budget)}
                                onChange={handleFormChange('total_budget')}
                                placeholder="Enter total budget"
                            />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label className="text-white">Example clips</Label>
                            <p className="mb-3">Provide video references to help clippers</p>
                            <div className="d-flex gap-3">
                                {[0, 1, 2].map((index) => (
                                    <div
                                        key={index}
                                        className="upload-box"
                                        style={{
                                            width: '200px',
                                            height: '300px',
                                            background: '#1A1A1A',
                                            border: '1px dashed rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: uploadingClipIndex === index ? 'wait' : 'pointer',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {uploadingClipIndex === index ? (
                                            <div className="uploading-indicator">
                                                <div className="spinner-border text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                <div className="mt-2">Uploading...</div>
                                            </div>
                                        ) : exampleClips[index]?.clip_url ? (
                                            <>
                                                <video
                                                    src={exampleClips[index].clip_url}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }}
                                                    muted
                                                    loop
                                                    playsInline
                                                    autoPlay
                                                />
                                                <button
                                                    type="button"
                                                    className="delete-clip-btn"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleDeleteExampleClip(index);
                                                    }}
                                                    disabled={deletingClipId === exampleClips[index]?.id}
                                                    style={{
                                                        position: 'absolute',
                                                        top: '8px',
                                                        right: '8px',
                                                        background: 'rgba(0, 0, 0, 0.5)',
                                                        border: 'none',
                                                        borderRadius: '50%',
                                                        width: '24px',
                                                        height: '24px',
                                                        color: 'white',
                                                        cursor: deletingClipId === exampleClips[index]?.id ? 'wait' : 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        opacity: deletingClipId === exampleClips[index]?.id ? 0.5 : 1
                                                    }}
                                                >
                                                    {deletingClipId === exampleClips[index]?.id ? (
                                                        <div className="spinner-border spinner-border-sm" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    ) : (
                                                        '×'
                                                    )}
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <Input
                                                    type="file"
                                                    id={`clip-${index}`}
                                                    accept="video/*"
                                                    onChange={(e) => handleExampleClipChange(index, e)}
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        opacity: 0,
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                                <div className="upload-content">
                                                    <div className="upload-icon d-flex align-items-center justify-content-center mb-2">
                                                        ↑
                                                    </div>
                                                    <div>Upload video</div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label for="messageToClippers" className="text-white">
                                Message to clippers <span>(optional)</span>
                            </Label>
                            <Input
                                type="textarea"
                                name="messageToClippers"
                                id="messageToClippers"
                                className="input-dark"
                                rows={3}
                                maxLength={40}
                                value={formData.brand_message || ''}
                                onChange={handleFormChange('brand_message')}
                            />
                            <div className="text-end">
                                <small>0/40</small>
                            </div>
                        </FormGroup>

                        <div className="d-flex justify-content-between mt-5 mb-5">
                            <Button
                                className="btn-chipped btn-chipped-gray"
                                style={{
                                    maxWidth: '200px',
                                    width: '100%'
                                }}
                                onClick={handleSaveDraft}
                            >
                                SAVE AS DRAFT
                            </Button>
                            <Button
                                className="btn-chipped btn-chipped-white"
                                style={{
                                    maxWidth: '200px',
                                    width: '100%'
                                }}
                                onClick={handleNextStep}
                            >
                                NEXT
                            </Button>
                        </div>
                    </Form>
                </Col>

                <Col md={4}>
                    <div className="preview-container" style={{ position: 'sticky', top: '100px' }}>
                        <PreviewContent />
                        <p className="text-center mt-3" style={{ fontSize: '14px' }}>
                            That's how clippers will see your campaign
                        </p>
                    </div>
                </Col>
            </Row>

            {/* Mobile Preview Toggle Button */}
            <Button
                className="preview-toggle-button btn-chipped btn-chipped-white"
                onClick={() => setIsPreviewOpen(true)}
            >
                Preview
            </Button>

            {/* Mobile Preview Drawer */}
            <div className={`preview-drawer ${isPreviewOpen ? 'open' : ''}`}>
                <div className="drawer-header">
                    <h3>Campaign Preview</h3>
                    <button
                        className="close-button"
                        onClick={() => setIsPreviewOpen(false)}
                    >
                        ×
                    </button>
                </div>
                <PreviewContent />
                <p className="text-center mt-3" style={{ fontSize: '14px' }}>
                    That's how clippers will see your campaign
                </p>
            </div>
        </Container>
    );
};

export default CampaignDetail;
