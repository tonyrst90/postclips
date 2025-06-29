import React from 'react'
import CreateCampaignModalForm, { CreateCampaignModalFormProps } from './CreateCampaignModalForm';

const CreateCampaignModal = ({
    modal,
    toggle
}: CreateCampaignModalFormProps) => {

    return (
        <CreateCampaignModalForm modal={modal} toggle={toggle} />
    )
}
export default CreateCampaignModal;