import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col, Container } from 'reactstrap';
import { useCampaigns, PreviewImage, ExampleClip } from '@/Hooks/useCampaigns';
import { toast } from 'react-toastify';
import { Campaign } from '@/Types/(postclips)/Campaign';
import CampaignPreview from './CampaignPreview';

interface CampaignStep1Props {
    campaign: Campaign;
    formData?: any; // Add formData from parent
    updateFormData?: (data: any) => void; // Add update function
    handleSaveDraft: (data?: any) => void;
    onNextStep: (data?: any) => void;
}

const CampaignStep1: React.FC<CampaignStep1Props> = ({ 
    campaign, 
    formData: parentFormData, 
    updateFormData, 
    handleSaveDraft, 
    onNextStep 
}) => {
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
    
    // Initialize formData from parent or campaign
    const [formData, setFormData] = useState({
        title: parentFormData?.title || campaign.title || '',
        description: parentFormData?.description || campaign.description || '',
        brand_message: parentFormData?.brand_message || campaign.brand_message || null,
        targeted_amount_of_views: parentFormData?.targeted_amount_of_views || campaign.targeted_amount_of_views || '',
        amount_cpm_payout: parentFormData?.amount_cpm_payout || campaign.amount_cpm_payout || '',
        total_budget: parentFormData?.total_budget || campaign.total_budget || '',
        start_date: parentFormData?.start_date || (campaign.start_date ? new Date(campaign.start_date).toISOString().split('T')[0] : ''),
        end_date: parentFormData?.end_date || (campaign.end_date ? new Date(campaign.end_date).toISOString().split('T')[0] : '')
    });
    
    const [rawValues, setRawValues] = useState({
        targeted_amount_of_views: formData.targeted_amount_of_views?.toString() || '',
        amount_cpm_payout: formData.amount_cpm_payout?.toString() || '',
        total_budget: formData.total_budget?.toString() || ''
    });

    const { updateCampaignDraft, uploadPreviewImage, deletePreviewImage, uploadExampleClip, deleteExampleClip } = useCampaigns();

    // Sync with parent when formData changes
    useEffect(() => {
        if (updateFormData) {
            updateFormData(formData);
        }
    }, [formData]);

    useEffect(() => {
        console.log("campaign", { campaign });
    }, [campaign]);

    useEffect(() => {
        console.log("previewImages", { previewImages });
    }, [previewImages]);

    const formatNumberWithCommas = (value: number | string) => {
        if (value === '') return '';
        const num = typeof value === 'string' ? parseFloat(value) : value;
        if (isNaN(num)) return value;
        return num.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
    };

    const handleFormChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;

        console.log("handleFormChange: ", { value });

        // Handle number fields
        if (['targeted_amount_of_views', 'amount_cpm_payout', 'total_budget'].includes(field)) {
            // Remove all non-numeric characters except decimal point
            const cleanValue = value.replace(/[^\d.]/g, '');
            // Ensure only one decimal point
            const parts = cleanValue.split('.');
            const formattedValue = parts.length > 1 ? `${parts[0]}.${parts[1]}` : parts[0];

            setRawValues(prev => ({
                ...prev,
                [field]: formattedValue
            }));

            setFormData(prev => ({
                ...prev,
                [field]: formattedValue
            }));
        } else {
            // Handle text fields
            setFormData(prev => ({
                ...prev,
                [field]: value
            }));
        }
    };

    const handleDateChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log("handleDateChange: ", { value, field });
        
        if (value) {
            // Format the date to match the database format
            const formattedDate = `${value}T00:00:00+00:00`;
            setFormData(prev => ({
                ...prev,
                [field]: formattedDate
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [field]: ''
            }));
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

            if (!file.type.startsWith('video/')) {
                toast.error('Please upload a video file');
                return;
            }

            setUploadingClipIndex(index);

            if (exampleClips[index]) {
                await deleteExampleClip(exampleClips[index].id);
            }

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

    // Handler for save draft button
    const handleSaveDraftClick = () => {
        handleSaveDraft(formData);
    };

    // Handler for next button
    const handleNextClick = () => {
        onNextStep(formData);
    };

    return (
        <Container fluid className="campaign-detail p-4">
            <Row>
                <Col md={8}>
                    <h1 className="text-white mb-4">Campaign details</h1>

                    <Form>
                        <div className="preview-images mb-4">
                            <Label className="campaign-label d-flex align-items-center gap-2">
                                Preview image
                            </Label>
                            <p className="mb-3">
                                You can upload up to 3 images, which will be displayed randomly to clippers to increase engagement
                            </p>
                            <div className="media-upload-grid">
                                {[0, 1, 2].map((index) => (
                                    <div
                                        key={index}
                                        className="upload-box"
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
                            <Label for="title" className="campaign-label">Title</Label>
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
                            <Label for="description" className="campaign-label">
                                Description <span>(optional)</span>
                            </Label>
                            <Input
                                type="textarea"
                                name="description"
                                id="description"
                                className="input-text-area-dark"
                                rows={4}
                                value={formData.description}
                                onChange={handleFormChange('description')}
                            />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label for="targetedViews" className="campaign-label">Targeted Views</Label>
                            <Input
                                type="text"
                                name="targetedViews"
                                id="targetedViews"
                                className="input-dark"
                                value={rawValues.targeted_amount_of_views}
                                onChange={handleFormChange('targeted_amount_of_views')}
                                placeholder="Enter targeted views"
                            />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label for="cpmPayout" className="campaign-label">CPM Payout</Label>
                            <Input
                                type="text"
                                name="cpmPayout"
                                id="cpmPayout"
                                className="input-dark"
                                value={rawValues.amount_cpm_payout}
                                onChange={handleFormChange('amount_cpm_payout')}
                                placeholder="Enter CPM payout"
                            />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label for="totalBudget" className="campaign-label">Total Budget</Label>
                            <Input
                                type="text"
                                name="totalBudget"
                                id="totalBudget"
                                className="input-dark"
                                value={rawValues.total_budget}
                                onChange={handleFormChange('total_budget')}
                                placeholder="Enter total budget"
                            />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label for="startDate" className="campaign-label">Start Date</Label>
                            <Input
                                type="date"
                                name="startDate"
                                id="startDate"
                                className="input-dark date-picker"
                                value={formData.start_date ? formData.start_date.split('T')[0] : ''}
                                onChange={handleDateChange('start_date')}
                            />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label for="endDate" className="campaign-label">End Date</Label>
                            <Input
                                type="date"
                                name="endDate"
                                id="endDate"
                                className="input-dark date-picker"
                                value={formData.end_date ? formData.end_date.split('T')[0] : ''}
                                onChange={handleDateChange('end_date')}
                            />
                        </FormGroup>

                        <FormGroup className="mb-4">
                            <Label className="campaign-label">Example clips</Label>
                            <p className="mb-3">Provide video references to help clippers</p>
                            <div className="media-upload-grid">
                                {[0, 1, 2].map((index) => (
                                    <div
                                        key={index}
                                        className="upload-box"
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
                            <Label for="messageToClippers" className="campaign-label">
                                Message to clippers <span>(optional)</span>
                            </Label>
                            <Input
                                type="textarea"
                                name="messageToClippers"
                                id="messageToClippers"
                                className="input-text-area-dark"
                                rows={6}
                                maxLength={200}
                                value={formData.brand_message || ''}
                                onChange={handleFormChange('brand_message')}
                            />
                            <div className="text-end">
                                <small>{formData.brand_message?.length || 0}/200</small>
                            </div>
                        </FormGroup>


                        <div className="d-flex justify-content-between mt-5 mb-5">
                            <Button
                                className="btn-chipped btn-chipped-gray"
                                style={{
                                    maxWidth: '200px',
                                    width: '100%'
                                }}
                                onClick={handleSaveDraftClick}
                            >
                                SAVE AS DRAFT
                            </Button>
                            <Button
                                className="btn-chipped btn-chipped-white"
                                style={{
                                    maxWidth: '200px',
                                    width: '100%'
                                }}
                                onClick={handleNextClick}
                            >
                                NEXT
                            </Button>
                        </div>
                    </Form>
                </Col>

                <Col md={4}>
                    <div className="preview-container" style={{ position: 'sticky', top: '100px' }}>
                        <CampaignPreview previewImages={previewImages} formData={formData} />
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
                <CampaignPreview previewImages={previewImages} formData={formData} />
                <p className="text-center mt-3" style={{ fontSize: '14px' }}>
                    That's how clippers will see your campaign
                </p>
            </div>
        </Container>
    );
};

export default CampaignStep1;