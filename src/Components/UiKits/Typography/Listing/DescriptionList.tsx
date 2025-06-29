import { DescriptionListTitle } from '@/Constant';
import React from 'react'
import { Col } from 'reactstrap'

const DescriptionList = () => {
    return (
        <Col md={12} xxl={4}>
            <div className='card-wrapper border rounded-3'>
                <h6 className='sub-title fw-bold'>{DescriptionListTitle}</h6>
                <dl className="mb-0">
                    <dt>{'The way to get started is to quit talking and begin doing.'}</dt>
                    <dd>{'-Walt Disney'}</dd>
                    <dt>{"Life is what happens when you're busy making other plans."}</dt>
                    <dd>{"-John Lennon"}</dd>
                    <dt>{"Whoever is happy will make others happy too."} </dt>
                    <dd>{"-Anne Frank"}</dd>
                    <dt>{"Life is either a daring adventure or nothing at all."}</dt>
                    <dd>{"-Helen Keller"}</dd>
                    <dt>{"The purpose of our lives is to be happy."}</dt>
                    <dd className="mb-0">{"-Dalai Lama"}</dd>
                </dl>
            </div>
        </Col>
    )
}
export default DescriptionList;