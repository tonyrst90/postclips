import { LightBackgroundsTitle } from '@/Constant';
import { borderColorData } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Col } from 'reactstrap'

const LightBackground = () => {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <h3 className="mb-3">{LightBackgroundsTitle}</h3>
                {borderColorData && borderColorData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box alert-light-${item.color}`} /><span>{`.alert-light-${item.color}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
export default LightBackground;