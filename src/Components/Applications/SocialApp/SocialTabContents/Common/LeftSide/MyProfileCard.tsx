import React from 'react'
import { Badge, Button, CardBody } from 'reactstrap';
import CommonCard from '../CommonCard';
import { ImagePath, MyProfileTitle } from '@/Constant';
import Image from 'next/image';
import { myProfileImageList } from '@/Data/Applications/SocialApp';

const MyProfileCard = () => {
    return (
        <CommonCard title={MyProfileTitle}>
            <CardBody className="social-status filter-cards-view">
                <div className="d-flex"><Image className="img-50 img-fluid m-r-20 rounded-circle" src={`${ImagePath}/user/1.jpg`} width={50} height={50} alt="" />
                    <div className="flex-grow-1">
                        <h3 className="font-primary">{'My Page'}</h3>
                        <span className="d-block"><span><i className="fa fa-comments-o" /><span className="px-2">{'Messages'}<Badge color='light' className="ms-2" pill>{'9'}</Badge></span></span></span>
                        <span className="d-block"><span><i className="fa fa-bell-o" /><span className="px-2">{'notification'}<Badge color='light' className="ms-2" pill>{'9'}</Badge></span></span></span>
                    </div>
                </div>
                <div className="social-btngroup d-flex">
                    <Button color='primary' className="text-center">{'Likes'}</Button>
                    <Button color='light' className="text-center ms-2">{'View'}</Button>
                </div>
                <div className="likes-profile text-center">
                    <h3> <span> <i className="fa fa-heart font-danger" /> {'884'}</span></h3>
                </div>
                <div className="text-center">{'35 New Likes This Week'}</div>
                <div className="customers text-center social-group">
                    <ul>
                        {myProfileImageList.map((list, i) => (
                            <li className="d-inline-block" key={i}>
                                <Image className="img-40 rounded-circle" width={36} height={36} src={`${ImagePath}/user/${list}`} alt="" />
                            </li>
                        ))}
                    </ul>
                </div>
                <Image className="img-fluid mt-5" alt="" width={335} height={223} src={`${ImagePath}/social-app/timeline-3.png`} />
            </CardBody>
        </CommonCard>
    )
}
export default MyProfileCard