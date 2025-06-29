import React, { useState } from 'react'
import { Button, Col } from 'reactstrap';
import CommonCrocsModalTitle from '../Common/CommonCrocsModalTitle';
import Image from 'next/image';
import { ClickOut, CrocsLogin, ImagePath } from '@/Constant';
import CommonModal from '../../Common/CommonModal';
import StaticModalForm from '../../Common/StaticModalForm';

const CustomModal2 = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle,
        bodyClass: 'dark-sign-up social-profile text-start'
    }
    return (
        <Col xl={4} md={6} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='PostClips-demo-img'>
                    <CommonCrocsModalTitle heading="Modal 2 -" subHeading="Result Modal" text="Example of PostClips login form." />
                    <div className="overflow-hidden">
                        <Image className="img-fluid" width={415} height={268} src={`${ImagePath}/alert/learning.png`} alt="learning" />
                        <Button color='primary' className="mx-auto mt-3" onClick={toggle}>{ClickOut}</Button>
                    </div>
                    <CommonModal modalData={data}>
                        <div className="modal-toggle-wrapper">
                            <h3 className="f-w-600">{CrocsLogin}</h3>
                            <p>{'Fill in your information below to continue.'}</p>
                            <StaticModalForm toggle={toggle} />
                        </div>
                    </CommonModal>
                </div>
            </div>
        </Col>
    )
}
export default CustomModal2;