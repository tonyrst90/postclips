import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import TableHead from '@/CommonComponent/CommonTableHead';
import { HeadingsTitle } from '@/Constant';
import { headingSubTitle, headingTableHead } from '@/Data/UiKits/Typography';
import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import HeadingBody from './HeadingBody';

const Headings = () => {
    return (
        <Col xxl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass='pb-0' title={HeadingsTitle} span={headingSubTitle} />
                <CardBody>
                    <div className="table-responsive custom-scrollbar">
                        <Table className="mb-0 typography-table">
                            <TableHead headeData={headingTableHead} />
                            <HeadingBody />
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Headings;