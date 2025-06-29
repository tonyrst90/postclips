import { Href, ImagePath } from '@/Constant';
import { organizationList } from '@/Data/Applications/Contacts';
import { NavOrganizationProps } from '@/Types/Contact.type';
import Image from 'next/image';
import React from 'react'
import { Col, Nav, NavLink } from 'reactstrap';

const NavOrganization: React.FC<NavOrganizationProps> = ({ orgActiveTab, setOrgActiveTab }) => {
    return (
        <Col md={5} className='xl-50'>
            <Nav className='flex-column' pills>
                {organizationList.map((item) => (
                    <NavLink key={item.id} href={Href} className={orgActiveTab === item.id ? 'active' : ''} onClick={() => { setOrgActiveTab(item.id); }}>
                        <div className="d-flex">
                            <Image className='img-50 img-fluid m-r-20 rounded-circle' src={`${ImagePath}/${item.image}`} width={50} height={50} alt='' />
                            <div className="flex-grow-1">
                                <h3>{item.name}</h3>
                                <p>{item.email}</p>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </Nav>
        </Col>
    )
}
export default NavOrganization;