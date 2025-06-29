import React, { useState, useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Badge, Spinner } from 'reactstrap';
import { Campaign } from '@/Types/(postclips)/Campaign';
import { useCampaigns } from '@/Hooks/useCampaigns';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { Edit2, Plus, Trash } from 'react-feather';

const PLATFORMS = [
    { key: 'tiktok', label: 'TikTok', icon: '/assets/images/(postclips)/socials/pc_tiktok.svg' },
    { key: 'instagram', label: 'Instagram', icon: '/assets/images/(postclips)/socials/pc_instagram.svg' },
    { key: 'facebook', label: 'Facebook', icon: '/assets/images/(postclips)/socials/pc_facebook.svg' },
    { key: 'twitter', label: 'X (Twitter)', icon: '/assets/images/(postclips)/socials/pc_twitter.svg' },
    { key: 'youtube', label: 'YouTube', icon: '/assets/images/(postclips)/socials/pc_youtube.svg' },
];

interface CampaignStep3Props {
    campaign: Campaign;
    handleSaveDraft: () => void;
    onNextStep: () => void;
    onPreviousStep: () => void;
}

interface Bio {
    id: string;
    bio: string;
    link: string;
    platforms: string[];
    created_at?: string;
}

interface BrandAccountPicture {
    id: string;
    picture_url: string;
}

const MAX_USERNAMES = 20;
const MAX_BIOS = 20;
const MAX_PICTURES = 20;

// Platform-specific UI components
const ProfilePicture = ({ src }: { src: string }) => {
    const imageSrc = src || '/assets/images/(postclips)/profile-placeholder.png';
    return (
        <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #232323',
            flexShrink: 0
        }}>
            <Image
                src={imageSrc}
                alt="Profile"
                width={64}
                height={64}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </div>
    );
};

