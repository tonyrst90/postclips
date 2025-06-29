'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { AvatarsTitle, UiKitsTitle } from '@/Constant'
import AvatarSizes from './AvatarSizes'
import StatusIndicator from './StatusIndicator'
import Shapes from './Shapes'
import Ratio from './Ratio'
import Grouping from './Grouping'

const AvatarsContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={AvatarsTitle} parent={UiKitsTitle} title={AvatarsTitle} />
            <Container fluid>
                <div className="user-profile">
                    <Row>
                        <AvatarSizes />
                        <StatusIndicator />
                        <Shapes />
                        <Ratio />
                        <Grouping />
                    </Row>
                </div>
            </Container>
        </>
    )
}
export default AvatarsContainer;