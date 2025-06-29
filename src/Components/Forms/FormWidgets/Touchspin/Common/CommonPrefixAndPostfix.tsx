import { Post, Pre } from '@/Constant';
import { CommonPrefixAndPostfixProp } from '@/Types/Forms.type';
import React, { useState } from 'react'
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap';

const CommonPrefixAndPostfix: React.FC<CommonPrefixAndPostfixProp> = ({ postIcon, preIcon, preButton, PostButton, color }) => {
    const [touchspinValue, setTouchspinValue] = useState(0);
    const decrementHandle = () => {
        if (touchspinValue > 0) {
            setTouchspinValue(touchspinValue - 1);
        }
    }
    const incrementHandle = () => {
        setTouchspinValue(touchspinValue + 1)
    }

    return (
        <InputGroup>
            <Button color="transparent" onClick={decrementHandle} className={`decrement-touchspin px-3 btn-touchspin btn-${color ? "warning" : "primary"}`}>
                <i className="fa fa-minus" />
            </Button>
            {preIcon ? <InputGroupText>{'$'}</InputGroupText> : ""}
            {preButton ? (<Button outline color="warning" className='px-2'>{Pre}</Button>) : ("")}
            <Input className="input-touchspin spin-outline-primary" type="number" value={touchspinValue} readOnly />
            {postIcon ? <InputGroupText>{'%'}</InputGroupText> : ""}
            {PostButton ? (<Button outline color="warning" className='px-2'>{Post}</Button>) : ("")}
            <Button color="transparent" onClick={incrementHandle} className={`increment-touchspin px-3 btn-touchspin btn-${color ? "warning" : "primary"}`}>
                <i className="fa fa-plus" />
            </Button>
        </InputGroup>
    );
}
export default CommonPrefixAndPostfix;