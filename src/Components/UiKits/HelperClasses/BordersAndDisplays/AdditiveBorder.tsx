import { AdditiveBorderTitle } from '@/Constant';
import { additiveBorderData } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Col } from 'reactstrap'

const AdditiveBorder = () => {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <h3 className='mb-3'>{AdditiveBorderTitle}</h3>
                {additiveBorderData && additiveBorderData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box bg-light ${item}`} /><span>{`.${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
export default AdditiveBorder;