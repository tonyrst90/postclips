import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col, Card, CardBody, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Campaign } from '@/Types/(postclips)/Campaign';
import { useCampaigns, BrandPaymentMethod } from '@/Hooks/useCampaigns';
import { toast } from 'react-toastify';
import ReactApexChart from 'react-apexcharts';
import Image from 'next/image';
import { FileText, CreditCard, Trash2, Star } from 'react-feather';
import AddCardModal from './AddCardModal';
import { useRouter } from 'next/navigation';
import CampaignStep1 from './CampaignStep1';
import CampaignPreview from './CampaignPreview';

interface CampaignStep5Props {
    campaign: Campaign;
    onPreviousStep: () => void;
}

const VIEW_TARGETS = [25, 50, 75, 100, 250, 500, 750, 1000]; // in millions
const CPM = 1.5;

// Mock data for the chart to visually match the provided image
const chartSeries = [
    {
        name: 'PostClips',
        data: [0, 0.1, 0.2, 0.5, 1.0, 1.5, 2.0, 2.4],
    },
    {
        name: 'YouTube',
        data: [0, 0.05, 0.1, 0.15, 0.2, null, null, null],
    },
    {
        name: 'TikTok',
        data: [0, 0.06, 0.12, 0.18, 0.25, null, null, null],
    },
    {
        name: 'Facebook',
        data: [0, 0.05, 0.11, 0.16, 0.22, null, null, null],
    },
    {
        name: 'Instagram',
        data: [0, 0.07, 0.13, 0.19, 0.26, null, null, null],
    },
    {
        name: 'X',
        data: [0, 0.09, 0.16, 0.23, 0.32, null, null, null],
    },
];

const chartOptions = {
    chart: {
        height: 260,
        toolbar: { show: false },
        background: '#18191A',
        fontFamily: 'inherit',
        zoom: { enabled: false },
        animations: { enabled: false },
        redrawOnWindowResize: false,
        redrawOnParentResize: false,
        parentHeightOffset: 0,
        sparkline: { enabled: false },
        brush: { enabled: false },
        selection: { enabled: false },
    },
    grid: {
        borderColor: '#444',
        strokeDashArray: 4,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: true } },
        padding: { top: 0, right: 0, bottom: 0, left: 0 }
    },
    stroke: {
        width: [4, 2, 2, 2, 2, 2],
        curve: ['smooth', 'smooth', 'smooth', 'smooth', 'smooth', 'smooth'] as any,
    },
    colors: [
        '#00E7FF', // PostClips
        '#FF0000', // YouTube
        '#00F2EA', // TikTok
        '#1877F3', // Facebook
        '#E1306C', // Instagram
        '#fff',    // X
    ],
    markers: {
        size: [7, 5, 5, 5, 5, 5],
        colors: ['#fff'],
        strokeColors: [
            '#00E7FF',
            '#FF0000',
            '#00F2EA',
            '#1877F3',
            '#E1306C',
            '#fff',
        ],
        strokeWidth: 3,
        hover: { sizeOffset: 0 },
    },
    legend: { show: false },
    xaxis: {
        categories: ['0', '500K', '1M', '1.5M', '2M', '2.5M', '3M', '3.5M'],
        labels: {
            style: { colors: '#888', fontSize: '13px' },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
        tooltip: { enabled: false },
        crosshairs: { show: false },
    },
    yaxis: {
        min: 0,
        max: 2.5,
        tickAmount: 5,
        labels: {
            formatter: (val: number) => `${val === 0 ? '0' : val + 'M'}`,
            style: { colors: '#888', fontSize: '13px' },
        },
        tooltip: { enabled: false },
        crosshairs: { show: false },
    },
    tooltip: {
        enabled: false,
    },
    states: {
        hover: { filter: { type: 'none' } },
        active: { filter: { type: 'none' } },
    },
    annotations: {
        points: [
            // YouTube
            {
                x: '500K',
                y: 0.2,
                marker: { size: 0 },
                label: {
                    borderColor: '#FF0000',
                    style: {
                        background: '#FF0000',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '11px',
                        borderRadius: '4px',
                        padding: { left: 6, right: 6, top: 2, bottom: 2 },
                        border: '1.5px solid #FF0000',
                    },
                    text: '338K',
                    offsetY: -95,
                    offsetX: 140,
                },
            },
            // TikTok
            {
                x: '500K',
                y: 0.25,
                marker: { size: 0 },
                label: {
                    borderColor: '#00F2EA',
                    style: {
                        background: '#18191A',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '11px',
                        borderRadius: '4px',
                        border: '1.5px solid #00F2EA',
                        padding: { left: 6, right: 6, top: 2, bottom: 2 },
                    },
                    text: '410K',
                    offsetY: -62,
                    offsetX: 160,
                },
            },
            // Facebook
            {
                x: '500K',
                y: 0.22,
                marker: { size: 0 },
                label: {
                    borderColor: '#1877F3',
                    style: {
                        background: '#18191A',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '11px',
                        borderRadius: '4px',
                        border: '1.5px solid #1877F3',
                        padding: { left: 6, right: 6, top: 2, bottom: 2 },
                    },
                    text: '402K',
                    offsetY: -28,
                    offsetX: 180,
                },
            },
            // Instagram
            {
                x: '500K',
                y: 0.26,
                marker: { size: 0 },
                label: {
                    borderColor: '#E1306C',
                    style: {
                        background: '#18191A',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '11px',
                        borderRadius: '4px',
                        border: '1.5px solid #E1306C',
                        padding: { left: 6, right: 6, top: 2, bottom: 2 },
                    },
                    text: '414K',
                    offsetY: -28,
                    offsetX: 130,
                },
            },
            // X
            {
                x: '500K',
                y: 0.32,
                marker: { size: 0 },
                label: {
                    borderColor: '#fff',
                    style: {
                        background: '#18191A',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '11px',
                        borderRadius: '4px',
                        border: '1.5px solid #fff',
                        padding: { left: 6, right: 6, top: 2, bottom: 2 },
                    },
                    text: '514K',
                    offsetY: -115,
                    offsetX: 155,
                },
            },
            // PostClips
            {
                x: '2.5M',
                y: 2.4,
                marker: { size: 0 },
                label: {
                    borderColor: '#00E7FF',
                    style: {
                        background: '#18191A',
                        color: '#00E7FF',
                        fontWeight: 700,
                        fontSize: '18px',
                        borderRadius: '8px',
                        border: '2px solid #00E7FF',
                        padding: { left: 12, right: 12, top: 4, bottom: 4 },
                    },
                    text: '2.4M',
                    offsetY: 25,
                    offsetX: 40,
                },
            },
        ],
    },
};

