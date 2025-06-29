import { ExtraLargeModal } from '@/Constant';
import React, { Fragment, useState } from 'react'
import { ChevronsRight } from 'react-feather';
import { Button } from 'reactstrap';
import CommonModal from '../Common/CommonModal';
import { fullScreenModalData } from '@/Data/UiKits/Modal';

const ExtraLarge = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        toggler: toggle,
        title: 'Extra large modal',
        size: 'xl',
        bodyClass: 'dark-modal',
    }
    return (
        <>
            <Button color='info' onClick={toggle}>{ExtraLargeModal}</Button>
            <CommonModal modalData={data} >
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
export default ExtraLarge;