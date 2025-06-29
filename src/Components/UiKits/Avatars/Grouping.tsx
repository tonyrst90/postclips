import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { GroupingTitle, ImagePath } from '@/Constant';
import { avatarGroupData, groupSubTitle } from '@/Data/UiKits/Avatars';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const Grouping = () => {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={GroupingTitle} span={groupSubTitle} />
                <CardBody className='avatar-showcase'>
                    <div className="avatars">
                        {avatarGroupData && avatarGroupData.map((data) => (
                            <div className="customers d-inline-block avatar-group" key={data.id}>
                                <ul>
                                    {data.child && data.child.map((item) => (
                                        <li className="d-inline-block" key={item.id}>
                                            <img className={`img-${item.class}`} src={`${ImagePath}/${item.image}`} alt="user profile" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Grouping;