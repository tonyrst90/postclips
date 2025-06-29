import { TouchspinProp } from '@/Types/Forms.type';
import React, { useState } from 'react'
import { Button } from 'reactstrap';

const CommonTouchspin: React.FC<TouchspinProp> = ({ color, arrowIcon, outline, btnClass }) => {
    const [touchspinValue, setTouchspinValue] = useState(Math.floor(Math.random() * 10));

    const decrementHandle = () => {
        if (touchspinValue > 0) {
            setTouchspinValue(touchspinValue - 1);
        }
    }
    const incrementHandle = () => {
        setTouchspinValue(touchspinValue + 1)
    }

    return (
        <div className="touchspin-wrapper d-flex align-items-center justify-content-center">
            <Button onClick={decrementHandle} color='transparent' outline={outline} className={`me-1 decrement-touchspin px-3 btn-touchspin ${btnClass ? btnClass : ''}`}>
                {arrowIcon ? <i className="fa fa-angle-left d-flex align-items-center justify-content-center" /> : <i className="fa fa-minus d-flex align-items-center justify-content-center" />}
            </Button>
            <input className={`me-1 input-touchspin spin-outline-${color}`} type="number" value={touchspinValue} readOnly />
            <Button onClick={incrementHandle} color='transparent' outline={outline} className={`increment-touchspin px-3 btn-touchspin ${btnClass ? btnClass : ''}`}>
                {arrowIcon ? <i className="fa fa-angle-right d-flex align-items-center justify-content-center" /> : <i className="fa fa-plus d-flex align-items-center justify-content-center" />}
            </Button>
        </div>
    )
}
export default CommonTouchspin;