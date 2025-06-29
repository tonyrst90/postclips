import { Cancel, ConnectNewAccount, ImagePath, OpenFirstModal } from '@/Constant';
import React, { useState } from 'react'
import { Button } from 'reactstrap';
import CommonModal from '../Common/CommonModal';
import Image from 'next/image';
import OtherModal from './OtherModal';

const ToggleModalBody = () => {
    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const toggle2 = () => { setOpen(!open); }
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle
    }
    return (
        <>
            <Button color='dark' onClick={toggle}>{OpenFirstModal}</Button>
            <CommonModal modalData={data}>
                <div className='modal-toggle-wrapper'>
                    <ul className="modal-img">
                        <li>
                            <Image width={100} height={100} src={`${ImagePath}/gif/whatapp.gif`} alt="whatsapp" />
                        </li>
                        <li>
                            <Image width={100} height={100} src={`${ImagePath}/gif/instagram.gif`} alt="instagram" />
                        </li>
                        <li>
                            <Image width={100} height={100} src={`${ImagePath}/gif/facebook.gif`} alt="facebook" />
                        </li>
                    </ul>
                    <h6>{'Remove your complete account from your phone or tablet to sign out of the Gmail app.'}</h6>
                    <Button color='dark' className="rounded-pill w-100 mt-4" onClick={toggle2} >{ConnectNewAccount}</Button>
                    <Button color='transparent' className="rounded-pill w-100 dark-toggle-btn" onClick={toggle}>{Cancel}</Button>
                </div>
            </CommonModal>
            <OtherModal modal={open} toggle={toggle2} />
        </>
    )
}
export default ToggleModalBody;