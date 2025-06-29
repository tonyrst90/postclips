import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BreckpointSpecificTitle } from '@/Constant';
import { breckpointSpecificBody, breckpointSpecificHead, breckPointSpecificSubTitle } from '@/Data/Tables/ReactstrapTables/BasicTables';
import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonTable from '../Common/CommonTable';

const BreckpointSpecific = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={BreckpointSpecificTitle} span={breckPointSpecificSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive custom-scrollbar">
                            <CommonTable tableClass='table-responsive custom-scrollbar-sm' headData={breckpointSpecificHead}>
                                {breckpointSpecificBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.orderId}</td>
                                        <td>{data.price}</td>
                                        <td>{data.quantity}</td>
                                        <td>{data.total}</td>
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
export default BreckpointSpecific;