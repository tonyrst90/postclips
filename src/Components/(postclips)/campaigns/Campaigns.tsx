"use client";

import React, { useEffect, useCallback, useState } from 'react';
import { useCampaigns } from '@/Hooks/useCampaigns';
import EmptyCampaigns from './EmptyCampaigns';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    Button,
    Input,
    Nav,
    NavItem,
    NavLink,
    Progress,
} from 'reactstrap';
import { ChevronLeft, ChevronRight } from 'react-feather';
import useEmblaCarousel from 'embla-carousel-react';
import CreateCampaignModal from './CreateCampaignModal';
import { useRouter } from 'next/navigation';

interface CampaignsProps { }

const formatNumber = (num: number): string => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    // For numbers less than 1000, round to nearest whole number
    return Math.round(num).toString();
};

const formatAverageViews = (num: number): string => {
    // Round to nearest whole number for average views
    return Math.round(num).toString();
};

const formatPercentage = (num: number): string => {
    return num.toFixed(1) + '%';
};

const CampaignSkeleton = () => (
    <Col>
        <Card className="campaign-card skeleton-card">
            <div className="skeleton-img"></div>
            <CardBody>
                <div className="skeleton-title"></div>
                <div className="campaign-metrics">
                    <div className="metric-box metric-box-right-chip">
                        <div className="skeleton-label"></div>
                        <div className="skeleton-value"></div>
                    </div>
                    <div className="metric-box metric-box-left-chip">
                        <div className="skeleton-label"></div>
                        <div className="skeleton-value"></div>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
);

