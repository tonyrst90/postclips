import { AdditiveRadiusTitle } from '@/Constant';
import { additiveRadiusData } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Col } from 'reactstrap'

const AdditiveRadius = () => {
    return (
        <Col xl={4} sm={12}>
            <div className='border-wrapper h-100 border'>
                <h3 className="mb-3">{AdditiveRadiusTitle}</h3>
                {additiveRadiusData && additiveRadiusData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-radius bg-light ${item}`} /><span>{`.${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
export default AdditiveRadius;