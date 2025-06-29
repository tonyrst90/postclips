import { Congratulations, ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'
import { Col, Form, Row } from 'reactstrap'

const FinishForm = () => {
    return (
        <Form className="stepper-four needs-validation" noValidate>
            <Row className='g-3'>
                <Col xs={12} className="m-0">
                    <div className="successful-form">
                        <Image className="img-fluid" src={`${ImagePath}/gif/dashboard-8/successful.gif`} width={100} height={100} alt="successful" />
                        <h3>{Congratulations}</h3>
                        <p>{"Well done! You have successfully completed. "}</p>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}
export default FinishForm