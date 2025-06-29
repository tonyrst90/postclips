'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultCalendar from './DefaultCalendar'
import ReactstrapCalendar from './ReactstrapCalendar'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { DatepickerTitle, FormWidgetsTitle } from '@/Constant'

const DatePickerContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={DatepickerTitle} parent={FormWidgetsTitle} title={DatepickerTitle} />
            <Container fluid>
                <Row>
                    <DefaultCalendar />
                    <ReactstrapCalendar />
                    <DatePicker />
                    <TimePicker />
                </Row>
            </Container>
        </>
    )
}
export default DatePickerContainer