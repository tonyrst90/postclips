import { FilterComponentProps } from '@/Types/ECommerce.type'
import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'

const FilterComponent = ({ onFilter, filterText }: FilterComponentProps) => {
    return (
        <Row className="align-items-center mb-4">
            <Col xs={"auto"}><Label>{'Search'}:</Label></Col>
            <Col xs={"auto"}>
                <Input type="text" value={filterText} onChange={onFilter} placeholder="Search..." />
            </Col>
        </Row>
    )
}
export default FilterComponent;