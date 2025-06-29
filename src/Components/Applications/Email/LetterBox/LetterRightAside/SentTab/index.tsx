import SVG from '@/CommonComponent/SVG';
import { ImagePath } from '@/Constant';
import { sentEmailData } from '@/Data/Applications/Email';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { handleEnvelope, handleInterview } from '@/Redux/Reducers/LetterBoxSlice';
import Image from 'next/image';
import React, { useState } from 'react'
import { Badge, FormGroup, Input, Label } from 'reactstrap';

const SentTab = () => {
    const dispatch = useAppDispatch();
    const { faIcon } = useAppSelector((state) => state.letterbox);
    const [fill, setFill] = useState(false)
    const handleValue = () => dispatch(handleInterview(true))

    return (
        <div className="mail-body-wrapper">
            <ul>
                {sentEmailData.map((item, i) => (
                    <li className="inbox-data" key={i}>
                        <div className="inbox-user">
                            <FormGroup className="m-0" check inline>
                                <Input className={`checkbox-${item.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                                <Label check htmlFor={`emailCheckbox${i}`} />
                            </FormGroup>
                            <SVG className={`important-mail ${fill ? "active" : ""}`} iconId="fill-star" onClick={() => setFill(!fill)} />
                            <div className="rounded-border">
                                {item.image && <Image src={`${ImagePath}/user/${item.image}`} alt="user" width={38} height={38} />}
                                {item.shortName && <div className={item.color === "success" ? "circle-success" : ""}>
                                    <p className={`txt-${item.color}`}>{item.shortName}</p>
                                </div>}
                            </div>
                            <p>{item.name}</p>
                        </div>
                        <div className="inbox-message">
                            <div className="email-data">
                                <span>
                                    {item.message}
                                    <span>{item.subMessage}</span>
                                </span>
                                {item.badge &&
                                    item.badge.map((data, i) => (
                                        <Badge color={`light-${data.color}`} key={i} onClick={handleValue} className='m-0'> {data.title} </Badge>
                                    ))}
                            </div>
                            <div className="email-timing"><span>{item.time}</span></div>
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
export default SentTab;