import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { DashedBorderTitle } from '@/Constant';
import { dashedBorderBody, dashedBorderHeader, dashedBorderSubTitle } from '@/Data/Tables/ReactstrapTables/BasicTables';
import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonTable from '../Common/CommonTable';

const DashedBorder = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={DashedBorderTitle} span={dashedBorderSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive custom-scrollbar">
                            <CommonTable tableClass="table-dashed" headData={dashedBorderHeader}>
                                {dashedBorderBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.activity}</td>
                                        <td>{data.category}</td>
                                        <td>{data.time}</td>
                                        <td>{data.instructor}</td>
                                        <td>{data.capacity}</td>
                                    </tr>
                                ))}
                            </CommonTable>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}
export default DashedBorder;