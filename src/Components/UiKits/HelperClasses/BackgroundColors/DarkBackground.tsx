import { DarkBackgroundTitle } from '@/Constant';
import { borderColorData } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Col } from 'reactstrap'

const DarkBackground = () => {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <h3 className="mb-3">{DarkBackgroundTitle}</h3>
                {borderColorData && borderColorData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box bg-${item.color}`} /><span>{`.bg-${item.color}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
export default DarkBackground;