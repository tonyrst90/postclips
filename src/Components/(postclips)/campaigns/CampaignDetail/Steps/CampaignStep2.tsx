// CampaignStep2.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Spinner, Progress } from 'reactstrap';
import { useCampaigns, CampaignContent } from '@/Hooks/useCampaigns';
import { toast } from 'react-toastify';
import { Campaign } from '@/Types/(postclips)/Campaign';
import Image from 'next/image';
import AddCampaignContentModal from '../Content/AddCampaignContentModal';
import { Edit2, Trash2, Move } from 'react-feather';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { checkVideoStatus } from '@/Clients/postclips/server/uploadLargeFile';
import { useAuth } from '@/Providers/SessionProvider';
interface CampaignStep2Props {
    campaign: Campaign;
    handleSaveDraft: () => void;
    onNextStep: () => void;
    onPreviousStep: () => void;
}

interface SortableItemProps {
    id: string;
    children: React.ReactNode;
}

const SortableItem = ({ id, children }: SortableItemProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </div>
    );
};

const CampaignStep2: React.FC<CampaignStep2Props> = ({ campaign, handleSaveDraft, onNextStep, onPreviousStep }) => {
    const { token } = useAuth();
    const [uploadedContent, setUploadedContent] = useState<CampaignContent[]>([]);
    const [contentLoading, setContentLoading] = useState(true);
    const [uploadingContentIndex, setUploadingContentIndex] = useState<number | null>(null);
    const [deletingContentId, setDeletingContentId] = useState<string | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showLinkInput, setShowLinkInput] = useState(false);
    const [linkUrl, setLinkUrl] = useState('');
    const [linkTitle, setLinkTitle] = useState('');
    const [linkDescription, setLinkDescription] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [isVideo, setIsVideo] = useState(true);
    const [isUploading, setIsUploading] = useState(false);

    const { uploadCampaignContent, deleteCampaignContent, fetchCampaignContent, reorderCampaignContent, uploadProgress } = useCampaigns();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const fetchAndSetCampaignContent = useCallback(async () => {
        setContentLoading(true);
        const content = await fetchCampaignContent(campaign.id);
        setUploadedContent(content);
        setContentLoading(false);
    }, [campaign.id, fetchCampaignContent]);

    const handleUploadResult = (result: { success: boolean }) => {
        if (result.success) {
            fetchAndSetCampaignContent();
        }
        setIsUploading(false);
    };

    useEffect(() => {
        fetchAndSetCampaignContent();
    }, [fetchAndSetCampaignContent]);

    const handleMediaChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setUploadingContentIndex(index);
            setIsUploading(true);

            uploadCampaignContent(campaign.id, {
                title: file.name,
                content_type: 'file',
                file: file
            }).then((response) => {
                if (response.success && response.data?.data) {
                    const content = response.data.data;
                    setUploadedContent(prev => {
                        const newContent = [...prev];
                        newContent[index] = content;
                        return newContent;
                    });
                    toast.success('Content uploaded successfully');
                }
            }).catch((error: Error) => {
                toast.error('Error uploading content');
                console.error('Error uploading content:', error);
            }).finally(() => {
                setUploadingContentIndex(null);
                setIsUploading(false);
            });
        }
    };

    const handleAddLink = async () => {
        if (!linkUrl || !linkTitle) {
            toast.error('Please provide both title and URL');
            return;
        }

        try {
            const response = await uploadCampaignContent(campaign.id, {
                title: linkTitle,
                description: linkDescription,
                content_type: 'link',
                content_url: linkUrl,
                thumbnail_url: linkUrl // You might want to add a thumbnail URL field
            });

            if (response.success && response.data?.data) {
                const content = response.data.data;
                setUploadedContent(prev => [...prev, content]);
                toast.success('Link added successfully');
                setShowLinkInput(false);
                setLinkUrl('');
                setLinkTitle('');
                setLinkDescription('');
            }
        } catch (error) {
            toast.error('Error adding link');
            console.error('Error adding link:', error);
        }
    };

    const handleDeleteContent = async (index: number, e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        const content = uploadedContent[index];
        if (!content || deletingContentId === content.id) return;

        try {
            setDeletingContentId(content.id);
            const response = await deleteCampaignContent(content.id);
            if (response.success) {
                await fetchAndSetCampaignContent();
                toast.success('Content deleted successfully');
            } else {
                toast.error('Error deleting content');
            }
        } catch (error) {
            toast.error('Error deleting content');
            console.error('Error deleting content:', error);
        } finally {
            setDeletingContentId(null);
        }
    };

    const handleAddContent = async (data: any) => {
        setIsUploading(true);
        if (isVideo) {
            return await uploadCampaignContent(campaign.id, {
                title: data.title,
                description: data.description,
                content_type: 'file',
                file: data.video,
                season: data.season,
            });
        } else {
            return await uploadCampaignContent(campaign.id, {
                title: data.title,
                content_type: 'link',
                content_url: data.content_url,
                thumbnail_url: data.thumbnail_url,
                season: data.season,
            });
        }
    };

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setUploadedContent((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                const newItems = arrayMove(items, oldIndex, newIndex);

                // Update ordering in backend
                const contentIds = newItems.map(item => item.id);
                reorderCampaignContent(campaign.id, contentIds);

                return newItems;
            });
        }
    };

    // Add function to check and update video status
    const updateVideoStatuses = useCallback(async () => {
        if (!token) return;
        const needsUpdate = uploadedContent.filter(
            content => content.cloudflare_video_id &&
                content.cloudflare_status &&
                content.cloudflare_status !== 'ready' &&
                content.cloudflare_status !== 'error'
        );

        if (needsUpdate.length === 0) return;

        console.log(`Checking status for ${needsUpdate.length} processing videos...`);

        let hasUpdates = false;

        for (const content of needsUpdate) {
            try {
                const response = await checkVideoStatus(content.cloudflare_video_id!, token);

                if (response.success && response.data) {
                    console.log(`Video ${content.cloudflare_video_id} status:`, response.data.status);

                    if (response.data.ready || response.data.status === 'error') {
                        hasUpdates = true;
                    }
                }
            } catch (error) {
                console.error('Error checking video status:', error);
            }
        }

        // If any videos were updated, refresh the content list
        if (hasUpdates) {
            console.log('Videos updated, refreshing content list...');
            await fetchAndSetCampaignContent();
        }
    }, [uploadedContent, token, fetchAndSetCampaignContent]);

    // Check status on mount and periodically
    useEffect(() => {
        // Initial check on mount
        updateVideoStatuses();

        // Set up periodic checks
        const interval = setInterval(() => {
            updateVideoStatuses();
        }, 10000); // Check every 10 seconds

        return () => clearInterval(interval);
    }, [updateVideoStatuses]);

    // Also add a manual refresh button
    const handleManualRefresh = async () => {
        setContentLoading(true);
        await updateVideoStatuses();
        await fetchAndSetCampaignContent();
        setContentLoading(false);
        toast.info('Content refreshed');
    };

    return (
        <Container fluid className="campaign-detail p-4">
            <Row>
                <Col md={12}>
                    <h1 className="text-white mb-4">Upload Media</h1>

                    {/* Upload Progress Bar */}
                    {isUploading && uploadProgress > 0 && (
                        <div className="mb-4">
                            <div className="d-flex justify-content-between mb-2">
                                <span>Uploading...</span>
                                <span>{uploadProgress}%</span>
                            </div>
                            <Progress value={uploadProgress} />
                        </div>
                    )}

                    <Form>
                        {contentLoading ? (
                            <div className="campaign-content-loading">
                                <Spinner color="light" />
                            </div>
                        ) : uploadedContent.length > 0 ? (
                            <div className="media-list">
                                <div className="media-list-header">
                                    <div className="media-list-header__drag"></div>
                                    <div className="media-list-header__thumb">Video</div>
                                    <div className="media-list-header__spacer"></div>
                                    <div className="media-list-header__season">Season</div>
                                    <div className="media-list-header__actions"></div>
                                </div>
                                <DndContext
                                    sensors={sensors}
                                    collisionDetection={closestCenter}
                                    onDragEnd={handleDragEnd}
                                >
                                    <SortableContext
                                        items={uploadedContent.map(item => item.id)}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        {uploadedContent.map((item) => (
                                            <SortableItem key={item.id} id={item.id}>
                                                <div className="media-list-row">
                                                    <div className="media-list-row__drag">
                                                        <Move size={20} />
                                                    </div>
                                                    <div className="media-list-row__thumb">
                                                        {item.cloudflare_status && item.cloudflare_status !== 'ready' ? (
                                                            <div className="thumbnail-loader">
                                                                <Spinner size="sm" color="light" />
                                                                <span className="processing-text">Processing...</span>
                                                            </div>
                                                        ) : (
                                                            <Image
                                                                src={item.thumbnail_url || '/assets/images/default-thumb.jpg'}
                                                                alt={item.title}
                                                                className="media-list-row__img"
                                                                width={120}
                                                                height={68}
                                                                onError={(e) => {
                                                                    // If thumbnail fails, show default
                                                                    (e.target as HTMLImageElement).src = '/assets/images/default-thumb.jpg';
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="media-list-row__info">
                                                        <div className="media-list-row__title">{item.title}</div>
                                                        <div className="media-list-row__desc">{item.description}</div>
                                                    </div>
                                                    <div className="media-list-row__season">{item.season || 'Not assigned'}</div>
                                                    <div className="media-list-row__actions">
                                                        <button
                                                            className="icon-btn"
                                                            onClick={e => handleDeleteContent(uploadedContent.findIndex(i => i.id === item.id), e)}
                                                            disabled={deletingContentId === item.id}
                                                        >
                                                            {deletingContentId === item.id ? (
                                                                <Spinner size="sm" />
                                                            ) : (
                                                                <Trash2 size={18} />
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </SortableItem>
                                        ))}
                                    </SortableContext>
                                </DndContext>
                                <div className="media-list-add">
                                    <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
                                        <DropdownToggle className="add-video-btn" disabled={isUploading}>
                                            {isUploading ? 'UPLOADING...' : 'ADD VIDEO'} <span className="add-video-btn__arrow">▼</span>
                                        </DropdownToggle>
                                        <DropdownMenu dark>
                                            <DropdownItem onClick={() => { setIsVideo(true); setModalOpen(true); }}>
                                                UPLOAD FILE
                                            </DropdownItem>
                                            <DropdownItem onClick={() => { setIsVideo(false); setModalOpen(true); }}>
                                                ADD VIA LINK
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Info Banner */}
                                <div className="media-upload-info-banner">
                                    <span className="media-upload-info-banner__icon">
                                        <Image
                                            src="/assets/images/(postclips)/campaigns/step2/shield.svg"
                                            alt="!"
                                            className="next-image-full"
                                            width={28}
                                            height={28}
                                            priority
                                        />
                                    </span>
                                    <div className="media-upload-info-banner__text">
                                        <div className="media-upload-info-banner__title">Post Clips is an end-to-end closed system</div>
                                        <div className="media-upload-info-banner__desc">
                                            Users can watch, edit, and post content—all without ever leaving the platform. Content is fully protected and cannot be downloaded, screen-recorded, exported, or accessed externally, ensuring complete security and control
                                        </div>
                                    </div>
                                </div>
                                <div className="media-upload-placeholder">
                                    {/* Headline */}
                                    <div className="media-upload-headline">
                                        Uploaded videos will be used by clippers to create clips
                                    </div>
                                    <div className="media-upload-description">
                                        You can upload content as files or links for streaming. Organize videos into seasons for better accessibility.
                                    </div>
                                    {/* Add Video Button with Dropdown */}
                                    <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)} className="media-upload-dropdown">
                                        <DropdownToggle caret disabled={isUploading}>
                                            {isUploading ? 'UPLOADING...' : 'ADD VIDEO'}
                                        </DropdownToggle>
                                        <DropdownMenu dark>
                                            <DropdownItem onClick={() => { setIsVideo(true); setModalOpen(true); }}>
                                                UPLOAD FILE
                                            </DropdownItem>
                                            <DropdownItem onClick={() => { setIsVideo(false); setModalOpen(true); }}>
                                                ADD VIA LINK
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </>
                        )}

                        <div className="d-flex justify-content-between mt-5 mb-5">
                            <Button
                                className="btn-chipped btn-chipped-gray"
                                style={{
                                    maxWidth: '200px',
                                    width: '100%'
                                }}
                                onClick={onPreviousStep}
                                disabled={isUploading}
                            >
                                BACK
                            </Button>
                            <Button
                                className="btn-chipped btn-chipped-white"
                                style={{
                                    maxWidth: '200px',
                                    width: '100%'
                                }}
                                onClick={onNextStep}
                                disabled={isUploading}
                            >
                                NEXT
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
            <AddCampaignContentModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(false)}
                onSave={handleAddContent}
                isVideo={isVideo}
                onUploadResult={handleUploadResult}
            />
        </Container>
    );
};

export default CampaignStep2;