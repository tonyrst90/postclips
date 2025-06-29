import React, { SetStateAction, useState } from 'react'
import { Col, InputGroup, Label, Row } from 'reactstrap';
import ReactDatePicker from 'react-datepicker'
import { PublishDateTime } from '@/Constant';

const ProductDate=()=> {
    const [selectedDate, setSelectedDate] = useState<any>(new Date())
    const handleDateChange = (date: SetStateAction<Date | null>) => {
      setSelectedDate(date);
    };
    return (
        <Col sm={6}>
            <Row>
                <Col xs={12}>
                    <Label>{PublishDateTime}</Label>
                    <InputGroup className="flatpicker-calender product-date">
                        <ReactDatePicker className="form-control" selected={selectedDate} onChange={handleDateChange} />
                    </InputGroup>
                </Col>
            </Row>
        </Col>
    )
}
export default ProductDate