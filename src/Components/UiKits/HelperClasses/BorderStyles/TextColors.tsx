import { TextColorsTitle } from '@/Constant';
import { borderColorData } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Col } from 'reactstrap'

const TextColors = () => {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper alert-light-light h-100 dark-helper'>
                <h3 className="mb-3">{TextColorsTitle}</h3>
                {borderColorData && borderColorData.map((item) => (
                    <div className="helper-common-box" key={item.id}>
                        <div className={`helper-box helper-text border txt-${item.color} ${item.id === 8 ? 'bg-dark' : ''}`}>
                            {'C '}
                        </div>
                        <span>{`.txt-${item.color}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
export default TextColors;