import { useAppDispatch } from '@/Redux/Hooks';
import { sortBy } from '@/Redux/Reducers/ECommerce/ProductReducer';
import React, { ChangeEvent } from 'react'
import { Col, Input } from 'reactstrap';

const Sorting = () => {
    const dispatch = useAppDispatch();
    const filterSort = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(sortBy(event.target.value));
    };

    return (
        <Col md={6} className="text-sm-end">
            <span className="m-r-5"> {'Showing Products 1 - 24 Of 200 Results'}</span>
            <div className="select2-drpdwn-product select-options d-inline-block">
                <Input className="form-control btn-square" name="select" type='select' onChange={filterSort}>
                    <option value="opt1">{'Featured'}</option>
                    <option value="opt2">{'Lowest Prices'}</option>
                    <option value="opt3">{'Highest Prices'}</option>
                </Input>
            </div>
        </Col>
    )
}
export default Sorting