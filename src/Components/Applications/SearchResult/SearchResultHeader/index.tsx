import React from 'react'
import { Button, CardHeader, Form, Input, InputGroup, InputGroupText } from 'reactstrap'

const SearchResultHeader = () => {
    return (
        <CardHeader>
            <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
                <InputGroup className="m-0 flex-nowrap">
                    <Input type="search" placeholder="Pixelstrap .." plaintext />
                    <Button color='primary'>
                        <InputGroupText className='bg-primary border-0'>{'Search'}</InputGroupText>
                    </Button>
                </InputGroup>
            </Form>
        </CardHeader>
    )
}
export default SearchResultHeader