const Campaigns: React.FC<CampaignsProps> = () => {
    const router = useRouter();
    const { campaigns, topCampaigns, totalAnalytics, loading, error, refetchCampaigns, handleSearch } = useCampaigns();
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
        dragFree: false,
        containScroll: false
    });
    const [activeTab, setActiveTab] = useState('active');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
        }
    }, [emblaApi]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        handleSearch(value);
    };

    // Set up selected slide tracking
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [currentStatus, setCurrentStatus] = React.useState('active');

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit();
        }
    }, [topCampaigns, emblaApi]);

    useEffect(() => {
        refetchCampaigns(currentStatus);
    }, [currentStatus]);

    const handleCampaignClick = (campaign: any) => {
        if (campaign.status === 'draft' || campaign.status === 'in_review') {
            router.push(`/brand/campaigns/detail/${campaign.id}`);
        }
    };

    // Function to get a random preview image
    const getRandomPreviewImage = (previewImages: any[]) => {
        if (!previewImages || previewImages.length === 0) return '/placeholder-campaign.jpg';
        const randomIndex = Math.floor(Math.random() * previewImages.length);
        return previewImages[randomIndex].image_url;
    };

    if (error) {
        return <Container fluid className="campaigns px-4"><div>Error: {error}</div></Container>;
    }

    return (
        <Container fluid className="campaigns px-4 pt-5">
            {topCampaigns && topCampaigns.length > 0 && (
                <div className="top-campaigns mb-4">
                    <div className="section-title mb-3">Top performing campaigns</div>
                    <div className="carousel-container">
                        <>
                            <div className="embla" ref={emblaRef}>
                                <div className="embla__container">
                                    {topCampaigns.map((campaign, index) => (
                                        <div
                                            key={campaign.id}
                                            className={`embla__slide ${index === selectedIndex ? 'is-selected' : ''}`}
                                        >
                                            <Card className="campaign-card">
                                                <div className="overlay"></div>
                                                <CardImg top src={getRandomPreviewImage(campaign.preview_images)} alt={campaign.title} />
                                                <CardBody>
                                                    <div className="campaign-title">{campaign.title}</div>
                                                    <div className="campaign-stats">
                                                        <div>
                                                            <span>Total views</span>
                                                            <strong>{formatNumber(campaign.analytics.total_views)}</strong>
                                                        </div>
                                                        <div>
                                                            <span>Clips</span>
                                                            <strong>{formatNumber(campaign.analytics.total_clips)}</strong>
                                                        </div>
                                                        <div>
                                                            <span>Likes</span>
                                                            <strong>{formatNumber(campaign.analytics.total_likes)}</strong>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {topCampaigns.length > 1 && (
                                <>
                                    <button className="carousel-control prev" onClick={scrollPrev}>
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button className="carousel-control next" onClick={scrollNext}>
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}
                        </>
                    </div>
                </div>
            )}

            {totalAnalytics && (
                <div className="analytics mb-4">
                    <div className="section-title d-flex justify-content-between align-items-center mb-3">
                        Analytics <span className="view-all">VIEW ALL</span>
                    </div>
                    <Row className="analytics-grid">
                        <Col md={3}>
                            <Card className="analytics-card first-card">
                                <CardBody>
                                    <div className="analytics-title">Total views generated</div>
                                    <strong>{formatNumber(totalAnalytics.total_views)}</strong>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="analytics-card middle-card">
                                <CardBody>
                                    <div className="analytics-title">Total clips posted</div>
                                    <strong>{formatNumber(totalAnalytics.total_clips)}</strong>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="analytics-card middle-card">
                                <CardBody>
                                    <div className="analytics-title">Average views per clip</div>
                                    <strong>{formatAverageViews(totalAnalytics.average_views_per_clip)}</strong>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="analytics-card last-card">
                                <CardBody>
                                    <div className="analytics-title">Total link clicks</div>
                                    <strong>{formatNumber(totalAnalytics.total_link_clicks)}</strong>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )}

            <div className="campaigns-list">
                <div className="section-title mb-3">Campaigns</div>
                <div className="campaigns-header mb-4">
                    <div className={`campaigns-filters ${(isSearchFocused || searchValue) ? 'filters-hidden' : ''}`}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={activeTab === 'active' ? 'active' : ''}
                                    onClick={() => {
                                        setActiveTab('active');
                                        refetchCampaigns('active');
                                    }}
                                >
                                    Active
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === 'in_review' ? 'active' : ''}
                                    onClick={() => {
                                        setActiveTab('in_review');
                                        refetchCampaigns('in_review');
                                    }}
                                >
                                    Waiting for review
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === 'draft' ? 'active' : ''}
                                    onClick={() => {
                                        setActiveTab('draft');
                                        refetchCampaigns('draft');
                                    }}
                                >
                                    Draft
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div className="actions">
                        <Input
                            type="search"
                            placeholder="Search"
                            className={`input-dark search-input me-2 ${(isSearchFocused || searchValue) ? 'search-expanded' : ''}`}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                            value={searchValue}
                            onChange={handleSearchChange}
                        />
                        <Button className="btn-chipped" onClick={toggle}>
                            CREATE CAMPAIGN
                        </Button>
                    </div>
                </div>

                {loading ? (
                    <Row className="campaigns-grid">
                        {[1, 2, 3].map((i) => (
                            <CampaignSkeleton key={i} />
                        ))}
                    </Row>
                ) : campaigns && campaigns.length > 0 ? (
                    <Row className="campaigns-grid">
                        {campaigns.map((campaign) => (
                            <Col key={campaign.id}>
                                <Card
                                    className={`campaign-card ${(campaign.status === 'draft' || campaign.status === 'in_review') ? 'cursor-pointer' : ''}`}
                                    onClick={() => handleCampaignClick(campaign)}
                                    style={{ cursor: (campaign.status === 'draft' || campaign.status === 'in_review') ? 'pointer' : 'default' }}
                                >
                                    <CardImg top src={getRandomPreviewImage(campaign.preview_images)} alt={campaign.title} />
                                    <CardBody>
                                        <h3>{campaign.title}</h3>
                                        <div className="campaign-metrics">
                                            <div className="metric-box metric-box-right-chip">
                                                <span>Budget</span>
                                                <strong className="d-flex align-items-center">
                                                    <span className="m-0 metric-primary-value">
                                                        {formatNumber(campaign.analytics.total_payments)}
                                                    </span>
                                                    /{formatNumber(campaign.total_budget)}
                                                </strong>
                                                <Progress
                                                    value={Math.min(campaign.analytics.budget_percentage, 100)}
                                                    style={{
                                                        height: '2px',
                                                        backgroundColor: '#E5E5E5',
                                                        borderRadius: 0
                                                    }}
                                                    className="metric-progress"
                                                    barStyle={{
                                                        background: 'linear-gradient(90deg, #00E7FF 0%, #003FDD 100%)'
                                                    }}
                                                />
                                            </div>
                                            <div className="metric-box metric-box-left-chip">
                                                <span>Views</span>
                                                <strong className="d-flex align-items-center">
                                                    <span className="m-0 metric-primary-value">
                                                        {formatNumber(campaign.analytics.total_views)}
                                                    </span>
                                                    /{formatNumber(campaign.targeted_amount_of_views)}
                                                </strong>
                                                <Progress
                                                    value={Math.min(campaign.analytics.views_percentage, 100)}
                                                    style={{
                                                        height: '2px',
                                                        backgroundColor: '#E5E5E5',
                                                        borderRadius: 0
                                                    }}
                                                    className="metric-progress"
                                                    barStyle={{
                                                        background: 'linear-gradient(90deg, #00E7FF 0%, #003FDD 100%)'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div className="empty-campaigns">
                        <div className="empty-campaigns__content">
                            <h2>No campaigns found</h2>
                            <p>There are no campaigns in this status yet</p>
                            <Button
                                className="btn-chipped"
                                onClick={toggle}
                            >
                                CREATE CAMPAIGN
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            <CreateCampaignModal modal={modal} toggle={toggle} />
        </Container>
    );
};

export default Campaigns;