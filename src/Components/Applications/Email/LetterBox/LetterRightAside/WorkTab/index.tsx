import SVG from '@/CommonComponent/SVG';
import { ImagePath } from '@/Constant';
import { workEmailData } from '@/Data/Applications/Email';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { handleEnvelope, handleInterview } from '@/Redux/Reducers/LetterBoxSlice';
import Image from 'next/image';
import React, { useState } from 'react'
import { Badge, FormGroup, Input, Label } from 'reactstrap';

const WorkTab = () => {
    const dispatch = useAppDispatch();
    const { faIcon } = useAppSelector((state) => state.letterbox);
    const [fill, setFill] = useState(false)
    const handleValue = () => dispatch(handleInterview(true))
    return (
        <div className="mail-body-wrapper">
            <ul>
                {workEmailData.map((data, i) => (
                    <li className="inbox-data" key={i}>
                        <div className="inbox-user">
                            <FormGroup className="m-0" check inline>
                                <Input className={`checkbox-${data.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                                <Label check htmlFor={`emailCheckbox${i}`} />
                            </FormGroup>
                            <SVG className={`important-mail ${fill ? "active" : ""}`} iconId="fill-star" onClick={() => setFill(!fill)} />
                            <div className="rounded-border">
                                {data.image && <Image src={`${ImagePath}/user/${data.image}`} alt="user" width={38} height={38} />}
                                {data.shortName && <div className={data.color === "success" ? "circle-success" : ""}>
                                    <p className={`txt-${data.color}`}>{data.shortName}</p>
                                </div>}
                            </div>
                            <p>{data.name}</p>
                        </div>
                        <div className="inbox-message">
                            <div className="email-data">
                                <span>
                                    {data.message}
                                    <span>{data.subMessage}</span>
                                </span>
                                {data.badge &&
                                    data.badge.map((item, i) => (
                                        <Badge color={`light-${data.color}`} key={i} onClick={handleValue} className='m-0'> {item.title} </Badge>
                                    ))}
                            </div>
                            <div className="email-timing">
                                <span>{data.time}</span>
                            </div>
                            <div className="email-options">
                                <i className={`fa fa-envelope-o envelope-1 ${!faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(true))} />
                                <i className={`fa fa-envelope-open-o envelope-2 ${faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(false))} />
                                <i className="fa fa-trash-o trash-3" />
                                <i className="fa fa-print" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default WorkTab;