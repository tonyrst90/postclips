import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { CustomColorHoverStrippedTitle } from '@/Constant';
import { customColorHoverStrippedBody, customColorHoverStrippedHead, customTableSubTitle } from '@/Data/Tables/ReactstrapTables/BasicTables';
import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonTable from '../Common/CommonTable';

const CustomColorHoverStripped = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={CustomColorHoverStrippedTitle} span={customTableSubTitle} />
                <div className="table-responsive custom-scrollbar">
                    <CommonTable strip={true} hover={true} tableClass='bg-primary' headClass='tbl-strip-thad-bdr' headData={customColorHoverStrippedHead}>
                        {customColorHoverStrippedBody.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.title}</td>
                                <td>{data.year}</td>
                                <td>{data.studio}</td>
                                <td>{data.budget}</td>
                                <td>{data.boxOffice}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}
export default CustomColorHoverStripped;