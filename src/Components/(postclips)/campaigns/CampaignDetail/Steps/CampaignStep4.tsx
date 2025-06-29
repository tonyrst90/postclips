import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';
import { Campaign } from '@/Types/(postclips)/Campaign';
import { useCampaigns } from '@/Hooks/useCampaigns';
import { toast } from 'react-toastify';
import debounce from 'lodash/debounce';
import { fetchAPI } from '@/Clients/postclips/server/ApiClient';

interface CampaignStep4Props {
    campaign: Campaign;
    handleSaveDraft: () => void;
    onNextStep: () => void;
    onPreviousStep: () => void;
}

interface ClipPreferences {
    min_duration: string;
    max_duration: string;
    aspect_ratio: string;
    include_watermark: boolean;
    include_caption: boolean;
    include_music: boolean;
    target_platform: string[];
}

const MAX_OUTROS = 20;
const MAX_CAPTIONS = 20;

const CampaignStep4: React.FC<CampaignStep4Props> = ({ campaign, handleSaveDraft, onNextStep, onPreviousStep }) => {
    const [preferences, setPreferences] = useState<ClipPreferences>({
        min_duration: '',
        max_duration: '',
        aspect_ratio: '9:16',
        include_watermark: true,
        include_caption: true,
        include_music: true,
        target_platform: ['instagram', 'tiktok']
    });

    const {
        updateCampaignDraft,
        getCampaignCaptions,
        addCampaignCaption,
        deleteCampaignCaption,
        addCampaignTag,
        getCampaignTags,
        deleteCampaignTag,
        addCampaignOutro,
        getCampaignOutros,
        deleteCampaignOutro
    } = useCampaigns();

    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [nameFile, setNameFile] = useState<File | null>(null);
    const [logos, setLogos] = useState<{ logo_top_right_url: string | null; logo_top_left_url: string | null } | null>(null);
    const logoInputRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const [outros, setOutros] = useState<any[]>([]);
    const [captions, setCaptions] = useState<any[]>([]);
    const [tags, setTags] = useState<any[]>([]);
    const [captionModalOpen, setCaptionModalOpen] = useState(false);
    const [captionModalValue, setCaptionModalValue] = useState('');
    const [loadingCaptions, setLoadingCaptions] = useState(false);
    const [deletingCaptionId, setDeletingCaptionId] = useState<string | null>(null);
    const [tag, setTag] = useState('');
    const [loadingTag, setLoadingTag] = useState(false);
    const [loadingOutros, setLoadingOutros] = useState(false);
    const [uploadingOutroIndex, setUploadingOutroIndex] = useState<number | null>(null);
    const [deletingOutroId, setDeletingOutroId] = useState<string | null>(null);
    const [currentOutroIndex, setCurrentOutroIndex] = useState<number>(0);
    const [currentCaptionIndex, setCurrentCaptionIndex] = useState<number>(0);
    const [isPlayingOutro, setIsPlayingOutro] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const outroRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoadingCaptions(true);
            const captionsRes = await getCampaignCaptions(campaign.id);
            if (captionsRes.success && Array.isArray(captionsRes.data?.data)) {
                setCaptions(captionsRes.data.data);
            }
            setLoadingCaptions(false);

            const tagsRes = await getCampaignTags(campaign.id);
            if (tagsRes.success && Array.isArray(tagsRes.data?.data)) {
                setTags(tagsRes.data.data);
                if (tagsRes.data.data.length > 0) {
                    setTag(tagsRes.data.data[0].tag);
                }
            }

            setLoadingOutros(true);
            const outrosRes = await getCampaignOutros(campaign.id);
            if (outrosRes.success && Array.isArray(outrosRes.data?.data)) {
                setOutros(outrosRes.data.data);
            }
            setLoadingOutros(false);

            // Fetch logos
            const logosRes = await fetchAPI("GET", `/campaigns/${campaign.id}/logos`);
            if (logosRes.success && logosRes.data?.data) {
                setLogos(logosRes.data.data);
            }
        };
        fetchData();
    }, [campaign.id, getCampaignCaptions, getCampaignTags, getCampaignOutros]);

    const debouncedSaveTag = useCallback(
        debounce(async (newTag: string) => {
            if (!newTag.trim()) return;
            setLoadingTag(true);
            try {
                for (const existingTag of tags) {
                    await deleteCampaignTag(campaign.id, existingTag.id);
                }
                const res = await addCampaignTag(campaign.id, newTag.trim());
                if (res.success && res.data?.data) {
                    setTags([res.data.data]);
                    toast.success('Tag saved successfully');
                }
            } catch (error) {
                toast.error('Failed to save tag');
            }
            setLoadingTag(false);
        }, 1000),
        [campaign.id, tags, addCampaignTag, deleteCampaignTag]
    );

    const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTag = e.target.value;
        setTag(newTag);
        debouncedSaveTag(newTag);
    };

    const handleOutroChange = async (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('[handleOutroChange] Starting outro upload process');

        if (!event.target.files || !event.target.files[0]) {
            console.log('[handleOutroChange] No file selected');
            return;
        }

        if (outros.length >= MAX_OUTROS) {
            console.log('[handleOutroChange] Maximum outros limit reached');
            toast.error('Maximum limit of 20 outros reached');
            return;
        }

        const file = event.target.files[0];
        console.log('[handleOutroChange] File details:', {
            name: file.name,
            type: file.type,
            size: file.size
        });

        try {
            setUploadingOutroIndex(index);
            const formData = new FormData();
            formData.append('outro', file);

            console.log('[handleOutroChange] FormData created:', {
                fieldName: 'outro',
                fileName: file.name
            });

            console.log(`[handleOutroChange] Sending request to /campaigns/${campaign.id}/outros`);
            const response = await fetchAPI("POST", `/campaigns/${campaign.id}/outros`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log('[handleOutroChange] Response:', response);

            if (response.success && response.data?.data) {
                console.log('[handleOutroChange] Upload successful');
                setOutros(prev => [...prev, response.data.data]);
                toast.success('Outro uploaded successfully');
            } else {
                const errorMessage = typeof response.error === 'string' ? response.error : 'Failed to upload outro';
                console.error('[handleOutroChange] Upload failed:', errorMessage);
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('[handleOutroChange] Error:', error);
            toast.error('Failed to upload outro');
        } finally {
            setUploadingOutroIndex(null);
        }
    };

    const handleDeleteOutro = async (outroId: string) => {
        if (deletingOutroId === outroId) return;

        try {
            setDeletingOutroId(outroId);
            const response = await deleteCampaignOutro(campaign.id, outroId);
            if (response.success) {
                setOutros(prev => prev.filter(outro => outro.id !== outroId));
                toast.success('Outro deleted successfully');
            }
        } catch (error) {
            console.error('Error deleting outro:', error);
            toast.error('Failed to delete outro');
        } finally {
            setDeletingOutroId(null);
        }
    };

    const handleFileChange = async (setter: any, file: File | null, type: 'logo' | 'name') => {
        console.log('[handleFileChange] Starting file upload process');
        console.log('[handleFileChange] File:', file);
        console.log('[handleFileChange] Type:', type);

        if (!file) {
            console.log('[handleFileChange] No file provided, returning');
            return;
        }

        console.log(`[handleFileChange] Uploading ${type} file:`, {
            name: file.name,
            type: file.type,
            size: file.size
        });

        try {
            const formData = new FormData();
            formData.append(type === 'logo' ? 'logoTopRight' : 'logoTopLeft', file);

            console.log(`[handleFileChange] FormData created:`, {
                fieldName: type === 'logo' ? 'logoTopRight' : 'logoTopLeft',
                fileName: file.name
            });

            console.log(`[handleFileChange] Sending request to /campaigns/${campaign.id}/logos`);
            const response = await fetchAPI("POST", `/campaigns/${campaign.id}/logos`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(`[handleFileChange] Response:`, response);

            if (response.success) {
                console.log(`[handleFileChange] Upload successful for ${type}`);
                toast.success(`${type === 'logo' ? 'Logo' : 'Name'} uploaded successfully`);
                setter(file);

                // Fetch updated logos
                const logosRes = await fetchAPI("GET", `/campaigns/${campaign.id}/logos`);
                if (logosRes.success && logosRes.data?.data) {
                    setLogos(logosRes.data.data);
                }

                // Reset the file input
                if (type === 'logo' && logoInputRef.current?.value) {
                    logoInputRef.current.value = '';
                } else if (type === 'name' && nameInputRef.current?.value) {
                    nameInputRef.current.value = '';
                }
            } else {
                const errorMessage = typeof response.error === 'string' ? response.error : 'Failed to upload file';
                console.error(`[handleFileChange] Upload failed for ${type}:`, errorMessage);
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error(`[handleFileChange] Error uploading ${type}:`, error);
            toast.error(`Failed to upload ${type === 'logo' ? 'logo' : 'name'}`);
            // Reset the file input on error as well
            if (type === 'logo' && logoInputRef.current?.value) {
                logoInputRef.current.value = '';
            } else if (type === 'name' && nameInputRef.current?.value) {
                nameInputRef.current.value = '';
            }
        }
    };

    const handlePreferenceChange = (field: keyof ClipPreferences, value: any) => {
        setPreferences(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handlePlatformToggle = (platform: string) => {
        setPreferences(prev => ({
            ...prev,
            target_platform: prev.target_platform.includes(platform)
                ? prev.target_platform.filter(p => p !== platform)
                : [...prev.target_platform, platform]
        }));
    };

    const handleModalSave = async () => {
        if (!captionModalValue.trim()) return;
        const res = await addCampaignCaption(campaign.id, captionModalValue.trim());
        if (res.success && res.data?.data) {
            setCaptions(prev => [...prev, res.data.data]);
            setCaptionModalOpen(false);
            setCaptionModalValue('');
        }
    };

    const handleDeleteCaption = async (captionId: string) => {
        setDeletingCaptionId(captionId);
        const res = await deleteCampaignCaption(campaign.id, captionId);
        if (res.success) {
            setCaptions(prev => prev.filter(c => c.id !== captionId));
        }
        setDeletingCaptionId(null);
    };

    const handleSave = async () => {
        try {
            const response = await updateCampaignDraft(campaign.id, {
                clip_preferences: preferences
            });
            if (response.success) {
                toast.success('Clip preferences saved successfully');
                onNextStep();
            }
        } catch (error) {
            toast.error('Error saving clip preferences');
        }
    };

    // Function to get random index from array
    const getRandomIndex = (array: any[]) => {
        return Math.floor(Math.random() * array.length);
    };

    // Handle video end
    const handleVideoEnd = () => {
        if (outros.length > 0) {
            setIsPlayingOutro(true);
            setCurrentOutroIndex(getRandomIndex(outros));
            if (outroRef.current) {
                outroRef.current.play();
            }
        } else if (videoRef.current) {
            videoRef.current.play();
        }
    };

    // Handle outro end
    const handleOutroEnd = () => {
        setIsPlayingOutro(false);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    // Rotate captions periodically
    useEffect(() => {
        if (captions.length > 0) {
            const interval = setInterval(() => {
                setCurrentCaptionIndex(getRandomIndex(captions));
            }, 5000); // Change caption every 5 seconds
            return () => clearInterval(interval);
        }
    }, [captions]);

    return (
        <Container fluid className="campaign-detail p-4">
            <Row>
                <Col md={6}>
                    <h1 className="text-white mb-2">Customize your clips</h1>
                    <div className="mb-4 text-secondary">
                        Add multiple outros and captions and we'll mix them to create unique clip combinations
                    </div>
                    <Form>
                        <FormGroup className="mb-4">
                            <Label className="campaign-label">Logo in the top right corner</Label>
                            <div className="upload-box-square">
                                {logos?.logo_top_right_url && (
                                    <div className="preview-image" style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 1
                                    }}>
                                        <img
                                            src={logos.logo_top_right_url}
                                            alt="Logo"
                                            style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
                                        />
                                    </div>
                                )}
                                <Input
                                    innerRef={logoInputRef}
                                    type="file"
                                    accept="image/*"
                                    onClick={() => console.log('[Logo Input] Clicked')}
                                    onChange={(e) => {
                                        console.log('[Logo Input] onChange triggered');
                                        console.log('[Logo Input] Files:', e.target.files);
                                        if (e.target.files?.[0]) {
                                            console.log('[Logo Input] File selected:', {
                                                name: e.target.files[0].name,
                                                type: e.target.files[0].type,
                                                size: e.target.files[0].size
                                            });
                                        }
                                        handleFileChange(setLogoFile, e.target.files?.[0] || null, 'logo');
                                    }}
                                    style={{
                                        opacity: 0,
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        cursor: 'pointer',
                                        zIndex: 2 // Ensure it's above other elements
                                    }}
                                />
                                <div className="upload-content" style={{ position: 'relative', zIndex: logos?.logo_top_right_url ? 0 : 1 }}>
                                    <div className="upload-icon">↑</div>
                                    <div>Upload file</div>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup className="mb-4">
                            <Label className="campaign-label">Show name in the top left corner <span className="text-secondary">(optional)</span></Label>
                            <div className="upload-box-square">
                                {logos?.logo_top_left_url && (
                                    <div className="preview-image" style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 1
                                    }}>
                                        <img
                                            src={logos.logo_top_left_url}
                                            alt="Name"
                                            style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
                                        />
                                    </div>
                                )}
                                <Input
                                    innerRef={nameInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        console.log('[Name Input] File selected:', e.target.files?.[0]?.name);
                                        handleFileChange(setNameFile, e.target.files?.[0] || null, 'name');
                                    }}
                                    style={{ opacity: 0, position: 'absolute', width: '100%', height: '100%', cursor: 'pointer', zIndex: 2 }}
                                />
                                <div className="upload-content" style={{ position: 'relative', zIndex: logos?.logo_top_left_url ? 0 : 1 }}>
                                    <div className="upload-icon">↑</div>
                                    <div>Upload file</div>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup className="mb-4">
                            <Label className="campaign-label">Outro <span className="text-secondary">(You can add up to 20 unique outros)</span></Label>
                            <div className="text-secondary small mb-2">Add up to 20 unique outros</div>
                            {outros.length < MAX_OUTROS && (
                                <Button
                                    className="add-bio-button mb-3"
                                    onClick={() => document.getElementById('outro-upload')?.click()}
                                    disabled={uploadingOutroIndex !== null}
                                >
                                    {uploadingOutroIndex !== null ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Uploading...
                                        </>
                                    ) : (
                                        '+ Add outro'
                                    )}
                                </Button>
                            )}
                            <Input
                                type="file"
                                id="outro-upload"
                                accept="video/*"
                                onChange={(e) => handleOutroChange(outros.length, e)}
                                style={{ display: 'none' }}
                            />
                            <div className="row g-3">
                                {outros.map((outro, index) => (
                                    <div key={outro.id} className="col-12 col-md-6">
                                        <div className="upload-box" style={{ height: '200px' }}>
                                            {uploadingOutroIndex === index ? (
                                                <div className="uploading-indicator">
                                                    <div className="spinner-border text-light" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                    <div className="mt-2">Uploading...</div>
                                                </div>
                                            ) : (
                                                <>
                                                    <video
                                                        src={outro.outro_url}
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
                                                        className="delete-outro-btn"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleDeleteOutro(outro.id);
                                                        }}
                                                        disabled={deletingOutroId === outro.id}
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
                                                            cursor: deletingOutroId === outro.id ? 'wait' : 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            opacity: deletingOutroId === outro.id ? 0.5 : 1
                                                        }}
                                                    >
                                                        {deletingOutroId === outro.id ? (
                                                            <div className="spinner-border spinner-border-sm" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </div>
                                                        ) : (
                                                            '×'
                                                        )}
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {uploadingOutroIndex === outros.length && (
                                    <div className="col-12 col-md-6">
                                        <div className="upload-box" style={{ height: '200px' }}>
                                            <div className="uploading-indicator">
                                                <div className="spinner-border text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                <div className="mt-2">Uploading...</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </FormGroup>
                        <FormGroup className="mb-4">
                            <Label className="campaign-label">Caption <span className="text-secondary">(Add up to 20 unique captions)</span></Label>
                            <Button className="add-bio-button" onClick={() => setCaptionModalOpen(true)} disabled={captions.length >= MAX_CAPTIONS}>
                                + Add caption
                            </Button>
                            <div className="d-flex flex-wrap gap-2 mt-2">
                                {loadingCaptions ? (
                                    <Spinner size="sm" color="primary" />
                                ) : captions.map((caption, idx) => (
                                    <span key={caption.id} className="account-badge">
                                        {caption.caption}
                                        <span
                                            className="account-badge__close"
                                            style={{ cursor: deletingCaptionId === caption.id ? 'wait' : 'pointer', opacity: deletingCaptionId === caption.id ? 0.5 : 1 }}
                                            onClick={() => handleDeleteCaption(caption.id)}
                                        >
                                            {deletingCaptionId === caption.id ? <Spinner size="sm" /> : '×'}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </FormGroup>
                        <FormGroup className="mb-4">
                            <Label className="campaign-label">Tag <span className="text-secondary">(You only can add 1 tag)</span></Label>
                            <Input
                                type="text"
                                value={tag}
                                onChange={handleTagChange}
                                placeholder="Add tag"
                                className="input-dark"
                                maxLength={30}
                                disabled={loadingTag}
                            />
                            {loadingTag && <Spinner size="sm" color="primary" className="ms-2" />}
                        </FormGroup>
                        <div className="d-flex justify-content-between mt-5 mb-5">
                            <Button
                                className="btn-chipped btn-chipped-gray"
                                style={{ maxWidth: '200px', width: '100%' }}
                                onClick={onPreviousStep}
                            >
                                BACK
                            </Button>
                            <Button
                                className="btn-chipped btn-chipped-white"
                                style={{ maxWidth: '200px', width: '100%' }}
                                onClick={onNextStep}
                            >
                                NEXT
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
                    <div className="preview-container" style={{ maxWidth: 375, margin: '0 auto' }}>
                        <div className="phone-mockup-vertical" style={{
                            background: '#000',
                            borderRadius: 40,
                            padding: 20,
                            border: '8px solid #1A1A1A',
                            boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                            height: 700,
                            width: 340,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            {/* Main video */}
                            <video
                                ref={videoRef}
                                src="https://sb.postclips.com/storage/v1/object/public/postclips-main//step4-clip-preview.mp4"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 24,
                                    objectFit: 'cover',
                                    display: isPlayingOutro ? 'none' : 'block'
                                }}
                                onEnded={handleVideoEnd}
                                muted
                                playsInline
                            />
                            {/* Outro video */}
                            {outros.length > 0 && (
                                <video
                                    ref={outroRef}
                                    src={outros[currentOutroIndex]?.outro_url}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 24,
                                        objectFit: 'cover',
                                        display: isPlayingOutro ? 'block' : 'none'
                                    }}
                                    onEnded={handleOutroEnd}
                                    muted
                                    playsInline
                                />
                            )}
                            {/* Top right logo or skeleton */}
                            <div style={{
                                position: 'absolute',
                                top: 40,
                                right: 35,
                                zIndex: 2,
                                width: 48,
                                height: 48,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'transparent',
                            }}>
                                {logos?.logo_top_right_url ? (
                                    <img
                                        src={logos.logo_top_right_url}
                                        alt="Logo"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: 8
                                        }}
                                    />
                                ) : (
                                    <div style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 8,
                                        background: 'rgba(255,255,255,0.12)',
                                    }} />
                                )}
                            </div>
                            {/* Top left logo or skeleton */}
                            <div style={{
                                position: 'absolute',
                                top: 40,
                                left: 35,
                                zIndex: 2,
                                width: 48,
                                height: 48,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'transparent',
                            }}>
                                {logos?.logo_top_left_url ? (
                                    <img
                                        src={logos.logo_top_left_url}
                                        alt="Name"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            borderRadius: 8
                                        }}
                                    />
                                ) : (
                                    <div style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 8,
                                        background: 'rgba(255,255,255,0.12)',
                                    }} />
                                )}
                            </div>
                            {/* Caption and tag container or skeleton */}
                            <div style={{
                                position: 'absolute',
                                bottom: 20,
                                left: 0,
                                zIndex: 2,
                                textAlign: 'left',
                                width: '100%',
                                pointerEvents: 'none',
                                paddingLeft: 35,
                                paddingRight: 30,
                                paddingBottom: 10,
                            }}>
                                {captions.length > 0 ? (
                                    <div style={{
                                        color: 'white',
                                        fontWeight: 500,
                                        fontSize: 15,
                                        lineHeight: 1.3,
                                        textShadow: '0 1px 8px rgba(0,0,0,0.7)',
                                        marginBottom: 2,
                                        letterSpacing: 0.1,
                                        fontFamily: 'inherit',
                                    }}>
                                        {captions[currentCaptionIndex]?.caption}
                                    </div>
                                ) : (
                                    <div style={{
                                        width: '70%',
                                        height: 16,
                                        borderRadius: 4,
                                        background: 'rgba(255,255,255,0.12)',
                                        marginBottom: 6
                                    }} />
                                )}
                                {tag ? (
                                    <div style={{
                                        color: '#fff',
                                        fontWeight: 700,
                                        fontSize: 13,
                                        opacity: 0.85,
                                        textShadow: '0 1px 8px rgba(0,0,0,0.7)',
                                        fontFamily: 'inherit',
                                    }}>
                                        #{tag}
                                    </div>
                                ) : (
                                    <div style={{
                                        width: 60,
                                        height: 12,
                                        borderRadius: 4,
                                        background: 'rgba(255,255,255,0.12)'
                                    }} />
                                )}
                            </div>
                        </div>
                        <div className="text-center mt-2 text-secondary">Clip preview</div>
                    </div>
                </Col>
            </Row>
            <Modal isOpen={captionModalOpen} toggle={() => setCaptionModalOpen(false)} size="md" centered>
                <ModalHeader toggle={() => setCaptionModalOpen(false)}>Add caption</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label className="campaign-label">Caption</Label>
                        <Input
                            type="textarea"
                            maxLength={100}
                            className="input-dark mb-2"
                            placeholder="Caption text"
                            value={captionModalValue}
                            onChange={e => setCaptionModalValue(e.target.value)}
                        />
                        <div className="text-end mb-2" style={{ color: '#00E7FF', fontSize: 13 }}>{captionModalValue.length}/100</div>
                    </FormGroup>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-between">
                    <Button color="secondary" className="btn-chipped btn-chipped-gray" onClick={() => setCaptionModalOpen(false)} style={{ maxWidth: '200px', width: '100%' }}>Cancel</Button>
                    <Button color="primary" className="btn-chipped btn-chipped-white" onClick={handleModalSave} style={{ maxWidth: '200px', width: '100%' }} disabled={!captionModalValue.trim()}>Save</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
};

export default CampaignStep4; 