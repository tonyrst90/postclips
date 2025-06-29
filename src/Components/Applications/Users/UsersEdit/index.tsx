'use client'
import React from 'react'
import { Container, Row } from 'reactstrap'
import MyProfile from './MyProfile'
import EditProfile from './EditProfile'
import AddProjectsAndUpload from './AddProjectsAndUpload'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'
import { EditProfileTitle, UsersTitle } from '@/Constant'

const EditProfileContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={EditProfileTitle} parent={UsersTitle} title={EditProfileTitle} />
            <Container fluid>
                <div className="edit-profile">
                    <Row>
                        <MyProfile />
                        <EditProfile />
                        <AddProjectsAndUpload />
                    </Row>
                </div>
            </Container>
        </>
    )
}
export default EditProfileContainer;