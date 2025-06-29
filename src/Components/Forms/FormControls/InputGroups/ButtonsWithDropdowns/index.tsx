import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ButtonsWithDropdownsTitle, DropdownTitle } from '@/Constant';
import { buttonDropdownData1, buttonDropdownData2, buttonDropdownData3, buttonDropdownData4, buttonsWithDropdownSubTitle } from '@/Data/Forms/FormControls';
import React from 'react'
import { Card, CardBody, Col, Input, InputGroup } from 'reactstrap'
import ButtonDropdownList from './ButtonDropdownList';

const ButtonsWithDropdowns = () => {
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={ButtonsWithDropdownsTitle} span={buttonsWithDropdownSubTitle} />
                <CardBody className="main-custom-form card-wrapper input-group-wrapper">
                    <InputGroup>
                        <ButtonDropdownList color='info' outline={true} title={DropdownTitle} divider={true} options={buttonDropdownData1} />
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" />
                        <ButtonDropdownList color='danger' outline={true} title={DropdownTitle} divider={true} options={buttonDropdownData2} />
                    </InputGroup>
                    <InputGroup>
                        <ButtonDropdownList color='secondary' title={DropdownTitle} divider={true} options={buttonDropdownData3} />
                        <Input type="text" />
                        <ButtonDropdownList color='primary' title={DropdownTitle} divider={true} options={buttonDropdownData4} />
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ButtonsWithDropdowns;