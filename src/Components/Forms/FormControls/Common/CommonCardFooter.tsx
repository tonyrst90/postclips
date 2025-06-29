import { Cancel, Submit } from '@/Constant';
import { CommonCardFooterProps } from '@/Types/Forms.type';
import React from 'react'
import { Button, CardFooter } from 'reactstrap';

const CommonCardFooter: React.FC<CommonCardFooterProps> = ({ footerClass, color1, btn2Class, btn1Class, color2, }) => {
    return (
        <CardFooter className={footerClass ? footerClass : ''}>
            <Button color={color1} className={`m-r-15 ${btn1Class ? btn1Class : ''}`}>{Submit}</Button>
            <Button color={color2} className={btn2Class ? btn2Class : ''}>{Cancel}</Button>
        </CardFooter>
    );
}
export default CommonCardFooter;