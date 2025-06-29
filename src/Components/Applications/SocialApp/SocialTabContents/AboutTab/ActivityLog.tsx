import CardHeaderSpan from '@/CommonComponent/CardHeaderSpan'
import { ActivityLogTitle } from '@/Constant'
import { activityLogData } from '@/Data/Applications/SocialApp'
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const ActivityLog = () => {
    return (
        <Col sm={12} className='activity-log-main'>
            <Card>
                <CardHeaderSpan heading={ActivityLogTitle} />
                <CardBody>
                    <div className="activity-log">
                        {activityLogData.map((data) => (
                            <div className="my-activity" key={data.id}>
                                <h3 className="mb-3">{data.title}</h3>
                                {data.child.map((item) => (
                                    <p key={item.id}>
                                        <span> {item.icon}</span>
                                        {item.text}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ActivityLog
