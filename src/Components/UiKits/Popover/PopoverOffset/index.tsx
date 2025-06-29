import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Popoveroffset50, PopoveroffsetDash50, PopoverOffsetTitle, PopoverOnLeft, PopoverTitleSmall } from '@/Constant';
import { popoverOffsetSubTitle } from '@/Data/UiKits/Popover';
import { PopoverOffsetState } from '@/Types/UiKits.type';
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from 'reactstrap'

const PopoverOffset = () => {
    const [popoverState, setPopoverState] = useState({
        popover1: false,
        popover2: false
    });

    const togglePopover = (popoverKey: keyof PopoverOffsetState) => {
        setPopoverState(prevState => ({
            ...prevState,
            [popoverKey]: !prevState[popoverKey]
        }));
    };
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='card-no-border pb-0' title={PopoverOffsetTitle} span={popoverOffsetSubTitle} />
                <CardBody className='common-flex popover-wrapper'>
                    <Button color='secondary' className='mb-0 me-0' id='PopoverOffset' onClick={() => togglePopover('popover1')}>{Popoveroffset50}</Button>
                    <Popover placement="right" isOpen={popoverState.popover1} target="PopoverOffset" toggle={() => togglePopover('popover1')} offset={[50, 0]}>
                        <PopoverHeader>{PopoverTitleSmall}</PopoverHeader>
                        <PopoverBody>{"And here's some amazing content. It's very engaging. Right?"}</PopoverBody>
                    </Popover>
                    <Button color='success' className="example-popover mb-0 me-0" id='offset' onClick={() => togglePopover('popover2')}>{PopoveroffsetDash50}</Button>
                    <Popover placement="left" isOpen={popoverState.popover2} target="offset" toggle={() => togglePopover('popover2')} offset={[-50, 0]}>
                        <PopoverHeader>{PopoverOnLeft}</PopoverHeader>
                        <PopoverBody>{"Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself."}</PopoverBody>
                    </Popover>
                </CardBody>
            </Card>
        </Col>
    )
}
export default PopoverOffset;