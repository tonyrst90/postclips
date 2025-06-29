import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { TableHeadOptionsTitle } from '@/Constant';
import { tableHeadOptionBody, tableHeadOptionHeader, tableHeadOptionsSubTitle } from '@/Data/Tables/ReactstrapTables/BasicTables';
import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonTable from '../Common/CommonTable';

const TableHeadOptions = () => {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={TableHeadOptionsTitle} span={tableHeadOptionsSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive custom-scrollbar">
                            <CommonTable headClass='table-dark' headData={tableHeadOptionHeader}>
                                {tableHeadOptionBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.firstName}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.userName}</td>
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
export default TableHeadOptions;