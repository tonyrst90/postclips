import { FullScreenModal } from '@/Constant';
import React, { Fragment, useState } from 'react'
import { ChevronsRight } from 'react-feather';
import { Button } from 'reactstrap';
import CommonModal from '../Common/CommonModal';
import { fullScreenModalData } from '@/Data/UiKits/Modal';

const FullScreen = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        class: 'modal-fullscreen',
        toggler: toggle,
        title: 'Extra large modal',
        bodyClass: 'dark-modal',
    }
    return (
        <>
            <Button color='secondary' onClick={toggle}>{FullScreenModal}</Button>
            <CommonModal modalData={data}>
                {fullScreenModalData && fullScreenModalData.map((item, index) => (
                    <Fragment key={index}>
                        <div className="large-modal-header">
                            <ChevronsRight />
                            <h6>{item.title}</h6>
                        </div>
                        <p className="modal-padding-space">{item.text}</p>
                    </Fragment>
                ))}
            </CommonModal>
        </>
    )
}
export default FullScreen;