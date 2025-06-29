import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { GridOptionsTitle } from '@/Constant';
import { gridOptionsSubTitle } from '@/Data/UiKits/Grid';
import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import GridTableHead from './GridTableHead';
import GridTableBody from './GridTableBody';

const GridOptions = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={GridOptionsTitle} span={gridOptionsSubTitle} />
                <CardBody>
                    <div className='table-responsive custom-scrollbar'>
                        <Table bordered striped>
                            <GridTableHead />
                            <GridTableBody />
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default GridOptions;