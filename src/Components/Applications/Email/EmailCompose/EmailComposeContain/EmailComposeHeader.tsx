import { Button, Col, Row } from 'reactstrap'
import EmailComposeForm from './EmailComposeForm';

const EmailComposeHeader = () => {
  return (
    <div className="email-right-aside">
      <div className="email-body radius-left">
        <div className="ps-0">
          <div className="email-compose">
            <div className="email-top compose-border">
              <Row>
                <Col sm={8} className='xl-50'>
                  <h3 className="mb-0">{'New Message'}</h3>
                </Col>
                <Col sm={4} className='xl-50 btn-middle'>
                  <Button color="primary" block className='btn-mail text-center mb-0 mt-0 w-100'>
                    <i className="fa fa-paper-plane me-2" /> {'SEND'}
                  </Button>
                </Col>
              </Row>
            </div>
            <EmailComposeForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailComposeHeader