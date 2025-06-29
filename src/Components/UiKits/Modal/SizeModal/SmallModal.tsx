import { SmallModalButton } from '@/Constant';
import React, { Fragment, useState } from 'react'
import { ChevronsRight } from 'react-feather';
import { Button } from 'reactstrap';
import CommonModal from '../Common/CommonModal';
import { fullScreenModalData } from '@/Data/UiKits/Modal';

const SmallModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        toggler: toggle,
        title: 'Small modal',
        size: 'sm',
        bodyClass: 'dark-modal',
    }
    return (
        <>
            <Button color='primary' onClick={toggle}>{SmallModalButton}</Button>
            <CommonModal modalData={data}>
                {fullScreenModalData && fullScreenModalData.slice(0, 3).map((item, index) => (
                    <Fragment key={index}>
                        <div className="large-modal-header">
                            <ChevronsRight />
                            <h6>{item.title}</h6>
                        </div>
                        <p className={`modal-padding-space ${index === 2 ? 'mb-0' : ''}`}>{item.text}</p>
                    </Fragment>
                ))}
            </CommonModal>
        </>
    )
}
export default SmallModal;