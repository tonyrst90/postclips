import SVG from '@/CommonComponent/SVG';
import { ImagePath } from '@/Constant';
import { CenterdModalBodyProps } from '@/Types/UiKits.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Card, CardBody, Col, Modal } from 'reactstrap'
import BalanceIconWrap from './BalanceIconWrap';

const CustomModal3Body: React.FC<CenterdModalBodyProps> = ({ modal, toggle }) => {
    return (
        <Modal fade centered isOpen={modal} toggle={toggle}>
            <Col xl={12}>
                <Card className="balance-box mb-0 rounded-0">
                    <CardBody>
                        <div className="balance-profile">
                            <div className="balance-img">
                                <Image width={68} height={68} src={`${ImagePath}/dashboard/profile.png`} alt="user vector" />
                                <Link href={`/app/users/user_profile`} className='edit-icon'>
                                    <SVG iconId='pencil' />
                                </Link>
                            </div>
                            <span className="f-light d-block">{'Your Balance '}</span>
                            <h5 className="mt-1 f-w-600">{'$768,987.90'}</h5>
                            <BalanceIconWrap />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Modal>
    )
}
export default CustomModal3Body;