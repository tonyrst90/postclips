import { Href } from '@/Constant'
import React from 'react'
import { Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationCard = () => {
    return (
        <Col xs={12} className="m-t-30">
            <Pagination color='primary' className='pagination-primary'>
                <PaginationItem disabled><PaginationLink href={Href}>{'Previous'}</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href={Href}>{'1'}</PaginationLink></PaginationItem>
                <PaginationItem active><PaginationLink href={Href}>{'2'}</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href={Href}>{'3'}</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href={Href}>{'Next'}</PaginationLink></PaginationItem>
            </Pagination>
        </Col>
    )
}
export default PaginationCard;