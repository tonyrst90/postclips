import React, { useState } from 'react'
import { Button, Col } from 'reactstrap';
import CommonCrocsModalTitle from '../Common/CommonCrocsModalTitle';
import Image from 'next/image';
import { ClickOut, ImagePath } from '@/Constant';
import CustomModal1Body from './CustomModal1Body';

const CustomModal1 = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }

    return (
        <Col xl={4} md={6} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='PostClips-demo-img'>
                    <CommonCrocsModalTitle heading="Modal 1 -" subHeading="Profile Modal" text="Example of PostClips dashboard profile card." />
                    <div className="overflow-hidden">
                        <Image className="img-fluid" width={471} height={257} src={`${ImagePath}/alert/social.png`} alt="social" />
                        <Button color='primary' className="mx-auto mt-3" onClick={toggle}>{ClickOut}</Button>
                    </div>
                    <CustomModal1Body modal={modal} toggle={toggle} />
                </div>
            </div>
        </Col>
    )
}
export default CustomModal1;