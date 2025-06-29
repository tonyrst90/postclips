import React from 'react'
import { Col, Row } from 'reactstrap';
import { ChevronDown, Grid, List } from 'react-feather';
import { useAppDispatch } from '@/Redux/Hooks';
import { Href } from '@/Constant';
import { toggleColumnGrid, toggleRowGrid, toggleSidebar } from '@/Redux/Reducers/ECommerce/FilterReducer';
import GridOptions from './GridOptions';
import Sorting from './Sorting';

const TotalProducts = () => {
    const dispatch = useAppDispatch();
    return (
        <Row>
            <Col md={6} className="products-total">
                <div className="square-product-setting d-inline-block">
                    <a className="icon-grid grid-layout-view" href={Href} onClick={() => { dispatch(toggleColumnGrid()); }}><Grid /></a>
                </div>
                <div className="square-product-setting d-inline-block">
                    <a className="icon-grid m-0 list-layout-view" href={Href} onClick={() => { dispatch(toggleRowGrid()); }}> <List /></a>
                </div>
                <span className="d-none-productlist filter-toggle">{'Filters'}
                    <span className="ms-2" onClick={() => { dispatch(toggleSidebar()) }}><ChevronDown className="toggle-data" /></span>
                </span>
                <GridOptions />
            </Col>
            <Sorting />
        </Row>
    )
}
export default TotalProducts