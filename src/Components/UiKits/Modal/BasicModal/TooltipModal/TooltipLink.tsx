import { Href, TooltipsModal } from '@/Constant';
import { tooltipData } from '@/Data/UiKits/Modal';
import React, { Fragment, useState } from 'react'
import { Tooltip } from 'reactstrap';

const TooltipLink = () => {
    const [tooltips, setTooltips] = useState<{ [key: string]: boolean }>({});

    const toggleTooltip = (id: string) => {
        setTooltips(prevTooltips => ({
            ...prevTooltips,
            [id]: !prevTooltips[id]
        }));
    };
    return (
        <>
            <h5>{TooltipsModal}</h5>
            <p className="mt-2">
                {tooltipData.map(({ id, content, text }) => (
                    <Fragment key={id}>
                        <a className="tooltip-test text-info" href={Href} id={id}>{content}</a> {text}
                        <Tooltip autohide={true} isOpen={tooltips[id] || false} target={id} toggle={() => toggleTooltip(id)}>
                            {'Tooltip'}
                        </Tooltip>
                    </Fragment>
                ))}
            </p>
        </>
    )
}
export default TooltipLink;