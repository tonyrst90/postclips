import { Cancel, Submit } from '@/Constant';
import React from 'react'
import { Button, CardFooter, Col } from 'reactstrap'

const CardFooterSection = () => {
    return (
        <CardFooter className='text-end'>
            <Col sm={9} className="offset-sm-3">
                <Button color="primary" className="me-3">{Submit}</Button>
                <Button color="light">{Cancel}</Button>
            </Col>
        </CardFooter>
    )
}
export default CardFooterSection;