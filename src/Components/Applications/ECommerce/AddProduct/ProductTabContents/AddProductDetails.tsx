import React, { ChangeEvent, useState } from 'react'
import { Button, Col, Form, Input, Label, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '@/Types/ECommerce.type';
import { ProductTitleLabel } from '@/Constant';
import ToolbarBox from './Common/ToolbarBox';
import SVG from '@/CommonComponent/SVG';

const AddProductDetails: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
    const [formData, setFormData] = useState({ productTitle: "" });
    const { productTitle } = formData;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (productTitle !== "") {
            activeCallBack(2);
        } else {
            return toast.error("Please fill out details before moving on to the next step");
        }
    };
    return (
        <div className="sidebar-body">
            <Form>
                <Row className="g-2">
                    <Col xs={12} className="m-0">
                        <Label>{ProductTitleLabel} <span className="txt-danger">{"*"}</span></Label>
                    </Col>
                    <Col xs={12} className="custom-input">
                        <Input className='is-invalid' type="text" name="productTitle" value={productTitle} onChange={updateFormData} />
                    </Col>
                    <ToolbarBox paragraph={"Improve product visibility by adding a compelling description."} />
                </Row>
            </Form>
            <div className="product-buttons">
                <Button color='transparent' onClick={handleNextButton}>
                    <div className="d-flex align-items-center gap-sm-2 gap-1">
                        {'Next'} <SVG iconId="front-arrow" />
                    </div>
                </Button>
            </div>
        </div>
    )
}
export default AddProductDetails;