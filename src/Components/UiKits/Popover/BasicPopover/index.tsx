import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { BasicPopoverTitle, HurryUp } from '@/Constant';
import { basicPopoverData, basicPopoverSubTitle } from '@/Data/UiKits/Popover';
import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import CommonPopover from '../Common/CommonPopover';

const BasicPopover = () => {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);

    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='card-no-border pb-0' title={BasicPopoverTitle} span={basicPopoverSubTitle} />
                <CardBody className='common-flex popover-wrapper'>
                    <Button color='primary' className="example-popover mb-0 me-0" id='Popover1' onClick={toggle}>{HurryUp}</Button>
                    <Popover placement="left" isOpen={popover} target="Popover1" toggle={toggle}>
                        <PopoverHeader>{'Basic Popover'}</PopoverHeader>
                        <PopoverBody>{"If the package restore doesn't help, you can look at the Output window in the Visual Studio."}</PopoverBody>
                    </Popover>
                    {basicPopoverData && basicPopoverData.map((item, index) => (
                        <Fragment key={index}>
                            <CommonPopover data={item} />
                        </Fragment>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default BasicPopover;