import React from 'react'
import { Badge, FormGroup, Input, Label } from 'reactstrap';
import MailPagination from './Pagination';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { addToFavorites, handleEnvelope, handleInterview, removeItems } from '@/Redux/Reducers/LetterBoxSlice';
import SVG from '@/CommonComponent/SVG';
import Image from 'next/image';
import { ImagePath } from '@/Constant';

const InboxTab = () => {
    const dispatch = useAppDispatch();
    const { page, inboxEmail, faIcon } = useAppSelector((state) => state.letterbox);
    const handleValue = () => dispatch(handleInterview(true))
    const handleRemoveEmail = (id: number) => {
        dispatch(removeItems(id));
    }
    return (
        <div className="mail-body-wrapper">
            <ul>
                {inboxEmail.map((item, i) => (
                    <li className={`inbox-data ${page ? i < 7 ? "hidden" : "" : i < 7 ? "" : "hidden"}`} key={i}>
                        <div className="inbox-user">
                            <FormGroup className="m-0" check inline>
                                <Input className={`checkbox-${item.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                                <Label check htmlFor={`emailCheckbox${i}`} />
                            </FormGroup>
                            <SVG className={`important-mail ${item.star ? "active" : ""}`} iconId="fill-star" onClick={() => dispatch(addToFavorites(item))} />
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
                                <i className="fa fa-trash-o trash-3" onClick={() => handleRemoveEmail(item.id)} />
                                <i className="fa fa-print" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <MailPagination />
        </div>
    )
}
export default InboxTab;