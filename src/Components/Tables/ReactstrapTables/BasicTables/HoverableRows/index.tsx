import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { HoverableRowsTitle } from '@/Constant';
import { hoverableRowsBody, hoverableRowsHeader, hoverableRowsSubTitle } from '@/Data/Tables/ReactstrapTables/BasicTables';
import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonTable from '../Common/CommonTable';

const HoverableRows = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={HoverableRowsTitle} span={hoverableRowsSubTitle} />
                <div className="table-responsive signal-table custom-scrollbar">
                    <CommonTable headData={hoverableRowsHeader} hover={true} >
                        {hoverableRowsBody.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td className="d-flex align-items-center">
                                    {data.icon}
                                    <span className={`font-${data.color}`}>{data.status}</span></td>
                                <td>{data.signalName}</td>
                                <td>{data.security}</td>
                                <td>{data.stage}</td>
                                <td>{data.schedule}</td>
                                <td>{data.teamLead}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}
export default HoverableRows;