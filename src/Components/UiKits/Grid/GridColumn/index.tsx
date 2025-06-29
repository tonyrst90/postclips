import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { GridColumnTitle } from '@/Constant';
import { gridColumnData, gridColumnSubTitle } from '@/Data/UiKits/Grid';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const GridColumn = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={GridColumnTitle} span={gridColumnSubTitle} />
                <CardBody className='grid-showcase'>
                    <Row>
                        {gridColumnData && gridColumnData.map((item, index) => (
                            <Col md={item} className='text-center' key={index}>
                                <span>{`col-md-${item}`}</span>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
export default GridColumn;