const TikTokPreview = ({ username, bio, link, picture }: { username: string; bio: string; link: string; picture: string }) => (
    <div style={{
        width: '100%', height: '100%', background: '#000', color: '#fff',
        borderRadius: 32,
        overflow: 'hidden'
    }}>
        {/* Status Bar */}
        <div className="phone-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            fontSize: '14px',
            padding: '5px 12px',
            marginBottom: '12px'
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

        {/* Profile Section */}
        <div style={{ padding: '0 12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <ProfilePicture src={picture} />
                <div style={{ marginLeft: 12 }}>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{username}</div>
                    <div style={{ fontSize: 13, color: '#888' }}>{bio}</div>
                </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
                <div>
                    <div className="skeleton-box" style={{ width: 40, height: 20, marginBottom: 4 }} />
                    <div style={{ fontSize: 14, color: '#888' }}>Following</div>
                </div>
                <div>
                    <div className="skeleton-box" style={{ width: 40, height: 20, marginBottom: 4 }} />
                    <div style={{ fontSize: 14, color: '#888' }}>Followers</div>
                </div>
                <div>
                    <div className="skeleton-box" style={{ width: 40, height: 20, marginBottom: 4 }} />
                    <div style={{ fontSize: 14, color: '#888' }}>Likes</div>
                </div>
            </div>

            {/* Video Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={`video-grid-${i}`} style={{ aspectRatio: '9/16', background: '#232323', borderRadius: 4 }} />
                ))}
            </div>
        </div>
    </div>
);

const InstagramPreview = ({ username, bio, link, picture }: { username: string; bio: string; link: string; picture: string }) => (
    <div style={{
        width: '100%', height: '100%', background: '#000', color: '#fff',
        borderRadius: 32,
        overflow: 'hidden'
    }}>
        {/* Status Bar */}
        <div className="phone-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            fontSize: '14px',
            padding: '5px 12px',
            marginBottom: '12px'
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

        {/* Profile Section */}
        <div style={{ padding: '0 12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <ProfilePicture src={picture} />
                <div style={{ marginLeft: 12 }}>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{username}</div>
                    <div style={{ fontSize: 13, color: '#888' }}>{bio}</div>
                </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
                <div>
                    <div className="skeleton-box" style={{ width: 40, height: 20, marginBottom: 4 }} />
                    <div style={{ fontSize: 14, color: '#888' }}>Posts</div>
                </div>
                <div>
                    <div className="skeleton-box" style={{ width: 40, height: 20, marginBottom: 4 }} />
                    <div style={{ fontSize: 14, color: '#888' }}>Followers</div>
                </div>
                <div>
                    <div className="skeleton-box" style={{ width: 40, height: 20, marginBottom: 4 }} />
                    <div style={{ fontSize: 14, color: '#888' }}>Following</div>
                </div>
            </div>

            {/* Photo Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={`photo-grid-${i}`} style={{ aspectRatio: '1/1', background: '#232323' }} />
                ))}
            </div>
        </div>
    </div>
);

const FacebookPreview = ({ username, bio, link, picture }: { username: string; bio: string; link: string; picture: string }) => (
    <div style={{
        width: '100%', height: '100%', background: '#18191A', color: '#fff',
        borderRadius: 32,
        overflow: 'hidden'
    }}>
        {/* Status Bar */}
        <div className="phone-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            fontSize: '14px',
            padding: '5px 12px',
            marginBottom: '12px'
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

        {/* Profile Section */}
        <div style={{ padding: '0 12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <ProfilePicture src={picture} />
                <div style={{ marginLeft: 12 }}>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{username}</div>
                    <div style={{ fontSize: 13, color: '#888' }}>{bio}</div>
                </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                <div style={{ flex: 1, background: '#232323', borderRadius: 8, padding: 12 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Posts</div>
                    <div className="skeleton-box" style={{ width: 40, height: 24, marginTop: 4 }} />
                </div>
                <div style={{ flex: 1, background: '#232323', borderRadius: 8, padding: 12 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Friends</div>
                    <div className="skeleton-box" style={{ width: 40, height: 24, marginTop: 4 }} />
                </div>
            </div>

            {/* Recent Posts */}
            <div style={{ background: '#232323', borderRadius: 8, padding: 12 }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Recent Posts</div>
                <div style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                    No posts yet
                </div>
            </div>
        </div>
    </div>
);

const TwitterPreview = ({ username, bio, link, picture }: { username: string; bio: string; link: string; picture: string }) => (
    <div style={{
        width: '100%', height: '100%', background: '#000', color: '#fff',
        borderRadius: 32,
        overflow: 'hidden'
    }}>
        {/* Status Bar */}
        <div className="phone-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            fontSize: '14px',
            padding: '5px 12px',
            marginBottom: '12px'
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

        {/* Profile Section */}
        <div style={{ padding: '0 12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <ProfilePicture src={picture} />
                <div style={{ marginLeft: 12 }}>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{username}</div>
                    <div style={{ fontSize: 13, color: '#888' }}>{bio}</div>
                </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 14 }}>
                    <span className="skeleton-box" style={{ display: 'inline-block', width: 30, height: 16, verticalAlign: 'middle' }} /> Following
                </div>
                <div style={{ fontSize: 14 }}>
                    <span className="skeleton-box" style={{ display: 'inline-block', width: 30, height: 16, verticalAlign: 'middle' }} /> Followers
                </div>
            </div>

            {/* Tweets */}
            <div style={{ background: '#232323', borderRadius: 8, padding: 12 }}>
                <div style={{ fontSize: 14, color: '#888', textAlign: 'center' }}>
                    No tweets yet
                </div>
            </div>
        </div>
    </div>
);

const YouTubePreview = ({ username, bio, link, picture }: { username: string; bio: string; link: string; picture: string }) => (
    <div style={{
        width: '100%', height: '100%', background: '#0F0F0F', color: '#fff',
        borderRadius: 32,
        overflow: 'hidden'
    }}>
        {/* Status Bar */}
        <div className="phone-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            fontSize: '14px',
            padding: '5px 12px',
            marginBottom: '12px'
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

        {/* Profile Section */}
        <div style={{ padding: '0 12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <ProfilePicture src={picture} />
                <div style={{ marginLeft: 12 }}>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{username}</div>
                    <div style={{ fontSize: 13, color: '#888' }}>{bio}</div>
                </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 14 }}>
                    <span className="skeleton-box" style={{ display: 'inline-block', width: 40, height: 16, verticalAlign: 'middle' }} /> subscribers
                </div>
                <div style={{ fontSize: 14 }}>
                    <span className="skeleton-box" style={{ display: 'inline-block', width: 30, height: 16, verticalAlign: 'middle' }} /> videos
                </div>
            </div>

            {/* Video Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {[1, 2, 3, 4].map(i => (
                    <div key={`youtube-grid-${i}`} style={{ aspectRatio: '16/9', background: '#232323', borderRadius: 8 }} />
                ))}
            </div>
        </div>
    </div>
);

const CampaignStep3: React.FC<CampaignStep3Props> = ({ campaign, handleSaveDraft, onNextStep, onPreviousStep }) => {
    const {
        getBrandAccountUsernames,
        addBrandAccountUsername,
        deleteBrandAccountUsername,
        getBrandAccountBios,
        setBrandAccountBios,
        deleteBrandAccountBio,
        getBrandAccountPictures,
        addBrandAccountPicture,
        deleteBrandAccountPicture,
    } = useCampaigns();
    const brandId = campaign.brand_id;

    // Loading state
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState<string | null>(null);

    // Usernames
    const [usernames, setUsernames] = useState<string[]>([]);
    const [usernameInput, setUsernameInput] = useState('');

    // Bios
    const [bios, setBios] = useState<Bio[]>([]);
    const [bioModalOpen, setBioModalOpen] = useState(false);
    const [bioModalData, setBioModalData] = useState<{ bio: string; link: string; platforms: string[] }>({
        bio: '',
        link: '',
        platforms: []
    });

    // Profile pictures
    const [pictures, setPictures] = useState<BrandAccountPicture[]>([]);
    const [pictureFiles, setPictureFiles] = useState<File[]>([]);
    const [uploadingPicture, setUploadingPicture] = useState(false);
    const [deletingPictureId, setDeletingPictureId] = useState<string | null>(null);

    // Preview state
    const [preview, setPreview] = useState({
        username: '',
        bio: '',
        link: '',
        picture: '',
        platform: 'tiktok' // Default platform
    });

    // Fetch all data on mount
    useEffect(() => {
        const fetchData = async () => {
            if (!brandId) {
                setLoadingError('No brand ID provided');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setLoadingError(null);

                // Fetch all data in parallel
                const [usernamesRes, biosRes, picturesRes] = await Promise.all([
                    getBrandAccountUsernames(brandId),
                    getBrandAccountBios(brandId),
                    getBrandAccountPictures(brandId)
                ]);

                // Handle usernames
                if (usernamesRes.success && Array.isArray(usernamesRes.data)) {
                    setUsernames(usernamesRes.data.map((u: any) => u.username));
                } else {
                    console.error('Failed to fetch usernames:', usernamesRes);
                }

                // Handle bios
                if (biosRes.success && biosRes.data?.data && Array.isArray(biosRes.data.data)) {
                    const formattedBios = biosRes.data.data.map((bio: any) => ({
                        ...bio,
                        platforms: Array.isArray(bio.platforms) ? bio.platforms : []
                    }));
                    setBios(formattedBios);
                } else {
                    console.error('Failed to fetch bios:', biosRes);
                }

                // Handle pictures
                if (picturesRes.success && Array.isArray(picturesRes.data)) {
                    setPictures(picturesRes.data);
                } else {
                    console.error('Failed to fetch pictures:', picturesRes);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
                setLoadingError('Failed to load data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [brandId, getBrandAccountUsernames, getBrandAccountBios, getBrandAccountPictures]);

    // Username tag input logic
    const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => setUsernameInput(e.target.value);
    const handleUsernameKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if ((e.key === 'Enter' || e.key === ',' || e.key === 'Tab') && usernameInput.trim()) {
            e.preventDefault();
            if (usernames.length < MAX_USERNAMES && !usernames.includes(usernameInput.trim())) {
                if (brandId) {
                    const res = await addBrandAccountUsername(brandId, usernameInput.trim());
                    if (res.success) {
                        setUsernames([...usernames, usernameInput.trim()]);
                    }
                }
            }
            setUsernameInput('');
        }
    };

    const removeUsername = async (idx: number) => {
        if (!brandId) return;
        const usernameToRemove = usernames[idx];
        const res = await deleteBrandAccountUsername(brandId, usernameToRemove);
        if (res.success) {
            setUsernames(usernames.filter((_, i) => i !== idx));
        }
    };

    // Bio modal handlers
    const handleModalBioChange = (field: 'bio' | 'link', value: string) => {
        setBioModalData(prev => ({ ...prev, [field]: value }));
    };

    const handlePlatformToggle = (platform: string) => {
        setBioModalData(prev => ({
            ...prev,
            platforms: prev.platforms.includes(platform)
                ? prev.platforms.filter(p => p !== platform)
                : [...prev.platforms, platform]
        }));
    };

    const handleModalSave = async () => {
        if (!brandId || !bioModalData.bio || bioModalData.platforms.length === 0) {
            toast.error('Please fill in all required fields');
            return;
        }

        try {
            const res = await setBrandAccountBios(brandId, bioModalData);
            if (res.success && res.data?.data) {
                // Ensure platforms is an array and has a unique ID
                const newBio = {
                    ...res.data.data,
                    platforms: Array.isArray(res.data.data.platforms) ? res.data.data.platforms : []
                };
                setBios(prevBios => [...prevBios, newBio]);
                setBioModalOpen(false);
                setBioModalData({ bio: '', link: '', platforms: [] });
            }
        } catch (error) {
            toast.error('An error occurred while saving bio');
        }
    };

    const handleDeleteBio = async (bioId: string) => {
        if (!brandId) return;
        try {
            const res = await deleteBrandAccountBio(brandId, bioId);
            if (res.success) {
                setBios(bios.filter(b => b.id !== bioId));
            }
        } catch (error) {
            toast.error('An error occurred while deleting bio');
        }
    };

    // Profile picture logic
    const handlePictureChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0] && pictures.length < MAX_PICTURES && brandId) {
            setUploadingPicture(true);
            const file = e.target.files[0];
            const res = await addBrandAccountPicture(brandId, file);
            if (res.success && res.data && res.data.picture_url) {
                setPictures([...pictures, res.data]);
                setPictureFiles([...pictureFiles, file]);
            }
            setUploadingPicture(false);
        }
    };

    const handleDeletePicture = async (idx: number) => {
        if (!brandId) return;
        const picture = pictures[idx];
        if (!picture || deletingPictureId === picture.id) return;

        setDeletingPictureId(picture.id);
        try {
            const res = await deleteBrandAccountPicture(brandId, picture.id);
            if (res.success) {
                setPictures(pictures.filter((_, i) => i !== idx));
                setPictureFiles(pictureFiles.filter((_, i) => i !== idx));
            }
        } catch (error) {
            toast.error('An error occurred while deleting the picture');
        } finally {
            setDeletingPictureId(null);
        }
    };

    // Helper to get a random item from an array
    const getRandom = (arr: any[]) => arr.length ? arr[Math.floor(Math.random() * arr.length)] : '';

    const randomizePreview = () => {
        // Username
        const username = getRandom(usernames) || 'username';
        // Picture
        const picture = getRandom(pictures)?.picture_url || '/assets/images/(postclips)/profile-placeholder.png';

        let bio = '';
        let link = '';
        let platform = 'tiktok';

        if (bios.length > 0) {
            const randomBio = getRandom(bios);
            if (randomBio) {
                bio = randomBio.bio;
                link = randomBio.link || '';
                platform = randomBio.platforms?.[0] || 'tiktok';
            }
        } else {
            // If no bios, pick a random platform
            platform = getRandom(PLATFORMS.map(p => p.key)) || 'tiktok';
            bio = 'Your bio here';
            link = '';
        }

        setPreview({ username, bio, link, picture, platform });
    };

    // Initialize preview on load or when data changes
    useEffect(() => {
        if (!loading) {
            randomizePreview();
        }
    }, [usernames, bios, pictures, loading]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 400 }}>
                <Spinner color="primary" />
            </div>
        );
    }

    if (loadingError) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 400 }}>
                <div className="text-center">
                    <div className="text-danger mb-3">{loadingError}</div>
                    <Button color="primary" onClick={() => window.location.reload()}>
                        Retry
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <Container fluid className="campaign-detail p-4">
            <Row>
                <Col md={8} xs={12}>
                    <h1 className="text-white mb-4">Design your accounts</h1>
                    <div className="mb-4">
                        <div className="campaign-label mb-1">Accounts usernames</div>
                        <div className="mb-2 text-secondary" style={{ fontSize: 14 }}>Add up to 20 unique usernames</div>
                        <div className="input-dark d-flex flex-wrap align-items-center" style={{ minHeight: 48, gap: 8, padding: 8, height: "auto" }}>
                            {usernames.map((u, idx) => (
                                <Badge key={u} color="primary" pill className="account-badge">
                                    {u} <span className="account-badge__close" onClick={() => removeUsername(idx)}>&times;</span>
                                </Badge>
                            ))}
                            {usernames.length < MAX_USERNAMES && (
                                <Input
                                    type="text"
                                    value={usernameInput}
                                    onChange={handleUsernameInput}
                                    onKeyDown={handleUsernameKeyDown}
                                    placeholder="Add username"
                                    style={{ background: 'transparent', border: 'none', color: '#fff', minWidth: 120, height: 'auto' }}
                                    className="shadow-none"
                                />
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="campaign-label mb-1">Bio & link in bio</div>
                        <div className="mb-3 text-secondary" style={{ fontSize: 14 }}>Add up to 20 unique bios & links in bio</div>
                        <Button className="add-bio-button" onClick={() => setBioModalOpen(true)}>
                            <Edit2 size={16} />
                            Add bio
                        </Button>

                        {/* List of existing bios */}
                        <div className="mt-3">
                            {bios.map((bio) => (
                                <div key={bio.id} className="bio-card">
                                    <div className="bio-card__header">
                                        <div>
                                            <div className="bio-card__title">Bio</div>
                                            <div className="bio-card__content">{bio.bio}</div>
                                            <div className="bio-card__title">Link</div>
                                            <div className="bio-card__content bio-card__content--link">{bio.link || 'No link set'}</div>
                                            <div className="bio-card__title">Platforms</div>
                                            <div className="bio-card__platforms">
                                                {Array.isArray(bio.platforms) && bio.platforms.map((platform, index) => (
                                                    <Badge
                                                        key={`${bio.id}-${platform}-${index}`}
                                                        color="primary"
                                                        pill
                                                        className="social-badge"
                                                    >
                                                        {platform}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <Button
                                            color="link"
                                            className="bio-card__delete"
                                            onClick={() => handleDeleteBio(bio.id)}
                                        >
                                            <Trash size={16} color="#F64B4B" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bio Modal */}
                        <Modal isOpen={bioModalOpen} toggle={() => setBioModalOpen(false)} size="lg" centered>
                            <ModalHeader toggle={() => setBioModalOpen(false)}>Add bio</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label className="campaign-label">Bio</Label>
                                    <Input
                                        type="textarea"
                                        maxLength={40}
                                        className="input-dark mb-2"
                                        placeholder="Bio text"
                                        value={bioModalData.bio}
                                        onChange={e => handleModalBioChange('bio', e.target.value)}
                                    />
                                    <div className="text-end mb-2" style={{ color: '#00E7FF', fontSize: 13 }}>{bioModalData.bio.length}/40</div>
                                    <Label className="campaign-label">Link in bio</Label>
                                    <Input
                                        type="text"
                                        className="input-dark mb-4"
                                        placeholder="Link in bio"
                                        value={bioModalData.link}
                                        onChange={e => handleModalBioChange('link', e.target.value)}
                                    />
                                    <Label className="campaign-label mb-3">Select platforms</Label>
                                    <div className="d-flex flex-wrap gap-3">
                                        {PLATFORMS.map(platform => (
                                            <div key={`platform-${platform.key}`} className="platform-checkbox">
                                                <Input
                                                    type="checkbox"
                                                    id={`platform-${platform.key}`}
                                                    checked={bioModalData.platforms.includes(platform.key)}
                                                    onChange={() => handlePlatformToggle(platform.key)}
                                                />
                                                <Label for={`platform-${platform.key}`}>
                                                    <Image
                                                        src={platform.icon}
                                                        alt={platform.label}
                                                        width={24}
                                                        height={24}
                                                    />
                                                    {platform.label}
                                                </Label>
                                            </div>
                                        ))}
                                    </div>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter className="d-flex justify-content-between">
                                <Button color="secondary" className="btn-chipped btn-chipped-gray" onClick={() => setBioModalOpen(false)} style={{ maxWidth: '200px', width: '100%' }}>Back</Button>
                                <Button color="primary" className="btn-chipped btn-chipped-white" onClick={handleModalSave} style={{ maxWidth: '200px', width: '100%' }}>Save</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="mb-4">
                        <div className="campaign-label mb-1">Profile pictures</div>
                        <div className="mb-2 text-secondary" style={{ fontSize: 14 }}>Add up to 20 unique profile pictures</div>
                        <div className="d-flex align-items-center" style={{ gap: 12 }}>
                            {pictures.map((pic, idx) => (
                                <div key={idx} style={{ position: 'relative' }}>
                                    <Image src={pic.picture_url} alt="Profile" width={56} height={56} style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid #232323' }} />
                                    <Button
                                        color="link"
                                        className="p-0"
                                        style={{ position: 'absolute', top: -8, right: -8 }}
                                        onClick={() => handleDeletePicture(idx)}
                                        disabled={deletingPictureId === pic.id}
                                    >
                                        {deletingPictureId === pic.id ? (
                                            <Spinner size="sm" color="primary" />
                                        ) : (
                                            <span style={{ color: '#fff', fontSize: 18 }}>&times;</span>
                                        )}
                                    </Button>
                                </div>
                            ))}
                            {pictures.length < MAX_PICTURES && (
                                <label style={{ width: 56, height: 56, borderRadius: '50%', background: '#232323', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: uploadingPicture ? 'wait' : 'pointer', fontSize: 32, color: '#888', position: 'relative' }}>
                                    {uploadingPicture ? (
                                        <span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                                            <Spinner size="sm" color="primary" />
                                        </span>
                                    ) : (
                                        <Plus size={24} />
                                    )}
                                    <Input type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePictureChange} disabled={uploadingPicture} />
                                </label>
                            )}
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mt-5 mb-5">
                        <Button
                            className="btn-chipped btn-chipped-gray"
                            style={{
                                maxWidth: '200px',
                                width: '100%'
                            }}
                            onClick={onPreviousStep}
                        >
                            BACK
                        </Button>
                        <Button
                            className="btn-chipped btn-chipped-white"
                            style={{
                                maxWidth: '200px',
                                width: '100%'
                            }}
                            onClick={() => {
                                // Save all changes before proceeding
                                handleSaveDraft();
                                onNextStep();
                            }}
                        >
                            NEXT
                        </Button>
                    </div>
                </Col>
                <Col md={4} xs={12} className="mt-4 mt-md-0">
                    <div
                        className="preview-container"
                        style={{
                            position: typeof window !== 'undefined' && window.innerWidth >= 768 ? 'sticky' : 'static',
                            top: typeof window !== 'undefined' && window.innerWidth >= 768 ? '100px' : undefined,
                            background: '#181818',
                            borderRadius: 24,
                            padding: 16,
                            minHeight: 0,
                            width: '100%',
                            maxWidth: 420,
                            margin: '0 auto',
                            boxSizing: 'border-box',
                        }}
                    >
                        <div style={{ color: '#fff', fontWeight: 600, marginBottom: 12 }}>Clipper's account preview</div>
                        <div style={{ marginBottom: 16 }}>
                            <div className="d-flex align-items-center gap-2">
                                {PLATFORMS.find(p => p.key === preview.platform)?.icon && (
                                    <Image
                                        src={PLATFORMS.find(p => p.key === preview.platform)?.icon || ''}
                                        alt={PLATFORMS.find(p => p.key === preview.platform)?.label || ''}
                                        width={24}
                                        height={24}
                                    />
                                )}
                                <span style={{ color: '#fff', fontSize: 14 }}>
                                    {PLATFORMS.find(p => p.key === preview.platform)?.label || ''}
                                </span>
                            </div>
                        </div>
                        <div className="preview-phone-inner" style={{
                            width: '100%',
                            maxWidth: 340,
                            height: '440px',
                            backgroundColor: '#181818',
                            borderRadius: '32px',
                            boxShadow: '0 0 16px #0008',
                            padding: '5px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            overflow: 'hidden',
                            margin: '0 auto'
                        }}>
                            {preview.platform === 'tiktok' && <TikTokPreview {...preview} />}
                            {preview.platform === 'instagram' && <InstagramPreview {...preview} />}
                            {preview.platform === 'facebook' && <FacebookPreview {...preview} />}
                            {preview.platform === 'twitter' && <TwitterPreview {...preview} />}
                            {preview.platform === 'youtube' && <YouTubePreview {...preview} />}
                        </div>
                        <div className="mt-3 text-secondary" style={{ fontSize: 14 }}>Different combinations can be generated</div>
                        <Button color="link" className="p-0 mt-1" style={{ color: '#00E7FF', fontWeight: 600, fontSize: 15 }} onClick={randomizePreview}>
                            <span style={{ textDecoration: 'underline' }}>RANDOMIZE</span>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CampaignStep3; 