import React, { useState } from 'react'
import { Button, Col } from 'reactstrap';
import CommonCrocsModalTitle from '../Common/CommonCrocsModalTitle';
import Image from 'next/image';
import { ClickOut, ImagePath } from '@/Constant';
import CustomModal3Body from './CustomModal3Body';

const CustomModal3 = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }

    return (
        <Col xl={4} md={12} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='PostClips-demo-img'>
                    <CommonCrocsModalTitle heading="Modal 3 -" subHeading="Balance Modal" text="Example of PostClips dashboard balance card." />
                    <div className="overflow-hidden balance-modal">
                        <Image className="img-fluid" width={749} height={257} src={`${ImagePath}/alert/balance.png`} alt="balance" />
                        <Button color='primary' className="mx-auto mt-3" onClick={toggle} >{ClickOut}</Button>
                    </div>
                    <CustomModal3Body modal={modal} toggle={toggle} />
                </div>
            </div>
        </Col>
    )
}
export default CustomModal3;