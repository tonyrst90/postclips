import { usersSocialData } from '@/Data/Applications/Users';
import Link from 'next/link';
import React from 'react'

const SocialMedia = () => {
    return (
        <div className='social-media'>
            <ul className="list-inline">
                {usersSocialData && usersSocialData.map((item, index) => (
                    <li className="list-inline-item" key={index}>
                        <Link href={item.link} target="_blank" rel='noreferrer'>
                            <i className={`fa fa-${item.icon}`} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SocialMedia;