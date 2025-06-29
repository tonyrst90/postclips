import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { InverseTableTitle } from '@/Constant';
import { inverseTableBody, inverseTableHeader, inverseTableSubTitle } from '@/Data/Tables/ReactstrapTables/BasicTables';
import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonTable from '../Common/CommonTable';

const InverseTable = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={InverseTableTitle} span={inverseTableSubTitle} />
                <div className="table-responsive custom-scrollbar">
                    <CommonTable tableClass='table-inverse' headData={inverseTableHeader} headRowClass='border-bottom-light'>
                        {inverseTableBody.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.office}</td>
                                <td>{data.position}</td>
                                <td>{data.salary}</td>
                                <td>{data.joinDate}</td>
                                <td>{data.age}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}
export default InverseTable;