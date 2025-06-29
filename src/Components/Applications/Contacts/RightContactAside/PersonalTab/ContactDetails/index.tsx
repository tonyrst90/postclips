import { Href, ImagePath } from '@/Constant';
import { ContactDetailsProps } from '@/Types/Contact.type';
import Image from 'next/image';
import React, { useCallback, useState } from 'react'
import EditDeleteLink from './EditDeleteLink';
import EmptyData from '../../Common/EmptyData';
import PrintModal from './PrintModal';

const ContactDetails: React.FC<ContactDetailsProps> = ({ selectedUser, userEditCallback, historyToggle }) => {
    const [printModal, setPrintModal] = useState(false);
    const togglePrintModal = () => setPrintModal(!printModal);
    const toggleCallback = useCallback((toggle: boolean) => {
        setPrintModal(toggle);
    }, []);

    return (
        <div>
            {selectedUser ? (
                <div className="profile-mail">
                    <div className="d-flex">
                        <Image className="img-fluid m-r-20 rounded-circle update_img_0" src={`${ImagePath}/${selectedUser.avatar}`} width={100} height={100} alt="" />
                        <div className="flex-grow-1 mt-0">
                            <h3><span className="first_name_0">{selectedUser.name} </span><span className="last_name_0">{selectedUser.surname}</span></h3>
                            <p className="email_add_0">{selectedUser.email}</p>
                            <ul>
                                <EditDeleteLink userEditCallback={userEditCallback} selectedUser={selectedUser} />
                                <li><a href={Href} onClick={() => historyToggle()}>{'History'}</a></li>
                                <li><a href={Href} onClick={() => togglePrintModal()}>{'Print'}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="email-general">
                        <h3 className="mb-3">{'General'}</h3>
                        <ul>
                            <li>{'Name'} <span className="font-primary first_name_0">{selectedUser.name}</span></li>
                            <li>{'Mobile No'}<span className="font-primary mobile_num_0">{selectedUser.mobile}</span></li>
                            <li>{'Email Address'}<span className="font-primary email_add_0">{selectedUser.email}</span></li>
                        </ul>
                    </div>
                </div>
            ) : (<EmptyData />)}
            {selectedUser && <PrintModal toggleCallback={toggleCallback} printModal={printModal} selectedUser={selectedUser} />}
        </div>
    )
}
export default ContactDetails;