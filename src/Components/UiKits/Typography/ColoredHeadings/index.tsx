import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import TableHead from '@/CommonComponent/CommonTableHead';
import { ColoredHeadingTitle } from '@/Constant';
import { colorHeadData, headingSubTitle } from '@/Data/UiKits/Typography';
import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import ColoredHeadBody from './ColoredHeadBody';

const ColoredHeadings = () => {
    return (
        <Col xxl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={ColoredHeadingTitle} span={headingSubTitle} />
                <CardBody>
                    <div className='table-responsive custom-scrollbar'>
                        <Table className='mb-0 typography-table'>
                            <TableHead headeData={colorHeadData} />
                            <ColoredHeadBody />
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ColoredHeadings;