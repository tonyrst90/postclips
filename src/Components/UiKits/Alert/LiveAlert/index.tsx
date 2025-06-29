import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { LiveAlertText, LiveAlertTitle, ShowLiveAlert } from '@/Constant';
import { liveAlertSubTitle } from '@/Data/UiKits/Alert';
import React, { useState } from 'react'
import { Alert, Button, Card, CardBody, Col } from 'reactstrap';

const LiveAlert = () => {
    const [data, setData] = useState<number[]>([])
    const removeValue = (item: number) => {
        setData(data.filter((value, index) => {
            return value !== item;
        }));
    }

    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={LiveAlertTitle} span={liveAlertSubTitle} />
                <CardBody className='live-dark'>
                    {data.map((item: number, index: number) => (
                        <Alert color='light' toggle={() => { removeValue(item) }} key={index}>
                            <div>{LiveAlertText}</div>
                        </Alert>
                    ))}
                    <Button color='dark' onClick={() => { setData((prev) => [...prev, prev.length + 1]) }}>{ShowLiveAlert}</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
export default LiveAlert;