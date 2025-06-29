import { useAppDispatch } from '@/Redux/Hooks';
import { setSearchInput } from '@/Redux/Reducers/ECommerce/ProductReducer';
import React from 'react'
import { Col, Form, FormGroup, Input } from 'reactstrap';

const ProductSearch = () => {
    const dispatch = useAppDispatch();
    const handleSearchKeyword = (e: { target: { value: string } }) => {
        dispatch(setSearchInput(e.target.value));
    };
    return (
        <Col md={9} sm={12}>
            <Form>
                <FormGroup className="form-group m-0">
                    <Input
                        type="text"
                        placeholder="Search.."
                        onChange={(e) => handleSearchKeyword}
                    />
                    <i className="fa fa-search" />
                </FormGroup>
            </Form>
        </Col>
    )
}
export default ProductSearch;