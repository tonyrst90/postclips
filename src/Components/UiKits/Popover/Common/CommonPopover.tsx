import { CommonPopoverProp } from '@/Types/UiKits.type';
import React, { Fragment, useState } from 'react'
import { Button, Popover, PopoverBody, PopoverHeader } from 'reactstrap';

const CommonPopover: React.FC<CommonPopoverProp> = ({ data }) => {
    const [popover, setPopover] = useState(false);
    const toggle = () => setPopover(!popover);
    return (
        <Fragment>
            <Button color={`${data.btnColor}`} size={data.size} className="example-popover" id={`${'Popover-' + data.id}`}>{data.btnText}</Button >
            <Popover placement={data.placement} isOpen={popover} target={'Popover-' + data.id}
                toggle={toggle} trigger={data.trigger}>
                <PopoverHeader>{data.popoverHeader}</PopoverHeader>
                <PopoverBody>{data.popoverBody}</PopoverBody>
            </Popover>
        </Fragment>
    )
}
export default CommonPopover;