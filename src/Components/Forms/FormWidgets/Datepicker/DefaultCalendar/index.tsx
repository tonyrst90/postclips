import React, { useState } from 'react'
import { Card, CardBody, Col, Input, InputGroup, Row } from 'reactstrap';
import Calendar from 'react-calendar';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DefaultCalendarTitle } from '@/Constant';

const DefaultCalendar = () => {
    const [date, setDate] = useState<Date>(new Date());
    const formattedDate = `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={DefaultCalendarTitle} />
                <CardBody className="card-wrapper">
                    <Row className="g-3">
                        <Col xs={12}>
                            <InputGroup className="main-inline-calender">
                                <Input className="mb-2 flatpickr-input" placeholder={formattedDate} readOnly />
                                <Calendar onChange={(value) => setDate(value as Date)} value={date} className='w-100' />
                            </InputGroup>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default DefaultCalendar