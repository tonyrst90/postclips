import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { PopoverDirectionTitle, PopoverOnTop } from '@/Constant';
import { popoverDirectionSubTitle, popoverPositions } from '@/Data/UiKits/Popover';
import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import CommonPopover from '../Common/CommonPopover';

const PopoverDirection = () => {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);

    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='card-no-border pb-0' title={PopoverDirectionTitle} span={popoverDirectionSubTitle} />
                <CardBody className='common-flex popover-wrapper'>
                    <Button color='warning' className="example-popover mb-0 me-0" id='TopPopover' onClick={toggle}>{PopoverOnTop}</Button>
                    <Popover placement="top" isOpen={popover} target="TopPopover" toggle={toggle}>
                        <PopoverHeader>{PopoverOnTop}</PopoverHeader>
                        <PopoverBody>{"Popovers need the tooltip plugin considering that a dependency."}</PopoverBody>
                    </Popover>
                    {popoverPositions && popoverPositions.map((item, index) => (
                        <Fragment key={index}>
                            <CommonPopover data={item} />
                        </Fragment>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default PopoverDirection;