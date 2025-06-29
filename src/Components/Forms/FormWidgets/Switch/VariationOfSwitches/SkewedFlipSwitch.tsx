import { variationSwitchesData1 } from '@/Data/Forms/FormWidgets';
import React, { Fragment } from 'react'
import { Input, Label } from 'reactstrap'

const SkewedFlipSwitch = () => {
    return (
        <>
            {variationSwitchesData1.map((data) => (
                <Fragment key={data.id}>
                    <li className="tg-list-item">
                        <Input className={`tgl tgl-${data.class}`} id={`cb${data.id}`} type="checkbox" />
                        <Label className="tgl-btn" data-tg-off={data.off} data-tg-on={data.on} htmlFor={`cb${data.id}`} />
                    </li>
                    <li><p>{data.text}</p></li>
                </Fragment>
            ))}
        </>
    )
}
export default SkewedFlipSwitch;