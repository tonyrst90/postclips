import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { StripedRowInverseTableTitle } from '@/Constant';
import { stripedRowInverseBody, stripedRowInverseHead, stripedRowWithInverseTableSubTitle } from '@/Data/Tables/ReactstrapTables/BasicTables';
import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonTable from '../Common/CommonTable';

const StripedRowInverseTable = () => {
    return (
        <Col sm={6} >
            <Card>
                <CommonCardHeader title={StripedRowInverseTableTitle} span={stripedRowWithInverseTableSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive custom-scrollbar">
                            <CommonTable strip={true} tableClass='table-inverse' headData={stripedRowInverseHead}>
                                {stripedRowInverseBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.dessert}</td>
                                        <td>{data.calories}</td>
                                        <td>{data.fat}</td>
                                        <td>{data.price}</td>
                                    </tr>
                                ))}
                            </CommonTable>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col >
    )
}
export default StripedRowInverseTable;