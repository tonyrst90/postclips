import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ResponsiveLightBackgroundTitle } from '@/Constant';
import { responsiveLightBackgroundBody, responsiveLightBackgroundHead, responsiveTablesSubTitle } from '@/Data/Tables/ReactstrapTables/BasicTables';
import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonTable from '../Common/CommonTable';

const ResponsiveLightBackground = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={ResponsiveLightBackgroundTitle} span={responsiveTablesSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive custom-scrollbar">
                            <CommonTable tableClass='table-light' headData={responsiveLightBackgroundHead}>
                                {responsiveLightBackgroundBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.task}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.assign}</td>
                                        <td>{data.date}</td>
                                        <td>{data.price}</td>
                                        <td className={`font-${data.color}`}>{data.status}</td>
                                        <td>{data.progress}</td>
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
export default ResponsiveLightBackground;