"use client";

import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useCampaigns, PreviewImage, ExampleClip } from '@/Hooks/useCampaigns';
import { toast } from 'react-toastify';
import { fetchAPI } from "@/Clients/postclips/server/ApiClient";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setStep } from "@/Redux/Reducers/(postclips)/auth/HeaderSlice";
import CampaignStep1 from './Steps/CampaignStep1';
import CampaignStep2 from './Steps/CampaignStep2';
import CampaignStep3 from './Steps/CampaignStep3';
import CampaignStep4 from './Steps/CampaignStep4';
import CampaignStep5 from './Steps/CampaignStep5';
import { Campaign } from '@/Types/(postclips)/Campaign';
import { useRouter } from 'next/navigation';

interface CampaignDetailProps {
    campaign: Campaign
}

const CampaignDetail: React.FC<CampaignDetailProps> = ({ campaign }) => {
    const [formData, setFormData] = useState({
        title: campaign.title,
        description: campaign.description,
        brand_message: campaign.brand_message,
        targeted_amount_of_views: campaign.targeted_amount_of_views || '',
        amount_cpm_payout: campaign.amount_cpm_payout || '',
        total_budget: campaign.total_budget || '',
        start_date: campaign.start_date || '',
        end_date: campaign.end_date || ''
    });

    const { updateCampaignDraft, submitCampaign } = useCampaigns();
    const dispatch = useAppDispatch();
    const { currentStep } = useAppSelector((state) => state.header);

    useEffect(() => {
        console.log('CampaignDetail', { currentStep });
    }, [currentStep]);

    // Add a function to update form data from child components
    const updateFormData = (newData: Partial<typeof formData>) => {
        setFormData(prev => ({ ...prev, ...newData }));
    };

    const handleSaveDraft = async (dataToSave?: typeof formData) => {
        try {
            // Use provided data or current formData
            const data = dataToSave || formData;
            
            const processedData = {
                ...data,
                targeted_amount_of_views: data.targeted_amount_of_views === '' ? 0 : parseFloat(data.targeted_amount_of_views as string),
                amount_cpm_payout: data.amount_cpm_payout === '' ? 0 : parseFloat(data.amount_cpm_payout as string),
                total_budget: data.total_budget === '' ? 0 : parseFloat(data.total_budget as string)
            };
            
            console.log("handleSaveDraft", { dataToSave: processedData });
            
            switch (currentStep) {
                case 1:
                    if (processedData.title === '' || processedData.description === '' || processedData.brand_message === '' || processedData.targeted_amount_of_views === 0 || processedData.amount_cpm_payout === 0 || processedData.total_budget === 0 || processedData.start_date === '' || processedData.end_date === '') {
                        toast.error('Please fill in all fields');
                        return;
                    }
                    // Convert dates to Date objects for comparison
                    const startDate = new Date(processedData.start_date);
                    const endDate = new Date(processedData.end_date);
                    if (startDate >= endDate) {
                        toast.error('Start date must be before end date');
                        return;
                    }
                    break;
            }
            return await updateCampaignDraft(campaign.id, processedData);
        } catch (error) {
            toast.error('Error saving campaign draft');
        }
    };

    const handleStep = async (type: 'next' | 'previous', dataToSave?: typeof formData) => {
        try {
            const response = await handleSaveDraft(dataToSave);
            if (response?.success) {
                dispatch(setStep(currentStep + (type === 'next' ? 1 : -1)));
            }
        } catch (error) {
            toast.error('Error saving campaign draft');
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <CampaignStep1 
                    campaign={campaign} 
                    formData={formData}
                    updateFormData={updateFormData}
                    handleSaveDraft={handleSaveDraft} 
                    onNextStep={(data) => handleStep('next', data)} 
                />;
            case 2:
                return <CampaignStep2 
                    campaign={campaign} 
                    handleSaveDraft={handleSaveDraft} 
                    onNextStep={() => handleStep('next')} 
                    onPreviousStep={() => handleStep('previous')} 
                />;
            case 3:
                return <CampaignStep3 
                    campaign={campaign} 
                    handleSaveDraft={handleSaveDraft} 
                    onNextStep={() => handleStep('next')} 
                    onPreviousStep={() => handleStep('previous')} 
                />;
            case 4:
                return <CampaignStep4 
                    campaign={campaign} 
                    handleSaveDraft={handleSaveDraft} 
                    onNextStep={() => handleStep('next')} 
                    onPreviousStep={() => handleStep('previous')} 
                />;
            case 5:
                return <CampaignStep5 
                    campaign={campaign} 
                    onPreviousStep={() => handleStep('previous')} 
                />;
            default:
                return <CampaignStep1 
                    campaign={campaign} 
                    formData={formData}
                    updateFormData={updateFormData}
                    handleSaveDraft={handleSaveDraft} 
                    onNextStep={(data) => handleStep('next', data)} 
                />;
        }
    };

    return (
        <>{renderStep()}</>
    );
};

export default CampaignDetail;