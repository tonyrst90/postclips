import { BorderColorTitle } from '@/Constant';
import { borderColorData } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Col } from 'reactstrap'

const BorderColor = () => {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper h-100 alert-light-light dark-helper'>
                <h3 className="mb-3">{BorderColorTitle}</h3>
                {borderColorData.slice(0, 7).map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box border border-${item.color}`} />
                        <span>{`.border-${item.color}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
export default BorderColor;