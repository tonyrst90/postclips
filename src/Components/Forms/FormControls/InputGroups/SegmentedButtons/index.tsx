import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Info, Secondary, SegmentedButtonsTitle } from '@/Constant';
import { segmentedButtonsData1, segmentedButtonsData2, segmentedButtonsSubTitle } from '@/Data/Forms/FormControls';
import React from 'react'
import { Button, Card, CardBody, Col, Input, InputGroup } from 'reactstrap'
import ButtonDropdownList from '../ButtonsWithDropdowns/ButtonDropdownList';

const SegmentedButtons = () => {
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={SegmentedButtonsTitle} span={segmentedButtonsSubTitle} />
                <CardBody className="main-segment-btn card-wrapper input-group-wrapper">
                    <InputGroup>
                        <Button color="info" outline> {Info}</Button>
                        <ButtonDropdownList color="info" split={true} span={true} divider={true} options={segmentedButtonsData1} />
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" />
                        <Button color="secondary" outline>{Secondary}</Button>
                        <ButtonDropdownList color="secondary" split={true} span={true} divider={true} options={segmentedButtonsData2} />
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
export default SegmentedButtons;