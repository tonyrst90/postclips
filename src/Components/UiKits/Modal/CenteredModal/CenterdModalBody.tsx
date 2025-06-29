import { CenterdModalBodyProps } from '@/Types/UiKits.type';
import React from 'react'
import CommonModal from '../Common/CommonModal';
import Image from 'next/image';
import { CenteredError, Close, ImagePath } from '@/Constant';
import { Button } from 'reactstrap';

const CenterdModalBody: React.FC<CenterdModalBodyProps> = ({ modal, toggle }) => {
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle,
    }
    return (
        <CommonModal modalData={data} >
            <div className="modal-toggle-wrapper">
                <ul className="modal-img">
                    <li>
                        <Image width={100} height={100} src={`${ImagePath}/gif/danger.gif`} alt="error" />
                    </li>
                </ul>
                <h4 className="text-center pb-2">{CenteredError}</h4>
                <p className="text-center">{"Attackers on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations."}</p>
                <Button color='secondary' className="d-flex m-auto" onClick={toggle}>{Close}</Button>
            </div>
        </CommonModal>
    )
}
export default CenterdModalBody;