import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { AddProjectsAndUploadTitle, Href } from '@/Constant'
import { addProjectTable } from '@/Data/Applications/Users'
import React from 'react'
import { Button, Card, Col, Table } from 'reactstrap'

const AddProjectsAndUpload = () => {
    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={AddProjectsAndUploadTitle} tagClass='card-title mb-0' />
                <div className="table-responsive custom-scrollbar theme-scrollbar add-project">
                    <Table className="card-table table-vcenter text-nowrap">
                        <thead>
                            <tr>
                                <th>{'Project Name'}</th>
                                <th>{'Date'}</th>
                                <th>{'Status'}</th>
                                <th>{'Price'}</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {addProjectTable.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <a className="text-inherit" href={Href} >{item.projectName}</a>
                                    </td>
                                    <td>{item.date}</td>
                                    <td><span className="status-icon">{item.status}</span></td>
                                    <td>{item.price}</td>
                                    <td className="text-end">
                                        <a className="icon" href={Href} /><Button color='primary' size='sm'><i className="fa fa-pencil me-1" />{'Edit'}</Button>
                                        <a className="icon" href={Href} /><Button color='transparent' size='sm'><i className="fa fa-link me-1" />{'Update'}</Button>
                                        <a className="icon" href={Href} /><Button color='danger' size='sm'><i className="fa fa-trash me-1" />{'Delete'}</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card>
        </Col>
    )
}
export default AddProjectsAndUpload;