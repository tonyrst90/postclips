import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { IconsWithPrefixAndPostfixTitle } from '@/Constant';
import { touchspinSubTitle } from '@/Data/Forms/FormWidgets';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonPrefixAndPostfix from '../Common/CommonPrefixAndPostfix';

const IconsWithPrefixAndPostfix = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={IconsWithPrefixAndPostfixTitle} span={touchspinSubTitle} />
                <CardBody className="common-flex pre-post-touchspin">
                    <CommonPrefixAndPostfix preIcon />
                    <CommonPrefixAndPostfix postIcon />
                </CardBody>
            </Card>
        </Col>
    )
}
export default IconsWithPrefixAndPostfix;