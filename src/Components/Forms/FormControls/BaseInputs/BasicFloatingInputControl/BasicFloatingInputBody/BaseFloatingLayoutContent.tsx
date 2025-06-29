import { EmailAddress } from '@/Constant';
import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonOpenMenu from '../../Common/CommonOpenMenu';
import { charOpenMenu } from '@/Data/Forms/FormControls';

const BaseFloatingLayoutContent = () => {
    return (
        <Col sm={9}>
            <Row className="g-2">
                <Col xxl={6}>
                    <FormGroup floating>
                        <Input id="floatingInputGrid" type="email" placeholder="name@example.com" defaultValue="mdo@example.com" />
                        <Label htmlFor="floatingInputGrid">{EmailAddress}</Label>
                    </FormGroup>
                </Col>
                <CommonOpenMenu colClass='col-xxl-6' inputId='floatingSelectGrid' options={charOpenMenu} />
            </Row>
        </Col>
    )
}
export default BaseFloatingLayoutContent;