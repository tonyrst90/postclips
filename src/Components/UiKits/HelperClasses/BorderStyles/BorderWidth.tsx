import { BorderWidthTitle } from '@/Constant';
import { customBorderData } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Col } from 'reactstrap'

const BorderWidth = () => {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper h-100 alert-light-light dark-helper'>
                <h3 className="mb-3">{BorderWidthTitle}</h3>
                {customBorderData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box border border-${item}`} />
                        <span>{`.border-${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
export default BorderWidth;