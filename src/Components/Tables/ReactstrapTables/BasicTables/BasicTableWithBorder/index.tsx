import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BasicTableWithBorderTitle, ImagePath } from '@/Constant';
import { basicTableBody, basicTableHeader, basicTableWithBorderSubTitle } from '@/Data/Tables/ReactstrapTables/BasicTables';
import React from 'react'
import { Badge, Card, Col } from 'reactstrap'
import CommonTable from '../Common/CommonTable';
import Image from 'next/image';

const BasicTableWithBorder = () => {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={BasicTableWithBorderTitle} span={basicTableWithBorderSubTitle} />
                <div className="table-responsive custom-scrollbar">
                    <CommonTable headData={basicTableHeader} headRowClass='border-bottom-primary'>
                        {basicTableBody.map((data) => (
                            <tr className={`border-bottom-${data.color}`} key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td> <Image className="img-30 me-2" src={`${ImagePath}/user/${data.image}`} width={30} height={30} alt="users" />{data.firstname}</td>
                                <td>{data.lastName}</td>
                                <td>{data.userName}</td>
                                <td>{data.designation}</td>
                                <td>{data.company}</td>
                                <td> <Badge color={`light-${data.badgeColor}`} className={`text-${data.badgeColor}`}>{data.language}</Badge></td>
                                <td>{data.country}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}
export default BasicTableWithBorder;