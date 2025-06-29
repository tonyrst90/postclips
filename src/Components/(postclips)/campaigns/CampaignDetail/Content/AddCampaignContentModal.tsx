import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import UploadBox from '../../../general/UploadBox';
import { toast } from 'react-toastify';

interface AddContentModalProps {
    isOpen: boolean;
    toggle: () => void;
    onSave: (data: any) => Promise<any>;
    isVideo: boolean;
    onUploadResult?: (result: { success: boolean; message: string }) => void;
}

const AddContentModal: React.FC<AddContentModalProps> = ({ isOpen, toggle, onSave, isVideo, onUploadResult }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [season, setSeason] = useState('');
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [captions, setCaptions] = useState<File | null>(null);
    const [video, setVideo] = useState<File | null>(null);
    const [contentUrl, setContentUrl] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const resetFields = () => {
        setTitle('');
        setDescription('');
        setSeason('');
        setThumbnail(null);
        setCaptions(null);
        setVideo(null);
        setContentUrl('');
        setThumbnailUrl('');
    };

    const handleSave = async () => {
        if (loading) return; // Prevent double submit
        if (isVideo) {
            if (!video) {
                toast.error('You must upload a video file.');
                return;
            }
            setLoading(true);
            const result = await onSave({ title, description, season, thumbnail, captions, video });
            setLoading(false);
            if (result?.success) {
                resetFields();
                toggle();
                onUploadResult?.({ success: true, message: result.message || 'Content uploaded successfully!' });
            } else {
                onUploadResult?.({ success: false, message: result?.message || 'Failed to upload content.' });
            }
        } else {
            if (!contentUrl) {
                toast.error('You must provide a content URL.');
                return;
            }
            if (!thumbnailUrl) {
                toast.error('You must provide a thumbnail URL.');
                return;
            }
            setLoading(true);
            const result = await onSave({ title, content_url: contentUrl, season, thumbnail_url: thumbnailUrl });
            setLoading(false);
            if (result?.success) {
                toast.success(result.message || 'Content uploaded successfully!');
                resetFields();
                toggle();
                onUploadResult?.({ success: true, message: result.message || 'Content uploaded successfully!' });
            } else {
                toast.error(result?.message || 'Failed to upload content.');
                onUploadResult?.({ success: false, message: result?.message || 'Failed to upload content.' });
            }
        }
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                <div className="campaign-subtitle">Add {isVideo ? 'Video' : 'Link'}</div>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label className="campaign-label" for="title">Title</Label>
                        <Input id="title" className="input-dark" value={title} onChange={e => setTitle(e.target.value)} required />
                    </FormGroup>
                    {isVideo ? (
                        <>
                            <FormGroup>
                                <Label className="campaign-label" for="description">Description (optional)</Label>
                                <Input id="description" className="input-dark" value={description} onChange={e => setDescription(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="campaign-label" for="season">Season (optional)</Label>
                                <Input id="season" className="input-dark" value={season} onChange={e => setSeason(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="campaign-label">Video File</Label>
                                <UploadBox
                                    label="video-upload"
                                    accept="video/*"
                                    onFileChange={setVideo}
                                    previewUrl={video ? URL.createObjectURL(video) : undefined}
                                >
                                    {video && (
                                        <video src={URL.createObjectURL(video)} controls width="100%" style={{ borderRadius: 8 }} />
                                    )}
                                </UploadBox>
                            </FormGroup>
                            <FormGroup>
                                <Label className="campaign-label">Thumbnail (recommended)</Label>
                                <div style={{ marginBottom: 8, color: '#aaa', fontSize: 14 }}>
                                    Select a cover that stands out and captures clipper's attention
                                </div>
                                <UploadBox
                                    label="thumbnail-upload"
                                    accept="image/*"
                                    onFileChange={setThumbnail}
                                    previewUrl={thumbnail ? URL.createObjectURL(thumbnail) : undefined}
                                >
                                    {thumbnail && (
                                        <img src={URL.createObjectURL(thumbnail)} alt="Thumbnail Preview" style={{ width: '100%', borderRadius: 8 }} />
                                    )}
                                </UploadBox>
                            </FormGroup>
                        </>
                    ) : (
                        <>
                            <FormGroup>
                                <Label className="campaign-label" for="contentUrl">Content URL</Label>
                                <Input id="contentUrl" value={contentUrl} onChange={e => setContentUrl(e.target.value)} required />
                            </FormGroup>
                            <FormGroup>
                                <Label className="campaign-label" for="thumbnailUrl">Thumbnail URL (optional)</Label>
                                <Input id="thumbnailUrl" value={thumbnailUrl} onChange={e => setThumbnailUrl(e.target.value)} />
                            </FormGroup>
                        </>
                    )}
                </Form>
            </ModalBody>
            <ModalFooter className="pb-3">
                <div className="d-flex justify-content-between">
                    <Button
                        className="btn-chipped btn-chipped-gray"
                        style={{
                            maxWidth: '200px',
                            width: '100%'
                        }}
                        onClick={toggle}
                        disabled={loading}
                    >
                        CANCEL
                    </Button>
                    <Button
                        className="btn-chipped btn-chipped-white"
                        style={{
                            maxWidth: '200px',
                            width: '100%'
                        }}
                        onClick={handleSave}
                        disabled={loading}
                    >
                        {loading ? (
                            <span>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> Saving...
                            </span>
                        ) : (
                            'SAVE'
                        )}
                    </Button>
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default AddContentModal;