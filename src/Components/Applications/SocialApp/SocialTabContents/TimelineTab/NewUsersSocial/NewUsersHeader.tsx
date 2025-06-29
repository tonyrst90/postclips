import { ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'
import { MoreVertical } from 'react-feather'

const NewUsersHeader = () => {
    return (
        <div className="new-users-social">
            <div className="d-flex">
                <Image className="rounded-circle image-radius m-r-15" src={`${ImagePath}/user/1.jpg`} width={58} height={58} alt="" />
                <div className="flex-grow-1">
                    <h3 className="mb-0 f-w-700">{'ELANA'}</h3>
                    <p>{'January, 12,2024'}</p>
                </div>
                <span className="pull-right mt-0"><MoreVertical /></span>
            </div>
        </div>
    )
}
export default NewUsersHeader