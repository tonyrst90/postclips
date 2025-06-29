import React, { useState } from 'react'
import { Button, Card, CardBody, Collapse } from 'reactstrap';
import { Filter } from 'react-feather';
import { ProductListHeaderProp } from '@/Types/ECommerce.type';
import { Href } from '@/Constant';
import Link from 'next/link';
import CampaignList from './CampaignList';
import CreateCampaignModal from '../../CreateCampaignModal';

const CampaignHeader = ({ linkTitle }: ProductListHeaderProp) => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const handleFilterToggle = () => {
        setIsFilterOpen((prevState) => !prevState);
    };

    return (
        <>
            <div className="list-product-header">
                <div>
                    <div className="light-box">
                        <a href={Href} onClick={handleFilterToggle}>
                            {isFilterOpen ? <i className='icon-close filter-close' /> : <Filter className='filter-icon' />}
                        </a>
                    </div>
                    <div className="text-dark px-3" onClick={toggle} style={{backgroundColor: "white", borderRadius: "5px", padding: "5px", cursor: "pointer"}}>
                        <i className="fa fa-plus me-2" /> {linkTitle}
                    </div>
                </div>
                <Collapse className={isFilterOpen ? "show" : ""}>
                    <Card className="list-product-body">
                        <CardBody>
                            <CampaignList />
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

            <CreateCampaignModal modal={modal} toggle={toggle} />
        </>
    )
}
export default CampaignHeader;