import { TooltipProp } from '@/Types/ECommerce.type';
import React, { useState } from 'react'
import { Label, Tooltip } from 'reactstrap';

const TooltipCommon: React.FC<TooltipProp> = ({ labelText, tooltip, targetId }) => {
    const [hoverTool, setHoverTool] = useState(false);
    const hoverToggle = () => setHoverTool(!hoverTool);
    return (
        <>
            <Label>{labelText}<i className="icon-help-alt ms-1" id={targetId} /></Label>
            <Tooltip placement="top" isOpen={hoverTool} target={targetId} toggle={hoverToggle}>
                {tooltip}
            </Tooltip>
        </>
    )
}
export default TooltipCommon