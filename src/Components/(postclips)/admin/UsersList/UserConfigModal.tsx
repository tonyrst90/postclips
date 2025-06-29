"use client";

import React, { useState, useEffect } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import CommonModal from '@/Components/UiKits/Modal/Common/CommonModal';
import { useAdmin } from '@/Hooks/useAdmin';
import { toast } from 'react-toastify';

interface UserConfigModalProps {
    userId: string;
    isOpen: boolean;
    toggle: () => void;
}

const UserConfigModal = ({ userId, isOpen, toggle }: UserConfigModalProps) => {
    const [config, setConfig] = useState<{ 
        direct_clips_posting: boolean;
        no_social_media_account_verification: boolean;
    }>({ 
        direct_clips_posting: false,
        no_social_media_account_verification: false
    });
    const { fetchUserConfiguration, updateUserConfiguration, configLoading, configSaving } = useAdmin();

    useEffect(() => {
        if (isOpen && userId) {
            fetchConfig();
        }
    }, [isOpen, userId]);

    const fetchConfig = async () => {
        const response = await fetchUserConfiguration(userId);
        if (response.success && response.data?.data) {
            setConfig({ 
                direct_clips_posting: response.data.data.direct_clips_posting,
                no_social_media_account_verification: response.data.data.no_social_media_account_verification
            });
        }
    };

    const handleSave = async () => {
        const success = await updateUserConfiguration(userId, config.direct_clips_posting, config.no_social_media_account_verification);
        if (success) {
            toggle();
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfig({
            ...config,
            [e.target.name]: e.target.checked
        });
    };

    return (
        <CommonModal modalData={{ isOpen, toggler: toggle }}>
            <div className="modal-toggle-wrapper">
                <h4>User Configuration</h4>
                {configLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="mt-3">
                        <FormGroup check className="mb-3">
                            <Input
                                type="checkbox"
                                id="direct_clips_posting"
                                name="direct_clips_posting"
                                checked={config.direct_clips_posting}
                                onChange={handleCheckboxChange}
                            />
                            <Label htmlFor="direct_clips_posting" check>
                                Direct Clips Posting
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                type="checkbox"
                                id="no_social_media_account_verification"
                                name="no_social_media_account_verification"
                                checked={config.no_social_media_account_verification}
                                onChange={handleCheckboxChange}
                            />
                            <Label htmlFor="no_social_media_account_verification" check>
                                No Social Media Account Verification
                            </Label>
                        </FormGroup>
                    </div>
                )}
                <div className="mt-4 d-flex justify-content-end gap-2">
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                    <Button 
                        color="primary" 
                        onClick={handleSave}
                        disabled={configSaving}
                    >
                        {configSaving ? 'Saving...' : 'Save'}
                    </Button>
                </div>
            </div>
        </CommonModal>
    );
};

export default UserConfigModal; 