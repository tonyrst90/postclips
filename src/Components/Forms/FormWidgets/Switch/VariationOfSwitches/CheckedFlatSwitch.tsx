import { variationSwitchesData2 } from '@/Data/Forms/FormWidgets';
import React, { Fragment } from 'react'
import { Input, Label } from 'reactstrap'

const CheckedFlatSwitch = () => {
    return (
        <>
            {variationSwitchesData2.map((data) => (
                <Fragment key={data.id}>
                    <li className="tg-list-item">
                        <div className="d-flex">
                            <div className={`flex-grow-1 text-end ${data.id === 1 ? 'icon-state' : ""}`}>
                                <Label className="switch mb-0 square-checked">
                                    <Input type="checkbox" defaultChecked />
                                    <span className={`switch-state bg-${data.color} rounded-2`} />
                                </Label>
                            </div>
                        </div>
                    </li>
                    <li><p>{data.text}</p></li>
                </Fragment>
            ))}
        </>
    )
}
export default CheckedFlatSwitch;