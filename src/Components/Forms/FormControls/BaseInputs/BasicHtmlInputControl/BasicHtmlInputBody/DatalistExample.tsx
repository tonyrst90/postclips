import { DatalistExampleTitle } from '@/Constant';
import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'

const DatalistExample = () => {
    return (
        <Row className='mb-3'>
            <Col sm={3}><Label htmlFor="exampleDataList">{DatalistExampleTitle}</Label></Col>
            <Col sm={9}>
                <Input id="exampleDataList" list="datalistOptions" placeholder="Look up your nation..." />
                <datalist id="datalistOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                    <option value="India" />
                </datalist>
            </Col>
        </Row>
    )
}
export default DatalistExample;