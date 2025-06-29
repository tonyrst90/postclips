import SVG from '@/CommonComponent/SVG';
import { ImagePath } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { handleEnvelope, handleInterview, removeFromFavorite } from '@/Redux/Reducers/LetterBoxSlice';
import Image from 'next/image';
import React, { Fragment } from 'react'
import { Badge, FormGroup, Input, Label } from 'reactstrap';

const StarredTab = () => {
    const dispatch = useAppDispatch();
    const { inboxEmail, faIcon } = useAppSelector((state) => state.letterbox);
    const handleValue = () => dispatch(handleInterview(true))

    return (
        <div className="mail-body-wrapper">
            <ul>
                {inboxEmail.length > 0
                    ? inboxEmail.map((data, i) => (
                        <Fragment key={i}>
                            {data.star && (
                                <li className="inbox-data">
                                    <div className="inbox-user">
                                        <FormGroup className="m-0" check inline>
                                            <Input className={`checkbox-${data.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                                            <Label check for={`emailCheckbox${i}`} />
                                        </FormGroup>
                                        <SVG className={`important-mail ${data.star ? "active" : ""}`} iconId="fill-star" onClick={() => dispatch(removeFromFavorite(data))} />
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
                            )}
                        </Fragment>
                    ))
                    : "NO Starred Data"}
            </ul>
        </div >
    )
}
export default StarredTab;