import { ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'

const ProfileHeader = () => {
    return (
        <div className="d-flex">
            <div className="media-size-email">
                <Image className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} width={48} height={48} alt="" />
            </div>
            <div className="flex-grow-1">
                <h3>{'MARK JENCO'}</h3>
                <p>{'Markjecno@gmail.com'}</p>
            </div>
        </div>
    )
}
export default ProfileHeader;