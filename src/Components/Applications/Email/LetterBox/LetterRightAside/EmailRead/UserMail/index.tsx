import React from 'react'
import { ChevronDown } from 'react-feather'
import InboxOptions from './InboxOptions'
import UserBody from './UserBody'
import UserFooter from './UserFooter'
import { MailPropsType } from '@/Types/Email.type'
import Image from 'next/image'
import { ImagePath } from '@/Constant'
import { Button } from 'reactstrap'

const UserMail: React.FC<MailPropsType> = ({ handlePrint }) => {

    return (
        <div className="user-mail-wrapper">
            <div className="user-title">
                <div>
                    <div className="rounded-border">
                        <Image className="img-fluid" src={`${ImagePath}/user/12.png`} width={38} height={38} alt="user" />
                    </div>
                    <div className="dropdown-subtitle">
                        <p>{'Jacob Jones'}</p>
                        <div className="onhover-dropdown">
                            <Button color='transparent' className="p-0 dropdown-button"> {'To me'} <ChevronDown /></Button>
                            <div className="inbox-security onhover-show-div">
                                <p> {'From: '} <span>{'jones'} &lt;{'jacobjones3@gmail.com'}&gt;</span></p>
                                <p>{'to: '}<span>{'donut.horry@gmail.com'}</span></p>
                                <p>{'reply-to: '}<span>&lt;{'jacobjones3@gmail.com'}&gt;</span></p>
                                <p>{'date: '}<span>{'Jul 13, 2024, 7:10 AM'}</span></p>
                                <p>{'subject: '}<span>{'Important Account Security Update'}</span></p>
                                <p>{'security: '}<span>{'standard encryption (TLS)'}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <InboxOptions handlePrint={handlePrint} />
            </div>
            <UserBody />
            <UserFooter />
            <div className="send-btn">
                <Button color='primary'>{'Send'}<i className="fa fa-paper-plane" /></Button>
            </div>
        </div>
    )
}
export default UserMail;