const BILLING_PLANS = [
    { label: '1 Month', months: 1, discount: 0, value: '1_month' as const },
    { label: '3 Month', months: 3, discount: 0.15, value: '3_month' as const },
    { label: '6 Month', months: 6, discount: 0.20, value: '6_month' as const },
];

const PAYMENT_METHODS = [
    {
        label: 'Pay now with Stripe',
        desc: 'The payout is powered by Stripe. It\'s fast, secure, and easy to use, add your payment method you will be charged when your campaign is approved.',
        icon: <Image src="/assets/images/(postclips)/campaigns/step5/stripe.svg" alt="Stripe" width={30} height={18} priority />,
        value: 'stripe' as const,
    },
    {
        label: 'Pay later with invoice',
        desc: 'We will reach out to finalize the details. Your campaign will launch after our confirmation.',
        icon: <FileText size={28} color="#FFF" style={{ background: 'none' }} />,
        value: 'invoice' as const,
    },
];

const CampaignStep5: React.FC<CampaignStep5Props> = ({ campaign, onPreviousStep }) => {
    const {
        updateCampaignDraft,
        saveCampaignCard,
        getBrandPaymentMethods,
        setDefaultPaymentMethod,
        deletePaymentMethod,
        getCampaignBillingPlan,
        getCampaignPaymentMethod,
        updateCampaignViews,
        upsertCampaignPaymentMethod,
        upsertCampaignBillingPlan,
        submitCampaign
    } = useCampaigns();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoadingBillingPlan, setIsLoadingBillingPlan] = useState(true);
    const [isLoadingPaymentMethod, setIsLoadingPaymentMethod] = useState(true);
    const [isSavingCard, setIsSavingCard] = useState(false);
    const [savedPaymentMethods, setSavedPaymentMethods] = useState<BrandPaymentMethod[]>([]);
    const [isLoadingPaymentMethods, setIsLoadingPaymentMethods] = useState(false);
    const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const router = useRouter();

    const [viewTargetIdx, setViewTargetIdx] = useState(() => {
        // Initialize with the closest value to the current campaign's targeted views
        const currentViews = campaign.targeted_amount_of_views / 1_000_000; // Convert to millions
        return VIEW_TARGETS.reduce((closest, target, index) => {
            return Math.abs(target - currentViews) < Math.abs(VIEW_TARGETS[closest] - currentViews) ? index : closest;
        }, 0);
    });

    const viewTarget = VIEW_TARGETS[viewTargetIdx];
    const totalBudget = ((viewTarget * 1_000_000) / 1000) * CPM;

    const [selectedPlanIdx, setSelectedPlanIdx] = useState(0);
    const [selectedPaymentIdx, setSelectedPaymentIdx] = useState(0);

    const loadSavedPaymentMethods = useCallback(async () => {
        if (!campaign.brand_id) return;
        setIsLoadingPaymentMethods(true);
        try {
            const response = await getBrandPaymentMethods(campaign.brand_id);
            if (response.success && response.data?.data) {
                setSavedPaymentMethods(response.data.data);
                // Set the first card as selected by default if none is selected
                if (!selectedCardId && response.data.data.length > 0) {
                    setSelectedCardId(response.data.data[0].id);
                }
            }
        } catch (error) {
            console.error('Error loading payment methods:', error);
            toast.error('Failed to load saved cards');
        } finally {
            setIsLoadingPaymentMethods(false);
        }
    }, [campaign.brand_id, getBrandPaymentMethods, selectedCardId]);

    // Add this effect to load saved payment methods
    useEffect(() => {
        if (campaign.brand_id) {
            loadSavedPaymentMethods();
        }
    }, [campaign.brand_id, loadSavedPaymentMethods]);

    // Add this effect to load both billing plan and payment method
    useEffect(() => {
        const loadSavedSelections = async () => {
            try {
                setIsLoadingBillingPlan(true);
                setIsLoadingPaymentMethod(true);

                // Load billing plan
                const billingPlanResponse = await getCampaignBillingPlan(campaign.id);
                if (billingPlanResponse.success && billingPlanResponse.data?.data) {
                    const savedPlan = billingPlanResponse.data.data.plan_type;
                    const planIndex = BILLING_PLANS.findIndex(p => p.value === savedPlan);
                    if (planIndex !== -1) {
                        setSelectedPlanIdx(planIndex);
                    }
                }

                // Load payment method
                const paymentMethodResponse = await getCampaignPaymentMethod(campaign.id);
                if (paymentMethodResponse.success && paymentMethodResponse.data?.data) {
                    const savedMethod = paymentMethodResponse.data.data.payment_method;
                    const methodIndex = PAYMENT_METHODS.findIndex(m => m.value === savedMethod);
                    if (methodIndex !== -1) {
                        setSelectedPaymentIdx(methodIndex);
                    }
                }
            } catch (error) {
                console.error('Error loading saved selections:', error);
                toast.error('Failed to load saved selections');
            } finally {
                setIsLoadingBillingPlan(false);
                setIsLoadingPaymentMethod(false);
            }
        };

        loadSavedSelections();
    }, [campaign.id, getCampaignBillingPlan, getCampaignPaymentMethod]);

    const getPlanPrice = (views: number, cpm: number, discount: number) => {
        const base = ((views * 1_000_000) / 1000) * cpm;
        return base * (1 - discount);
    };

    // Custom range slider handler with debounce
    const handleSliderChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newViewTargetIdx = Number(e.target.value);
        setViewTargetIdx(newViewTargetIdx);
        const newViewTarget = VIEW_TARGETS[newViewTargetIdx];

        try {
            await updateCampaignViews(campaign.id, {
                targeted_amount_of_views: newViewTarget * 1_000_000, // Convert to actual number
                amount_cpm_payout: CPM
            });
        } catch (error) {
            toast.error('Failed to update campaign views');
            // Revert the slider to previous value
            setViewTargetIdx(viewTargetIdx);
        }
    }, [campaign.id, viewTargetIdx, updateCampaignViews]);

    // Update the payment method selection handler
    const handlePaymentMethodChange = async (idx: number) => {
        try {
            const response = await upsertCampaignPaymentMethod(campaign.id, PAYMENT_METHODS[idx].value);
            if (response.success) {
                setSelectedPaymentIdx(idx);
                // Clear selected card if switching to invoice
                if (PAYMENT_METHODS[idx].value === 'invoice') {
                    setSelectedCardId(null);
                }
            }
        } catch (error) {
            toast.error('Failed to update payment method');
        }
    };

    const handleCardSelect = async (cardId: string) => {
        try {
            const response = await upsertCampaignPaymentMethod(campaign.id, 'stripe', cardId);
            if (response.success) {
                setSelectedCardId(cardId);
            }
        } catch (error) {
            toast.error('Failed to select card');
        }
    };

    // Update the billing plan selection handler
    const handleBillingPlanChange = async (idx: number) => {
        try {
            const selectedPlan = BILLING_PLANS[idx];
            const price = getPlanPrice(viewTarget, CPM, selectedPlan.discount);
            const response = await upsertCampaignBillingPlan(campaign.id, {
                plan_type: selectedPlan.value,
                price_per_month: price,
                discount_percent: selectedPlan.discount,
                payment_method: PAYMENT_METHODS[selectedPaymentIdx].value,
            });

            if (response.success) {
                setSelectedPlanIdx(idx);
            }
        } catch (error) {
            toast.error('Error updating billing plan');
        }
    };

    const handleDeleteCard = async (cardId: string) => {
        if (!campaign.brand_id) return;
        try {
            const response = await deletePaymentMethod(campaign.brand_id, cardId);
            if (response.success) {
                await loadSavedPaymentMethods();
                if (selectedCardId === cardId) {
                    setSelectedCardId(null);
                }
                toast.success('Card deleted successfully');
            } else {
                toast.error('Failed to delete card');
            }
        } catch (error) {
            console.error('Error deleting card:', error);
            toast.error('Failed to delete card');
        }
    };

    const handleAddCard = async (paymentMethodId: string) => {
        if (!campaign?.id) return;

        setIsSavingCard(true);
        try {
            const response = await saveCampaignCard(campaign.id, paymentMethodId);
            if (response.success) {
                toast.success('Card saved successfully');
                // Refresh payment methods
                await loadSavedPaymentMethods();
                setIsAddCardModalOpen(false); // Close modal after successful save
            } else {
                const errorMessage = typeof response.error === 'string' ? response.error : 'Failed to save card';
                toast.error(errorMessage);
            }
        } catch (error) {
            toast.error('Failed to save card');
        } finally {
            setIsSavingCard(false);
        }
    };

    const handleStep5Submit = async () => {
        // Validate payment method and billing plan
        if (PAYMENT_METHODS[selectedPaymentIdx].value === 'stripe' && !selectedCardId) {
            setSubmitError('Please select a card.');
            toast.error('Please select a card.');
            return;
        }
        if (selectedPlanIdx === undefined || selectedPlanIdx === null) {
            setSubmitError('Please select a billing plan.');
            toast.error('Please select a billing plan.');
            return;
        }
        setSubmitError(null);
        setShowConfirmModal(true);
    };

    const confirmSubmit = async () => {
        setShowConfirmModal(false);
        const response = await submitCampaign(campaign.id);
        if (response.success) {
            setShowSuccessModal(true);
        } else {
            toast.error('Failed to submit campaign');
        }
    };

    const handleBackToCampaigns = () => {
        router.push('/brand/campaigns');
    };

    // Derive previewImages and formData from campaign for the preview
    const previewImages = (campaign.preview_images || []).map(img => ({ id: img.id, image_url: img.image_url }));
    const formData = {
        title: campaign.title || '',
        description: campaign.description || '',
        brand_message: campaign.brand_message || null,
        targeted_amount_of_views: campaign.targeted_amount_of_views || '',
        amount_cpm_payout: campaign.amount_cpm_payout || '',
        total_budget: campaign.total_budget || '',
        start_date: campaign.start_date || '',
        end_date: campaign.end_date || ''
    };

    return (
        <Container fluid className="campaign-detail p-4">
            <Row>
                <Col md={7}>
                    <h1 className="text-white mb-4">Payment & submission</h1>
                    <div style={{ maxWidth: 480, margin: '0 auto' }}>
                        {/* View Target Slider */}
                        <FormGroup className="mb-4">
                            <Label className="campaign-label">View target</Label>
                            <div className="view-target-slider position-relative mb-5" style={{ padding: '32px 0 12px 0' }}>
                                <input
                                    type="range"
                                    min={0}
                                    max={VIEW_TARGETS.length - 1}
                                    step={1}
                                    value={viewTargetIdx}
                                    onChange={handleSliderChange}
                                    className="w-100"
                                    style={{ accentColor: '#00E7FF' }}
                                />
                                <div className="d-flex justify-content-between position-absolute w-100" style={{ top: 52 }}>
                                    {VIEW_TARGETS.map((val, idx) => (
                                        <span
                                            key={val}
                                            className={`text-secondary${viewTargetIdx === idx ? ' fw-bold text-white' : ''}`}
                                            style={{ fontSize: 13, minWidth: 32, textAlign: 'center' }}
                                        >
                                            {val}M
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FormGroup>
                        {/* CPM and Budget */}
                        <div className="d-flex justify-content-between align-items-center mb-3" style={{ fontSize: 15 }}>
                            <span className="text-secondary">CPM</span>
                            <span className="fw-bold text-white text-end" style={{ minWidth: 180 }}>{`$${CPM.toFixed(2)} per 1,000 views`}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-5" style={{ fontSize: 15 }}>
                            <span className="text-secondary">Total budget</span>
                            <span className="fw-bold text-white text-end" style={{ minWidth: 180 }}>{`$${totalBudget.toLocaleString(undefined, { maximumFractionDigits: 2 })}`}</span>
                        </div>
                        {/* Graph */}
                        <div className="mb-4" style={{ maxWidth: 480, margin: '0 auto' }}>
                            <div style={{ background: '#18191A', borderRadius: 12, padding: 5, minHeight: 320, maxWidth: 480, margin: '0 auto' }}>
                                <div className="p-4 pb-2" style={{ color: 'white', fontWeight: 600, fontSize: 18 }}>
                                    Post Clips can generate up to <span style={{ color: '#00E7FF', fontWeight: 700 }}>500% more views</span> with the same budget
                                </div>
                                <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={260} />
                            </div>
                        </div>
                        {/* Billing Plan */}
                        <div className="billing-plan-section mb-5">
                            <div className="billing-plan-title">Billing plan</div>
                            {isLoadingBillingPlan ? (
                                <div className="text-center py-4">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="billing-plan-options">
                                    {BILLING_PLANS.map((plan, idx) => {
                                        const price = getPlanPrice(viewTarget, CPM, plan.discount);
                                        return (
                                            <div
                                                key={plan.label}
                                                className={`billing-plan-option${selectedPlanIdx === idx ? ' selected' : ''}`}
                                                onClick={() => handleBillingPlanChange(idx)}
                                            >
                                                <div className="billing-plan-header">
                                                    <span className="billing-plan-label">{plan.label}</span>
                                                    {plan.discount > 0 && (
                                                        <span className="billing-plan-discount">{Math.round(plan.discount * 100)}% off</span>
                                                    )}
                                                    <span className="billing-plan-price">
                                                        ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/month
                                                    </span>
                                                </div>
                                                <div className="billing-plan-desc">
                                                    {plan.months === 1
                                                        ? `A one-time campaign with a target of ${viewTarget}M views`
                                                        : `Campaign will run for ${plan.months} consecutive months, targeting ${viewTarget}M views per month`}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                        {/* Payment Method */}
                        <div className="payment-method-section mb-5">
                            <div className="payment-method-title">Payment method</div>
                            {isLoadingPaymentMethod || isLoadingPaymentMethods ? (
                                <div className="text-center py-4">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="payment-method-options">
                                        {PAYMENT_METHODS.map((method, idx) => (
                                            <React.Fragment key={method.value}>
                                                <div
                                                    className={`payment-method-option${selectedPaymentIdx === idx ? ' selected' : ''}`}
                                                    onClick={() => handlePaymentMethodChange(idx)}
                                                >
                                                    <div className="payment-method-icon">{method.icon}</div>
                                                    <div className="payment-method-content">
                                                        <div className="payment-method-label">{method.label}</div>
                                                        <div className="payment-method-desc">{method.desc}</div>
                                                    </div>
                                                </div>
                                                {/* Show saved payment methods right after Stripe option */}
                                                {method.value === 'stripe' && selectedPaymentIdx === idx && (
                                                    <div className="saved-payment-methods mt-4">
                                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                                            <h6 className="text-white mb-0">Saved Payment Methods</h6>
                                                            <Button
                                                                className="btn-chipped btn-chipped-white"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setIsAddCardModalOpen(true);
                                                                }}
                                                            >
                                                                Add Card
                                                            </Button>
                                                        </div>
                                                        {isLoadingPaymentMethods ? (
                                                            <div className="text-center py-4">
                                                                <div className="spinner-border text-primary" role="status">
                                                                    <span className="visually-hidden">Loading...</span>
                                                                </div>
                                                            </div>
                                                        ) : savedPaymentMethods.length > 0 ? (
                                                            <div className="payment-methods-list">
                                                                {savedPaymentMethods.map((card) => (
                                                                    <div
                                                                        key={card.id}
                                                                        className={`payment-method-card ${selectedCardId === card.id ? 'selected' : ''}`}
                                                                        onClick={() => handleCardSelect(card.id)}
                                                                    >
                                                                        <div className="card-info">
                                                                            <div className="card-brand">{card.brand}</div>
                                                                            <div className="card-number">**** **** **** {card.last_four}</div>
                                                                            <div className="card-expiry">Expires {card.exp_month}/{card.exp_year}</div>
                                                                        </div>
                                                                        <div className="card-actions">
                                                                            <button
                                                                                className="delete-card-btn"
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation();
                                                                                    handleDeleteCard(card.id);
                                                                                }}
                                                                                style={{ background: 'none', border: 'none', padding: 0, marginLeft: 8, cursor: 'pointer' }}
                                                                                aria-label="Delete card"
                                                                            >
                                                                                <Trash2 size={18} color="#fff" />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <div className="text-center py-4 text-secondary">
                                                                No saved payment methods
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="d-flex justify-content-between gap-3 mt-5 mb-5" style={{ maxWidth: 480, margin: '0 auto' }}>
                        <Button className="btn-chipped btn-chipped-gray" style={{ maxWidth: '200px', width: '100%' }} onClick={onPreviousStep}>BACK</Button>
                        <Button
                            className="btn-submit-review"
                            onClick={handleStep5Submit}
                            disabled={isSubmitting || isLoadingBillingPlan || isLoadingPaymentMethod || (PAYMENT_METHODS[selectedPaymentIdx].value === 'stripe' && savedPaymentMethods.length === 0)}
                        >
                            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT FOR REVIEW'}
                        </Button>
                    </div>
                </Col>
                <Col md={5}>
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

            <AddCardModal
                isOpen={isAddCardModalOpen}
                onClose={() => setIsAddCardModalOpen(false)}
                onSave={handleAddCard}
            />
            {/* Confirmation Modal */}
            <Modal isOpen={showConfirmModal} backdrop="static" keyboard={false} centered>
                <ModalBody className="text-center pt-5">
                    <h4 className="text-white">Are you sure you want to submit for review?</h4>
                </ModalBody>
                <ModalFooter className="d-flex align-items-center justify-content-center gap-3 pb-5">
                    <Button className="btn-chipped btn-chipped-gray" style={{ minWidth: 120 }} onClick={() => setShowConfirmModal(false)}>Cancel</Button>
                    <Button className="btn-chipped" style={{ minWidth: 160 }} onClick={confirmSubmit}>Yes, Submit</Button>
                </ModalFooter>
            </Modal>
            {/* Success Modal */}
            <Modal isOpen={showSuccessModal} backdrop="static" keyboard={false} centered>
                <ModalBody className="text-center p-5">
                    <div className="mb-2">
                        <Image src="/assets/images/(postclips)/campaigns/step5/check.svg" alt="Success" width={50} height={50} priority />
                    </div>
                    <h2 className="text-white fw-bold mb-3">Campaign submitted</h2>
                    <div className="mb-5">Our team will review your details and reach out soon to discuss payment options and finalize the next steps.</div>
                    <Button className="btn-chipped btn-chipped-white" onClick={handleBackToCampaigns}>BACK TO CAMPAIGNS</Button>
                </ModalBody>
            </Modal>
        </Container>
    );
};

export default CampaignStep5; 