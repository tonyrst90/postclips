import React, { useState } from 'react';
import { Container, Button } from 'reactstrap';
import CreateCampaignModal from './CreateCampaignModal';

interface EmptyCampaignsProps {}

const EmptyCampaigns: React.FC<EmptyCampaignsProps> = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <Container fluid className="empty-campaigns">
            <div className="empty-campaigns__content">
                <h2>Create your first campaign</h2>
                <p>This is your starting point to go viral</p>
                <Button
                    color="primary"
                    className="btn-chipped"
                    onClick={toggle}
                >
                    CREATE CAMPAIGN
                </Button>
            </div>
            <CreateCampaignModal modal={modal} toggle={toggle} />
        </Container>
    );
};

export default EmptyCampaigns;
