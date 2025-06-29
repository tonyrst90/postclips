import { Badge, Button, Card, CardBody, Nav, NavItem } from 'reactstrap'
import DynamicEmailSideBar from './DynamicEmailSideBar'
import { useState } from 'react'
import { EmailFilter, ImagePath } from '@/Constant'
import Link from 'next/link'
import Image from 'next/image'

const MailSidebar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="md-sidebar">
      <Button color='primary' className="md-sidebar-toggle" onClick={() => setOpen(!open)}>{EmailFilter}</Button>
      <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${open ? "open" : ""}`}>
        <div className="email-left-aside">
          <Card>
            <CardBody>
              <div className="email-app-sidebar">
                <div className="d-flex align-items-center">
                  <div className="media-size-email">
                    <Image className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} width={48} height={48} alt="user" />
                  </div>
                  <div className="flex-grow-1">
                    <h3>{'MARK JENCO'}</h3>
                    <p>{'Markjecno@gmail.com'}</p>
                  </div>
                </div>
                <Nav className="main-menu">
                  <NavItem>
                    <Link className="btn-primary btn-block btn-mail w-100" href={'/app/email/email_compose'}>
                      <i className="icofont icofont-envelope me-2" /> {'NEW MAIL'}
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="show" href={'/app/email/email_application'}>
                      <span className="title">
                        <i className="icon-import" />{'Inbox'}
                      </span>
                      <Badge color='transparent' className="pull-right">(236)</Badge>
                    </Link>
                  </NavItem>
                  <DynamicEmailSideBar />
                </Nav>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default MailSidebar