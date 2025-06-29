import { ExtendedBackgroundTitle } from '@/Constant';
import React from 'react'
import { Col } from 'reactstrap'

const ExtendedBackground = () => {
    return (
        <Col xl={4} sm={12}>
            <div className='border-wrapper h-100 border'>
                <h3 className="mb-3">{ExtendedBackgroundTitle}</h3>
                <div className="helper-common-box">
                    <div className="helper-box light-card" /><span>{'.light-card'}</span>
                </div>
                <div className="helper-common-box">
                    <div className="helper-box light-background border" /><span>{'.light-background'}</span>
                </div>
            </div>
        </Col>
    )
}
export default ExtendedBackground;