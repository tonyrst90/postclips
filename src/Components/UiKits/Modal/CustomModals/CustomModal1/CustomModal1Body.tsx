import SVG from '@/CommonComponent/SVG'
import { BrooklynSimmons, ImagePath } from '@/Constant'
import { demoModalData } from '@/Data/UiKits/Modal'
import { CenterdModalBodyProps } from '@/Types/UiKits.type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, Col, Modal } from 'reactstrap'

const CustomModal1Body: React.FC<CenterdModalBodyProps> = ({ modal, toggle }) => {
    return (
        <Modal fade centered isOpen={modal} toggle={toggle}>
            <Col xl={12}>
                <Card className="social-profile mb-0 rounded-0">
                    <CardBody>
                        <div className="social-img-wrap">
                            <div className="social-img">
                                <Image width={68} height={68} src={`${ImagePath}/dashboard-8/profile.png`} alt="profile" />
                            </div>
                            <div className="edit-icon">
                                <SVG iconId='profile-check' />
                            </div>
                        </div>
                        <div className="social-details">
                            <h3 className="mb-1 f-w-600">
                                <Link href={`/app/social_app`}>{BrooklynSimmons}</Link>
                            </h3>
                            <span className="f-light">{'@brookly.simmons'}</span>
                            <ul className="social-follow">
                                {demoModalData && demoModalData.map((item, index) => (
                                    <li key={index}>
                                        <h5 className="mb-0">{item.class}</h5>
                                        <span className="f-light">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Modal>
    )
}
export default CustomModal1Body;