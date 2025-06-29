import React, { useState } from 'react'
import CommonModal from '@/Components/(postclips)/general/CommonModal';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useCampaigns } from '@/Hooks/useCampaigns';
import { useRouter } from 'next/navigation';

export interface CreateCampaignModalFormProps {
    modal: boolean;
    toggle: () => void;
}

const CreateCampaignModalForm: React.FC<CreateCampaignModalFormProps> = ({ modal, toggle }) => {
    const router = useRouter();
    const { createCampaignDraft, loading } = useCampaigns();
    const [campaign, setCampaign] = useState({
        title: '',
        description: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCampaign(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await createCampaignDraft(campaign);
        if (response?.success && response.data?.data?.id) {
            toggle(); // Close modal
            router.push(`/brand/campaigns/detail/${response.data.data.id}`);
        }
    };

    return (
        <CommonModal modalData={{ isOpen: modal, center: true, toggler: toggle, size: 'lg' }}>
            <div className="modal-toggle-wrapper p-4">
                <h2 className="text-white mb-4">Create a Campaign Draft</h2>
                <Form onSubmit={handleSubmit} className="campaign-form">
                    <FormGroup className="mb-4">
                        <Label for="title" className="text-white mb-2">Campaign Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            value={campaign.title}
                            onChange={handleInputChange}
                            required
                            className="input-dark"
                            placeholder="Enter your campaign title"
                        />
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Label for="description" className="text-white mb-2">Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            value={campaign.description}
                            onChange={handleInputChange}
                            className="input-dark"
                            style={{ fontFamily: 'inherit' }}
                            placeholder="Describe your campaign"
                            rows={4}
                        />
                    </FormGroup>
                    <div className="d-flex justify-content-end gap-3 align-items-center">
                        <button 
                            type="button"
                            onClick={toggle}
                            className="text-white text-decoration-none bg-transparent border-0 w-50"
                            style={{ opacity: 0.7 }}
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <Button 
                            color="primary" 
                            type="submit"
                            className="btn-chipped w-50"
                            disabled={loading}
                        >
                            {loading ? 'Creating...' : 'Create Draft'}
                        </Button>
                    </div>
                </Form>
            </div>
        </CommonModal>
    );
};

export default CreateCampaignModalForm;