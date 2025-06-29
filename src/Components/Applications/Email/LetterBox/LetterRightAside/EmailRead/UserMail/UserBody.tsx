import { userBodyData } from '@/Data/Applications/Email'
import React from 'react'

const UserBody = () => {
    return (
        <div className="user-body">
            {userBodyData.map((item, index) => (
                <p key={index}>{item.text}</p>
            ))}
            <div className="mail-subcontent">
                <p>{'Yours faithfully,'}</p>
                <p>{'Account Security Team'}</p>
            </div>
        </div>
    )
}
export default UserBody;