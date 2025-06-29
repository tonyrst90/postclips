import React from 'react'
import { Label } from 'reactstrap'
import CountUp from 'react-countup';
import { Href } from '@/Constant';
import { UserFooterProp } from '@/Types/Users.type';

const UserFooter: React.FC<UserFooterProp> = ({ divClass }) => {
    return (
        <div className={`like-comment ${divClass ? divClass : ''}`}>
            <ul className='list-inline'>
                <li className='list-inline-item border-right pe-3'>
                    <Label className='m-0'>
                        <a href={Href} className='me-2'><i className='fa fa-heart' /></a>
                        {'Like'}
                    </Label>
                    <CountUp end={2569} className='ms-2 counter' />
                </li>
                <li className='list-inline-item ms-2'>
                    <Label className='m-0'>
                        <a href={Href} className='me-2'><i className='fa fa-comment' /></a>
                        {'Comment'}
                    </Label>
                    <CountUp end={569} className='ms-2 counter' />
                </li>
            </ul>
        </div>
    )
}
export default UserFooter;