import { UnorderListTitle } from '@/Constant';
import { unorderListData } from '@/Data/UiKits/Typography';
import React from 'react'
import { Col } from 'reactstrap'

const UnorderList = () => {
    return (
        <Col md={6} xxl={4}>
            <div className='card-wrapper border rounded-3'>
                <h6 className='sub-title fw-bold'>{UnorderListTitle}</h6>
                <ul>
                    {unorderListData && unorderListData.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </Col>
    )
}
export default UnorderList;