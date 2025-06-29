import { ScrollingContent, UXDesigner, WedDesigner } from '@/Constant';
import React, { Fragment, useState } from 'react'
import { ArrowRightCircle } from 'react-feather';
import { Button } from 'reactstrap';
import CommonModal from '../Common/CommonModal';
import { scrollingModalData } from '@/Data/UiKits/Modal';

const ScrollingModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        footer: true,
        toggler: toggle,
        title: 'Scrolling Modal',
    }
    return (
        <>
            <Button color='success' onClick={toggle}>{ScrollingContent}</Button>
            <CommonModal modalData={data}>
                <>
                    <h6>{WedDesigner}</h6>
                    {scrollingModalData && scrollingModalData.map((item, index) => (
                        <Fragment key={index}>
                            {index === 4 && <h6>{UXDesigner}</h6>}
                            <div className={`d-flex ${item.class}`}>
                                <div className="flex-shrink-0">
                                    <ArrowRightCircle className='svg-modal' />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <p className={index === 3 ? 'pb-4' : ''}>{item.text}</p>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </>
            </CommonModal>
        </>
    )
}
export default ScrollingModal;