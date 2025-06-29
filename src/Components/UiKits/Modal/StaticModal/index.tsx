import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { CrocsLogin, StaticBackdropModal, StaticModalTitle } from '@/Constant';
import { staticModalSubTitle } from '@/Data/UiKits/Modal';
import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import CommonModal from '../Common/CommonModal';
import StaticModalForm from '../Common/StaticModalForm';

const StaticModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }
    const ModalData = {
        isOpen: modal,
        toggler: toggle,
        bodyClass: 'dark-sign-up social-profile text-start'
    }

    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader title={StaticModalTitle} span={staticModalSubTitle} />
                <CardBody>
                    <Button color='primary' onClick={toggle} >{StaticBackdropModal}</Button>
                    <CommonModal modalData={ModalData}>
                        <div className='modal-toggle-wrapper'>
                            <h3>{CrocsLogin}</h3>
                            <p>{'Fill in your information below to continue.'}</p>
                            <StaticModalForm toggle={toggle} />
                        </div>
                    </CommonModal>
                </CardBody>
            </Card>
        </Col>
    )
}
export default StaticModal;