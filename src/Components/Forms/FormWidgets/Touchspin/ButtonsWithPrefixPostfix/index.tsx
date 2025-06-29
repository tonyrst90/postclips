import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ButtonsWithPrefixPostfixTitle } from '@/Constant';
import { touchspinSubTitle } from '@/Data/Forms/FormWidgets';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonPrefixAndPostfix from '../Common/CommonPrefixAndPostfix';

const ButtonsWithPrefixPostfix = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ButtonsWithPrefixPostfixTitle} span={touchspinSubTitle} />
                <CardBody className="common-flex pre-post-touchspin bg-touchspin">
                    <CommonPrefixAndPostfix preButton color />
                    <CommonPrefixAndPostfix PostButton color />
                </CardBody>
            </Card>
        </Col>
    )
}
export default ButtonsWithPrefixPostfix;