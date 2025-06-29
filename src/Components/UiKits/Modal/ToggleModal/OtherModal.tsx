import { CenterdModalBodyProps } from '@/Types/UiKits.type'
import React from 'react'
import CommonModal from '../Common/CommonModal'
import Image from 'next/image'
import { AlreadyLeaving, ImagePath, Register, YesLogout } from '@/Constant'
import Link from 'next/link'
import { Button } from 'reactstrap'

const OtherModal: React.FC<CenterdModalBodyProps> = ({ modal, toggle }) => {
    const ModalData = {
        isOpen: modal,
        center: true,
        toggler: toggle
    }
    return (
        <CommonModal modalData={ModalData}>
            <div className='modal-toggle-wrapper'>
                <ul className="modal-img simple-list">
                    <li>
                        <Image width={100} height={100} src={`${ImagePath}/gif/logout.gif`} alt="logout" />
                    </li>
                </ul>
                <h4 className="pt-3 text-center">{AlreadyLeaving}</h4>
                <p className="text-center">{'Are you sure want to logout this dashboard?'}</p>
                <span className="d-block text-center mb-4">
                    {'Not a member?'}
                    <Link className="ms-1" href={`/auth/sign-up`}>{Register}</Link>
                </span>
                <Button color='dark' className="d-flex m-auto" onClick={toggle} >{YesLogout}</Button>
            </div>
        </CommonModal>
    )
}
export default OtherModal;