'use client'
import React from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap'
import DraggableEvents from './DraggableEvents'
import DefaultCalendar from './DefaultCalendar'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { ApplicationsTitle, CalendarBasicTitle, CalendarTitle } from '@/Constant'

const CalendarContainer = () => {
    return (
        <>
            <Breadcrumbs title={CalendarTitle} />
            <Container className='calendar-basic' fluid>
                <Card>
                    <CardBody>
                        <Row>
                            <DraggableEvents />
                            <DefaultCalendar />
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}
export default CalendarContainer