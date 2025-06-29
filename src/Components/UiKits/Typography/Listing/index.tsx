import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ListingTypography } from '@/Constant';
import { listingSubTitle } from '@/Data/UiKits/Typography';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import UnorderList from './UnorderList';
import OrderList from './OrderList';
import DescriptionList from './DescriptionList';

const Listing = () => {
    return (
        <Col sm={12} className='listing'>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ListingTypography} span={listingSubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <UnorderList />
                        <OrderList />
                        <DescriptionList />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Listing;