import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { SelectSizingTitle } from '@/Constant';
import { selectSizingSubTitle } from '@/Data/Forms/FormControls';
import React from 'react'
import { Card, CardBody, Col, Input } from 'reactstrap'

const SelectSizing = () => {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={SelectSizingTitle} span={selectSizingSubTitle} />
                <CardBody>
                    <Input type="select" name="select" bsSize={'sm'}>
                        <option value=''>{"What's your hobbies? "} </option>
                        <option value="1">{"Kho-kho"}</option>
                        <option value="2">{"Reading Books"}</option>
                        <option value="3">{"Creativity"}</option>
                    </Input>
                </CardBody>
            </Card>
        </Col>
    )
}
export default SelectSizing;