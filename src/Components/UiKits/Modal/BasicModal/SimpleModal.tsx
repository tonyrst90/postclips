import { ExploreMore, ImagePath, Simple } from '@/Constant';
import React, { useState } from 'react'
import { ArrowRight } from 'react-feather';
import { Button } from 'reactstrap';
import CommonModal from '../Common/CommonModal';
import Image from 'next/image';

const SimpleModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        toggler: toggle,
    }
    return (
        <>
            <Button color='secondary' onClick={toggle}>{Simple}</Button>
            <CommonModal modalData={data}>
                <div className="modal-toggle-wrapper">
                    <h4>{'Up to '}<strong className="txt-danger">{'85% OFF'}</strong>{', Hurry Up Online Shopping'}</h4>
                    <div className="modal-img">
                        <Image src={`${ImagePath}/gif/online-shopping.gif`} alt="online-shopping" width={200} height={200} />
                    </div>
                    <p className="text-sm-center">
                        {"Our difficulty in finding regular clothes that was of great quality, comfortable, and didn't impact the environment given way to Creatures of Habit."}
                    </p>
                    <Button color='primary' className="d-flex align-items-center gap-2 text-light ms-auto" onClick={toggle}>
                        {ExploreMore} <ArrowRight />
                    </Button>
                </div>
            </CommonModal>
        </>
    )
}
export default SimpleModal;