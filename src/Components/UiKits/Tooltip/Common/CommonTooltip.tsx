import { CommonTooltipProp } from '@/Types/UiKits.type';
import React, { useState } from 'react'
import { Button, Tooltip } from 'reactstrap';

const CommonTooltip: React.FC<CommonTooltipProp> = ({ item, outline }) => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <>
      <Button outline={outline} color={item.btnColor ? item.btnColor : ""} id={"Tooltip-" + item.id} className="mb-0 me-0">{item.btnText}</Button>
      <Tooltip placement={item.placement} isOpen={tooltip} target={"Tooltip-" + item.id} toggle={toggle}>{item.tooltip}</Tooltip>
    </>
  )
}

export default CommonTooltip