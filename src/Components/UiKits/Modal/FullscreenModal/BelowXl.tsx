import { FullscreenBelowXl, UXDesigner, WebDesign, WedDesigner } from '@/Constant';
import React, { Fragment, useState } from 'react'
import { ArrowRightCircle, ChevronsRight } from 'react-feather';
import { Button } from 'reactstrap';
import CommonModal from '../Common/CommonModal';
import { belowsmData } from '@/Data/UiKits/Modal';

const BelowXl = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        footer: true,
        toggler: toggle,
        title: 'Full screen below xl',
        class: 'modal-fullscreen-xl-down',
        bodyClass: 'dark-modal'
    }
    return (
        <>
            <Button color='primary-2x' outline={true} onClick={toggle} >{FullscreenBelowXl}</Button>
            <CommonModal modalData={data}>
                <div className="large-modal-header">
                    <ChevronsRight />
                    <h6>{WebDesign}</h6>
                </div>
                <p className="modal-padding-space">{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</p>
                <div className="modal-details">
                    <div className="web-content">
                        <h6>{WedDesigner}</h6>
                        {belowsmData && belowsmData.map((item, index) => (
                            <Fragment key={index}>
                                <div className={`d-flex ${item.class}`}>
                                    <div className="flex-shrink-0">
                                        <ArrowRightCircle className='svg-modal' />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                                {index === 1 && <h6>{UXDesigner}</h6>}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </CommonModal>
        </>
    )
}
export default BelowXl;