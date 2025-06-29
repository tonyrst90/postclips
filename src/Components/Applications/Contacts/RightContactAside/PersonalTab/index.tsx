import CardHeaderSpan from '@/CommonComponent/CardHeaderSpan';
import { ContactsTitle, Personal } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { setEditRow } from '@/Redux/Reducers/ContactSlice';
import { PersonalTabProp, UserCallbackUserType, UserUpdateType } from '@/Types/Contact.type';
import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap';
import NewContactList from './NewContactList';
import UpdateUserForm from './UpdateUserForm';
import ContactDetails from './ContactDetails';

const PersonalTab: React.FC<PersonalTabProp> = ({ historyToggle }) => {
    const { users } = useAppSelector((state) => state.contact);
    const dispatch = useAppDispatch();
    const [selectedUser, setSelectedUser] = useState<undefined | UserCallbackUserType | UserUpdateType>();
    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({});
    const userCallback = useCallback((user: UserCallbackUserType) => {
        setSelectedUser(user);
    }, []);
    const userEditCallback = useCallback((edit: boolean, usersData: UserUpdateType) => {
        setEditData(usersData);
        setSelectedUser(usersData);
        setEditing(edit);
        dispatch(setEditRow(usersData));
    }, []);
    return (
        <Card className="mb-0">
            <CardHeaderSpan headerClass='d-flex' heading={Personal} spanClass='f-14 pull-right mt-0' span={`${users.length} ${ContactsTitle}`} />
            <CardBody className="p-0">
                <Row className="list-persons">
                    <NewContactList users={users} userCallback={userCallback} />
                    <Col md={7} className="xl-50">
                        {editing ? (
                            <UpdateUserForm editData={editData} userEditCallback={userEditCallback} />
                        ) : (
                            <TabContent activeTab={0}>
                                <TabPane tabId={0}>
                                    <ContactDetails historyToggle={historyToggle} selectedUser={selectedUser ? selectedUser : users[0]} userEditCallback={userEditCallback} />
                                </TabPane>
                            </TabContent>
                        )}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
export default PersonalTab;