import React, { ChangeEvent, useState } from 'react'
import { Button, Col, Form, Input, Label, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '@/Types/ECommerce.type';
import { AddCategory, PublishStatus } from '@/Constant';
import { addCategoryItem, publishStatusItem } from '@/Data/Applications/ECommerce/Product';
import ProductTag from '../Common/ProductTag';
import NewCategoryModal from './NewCategoryModal';
import ProductDate from './ProductDate';
import SVG from '@/CommonComponent/SVG';

const ProductCategories: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
    const [formData, setFormData] = useState({ category: "", status: "" })
    const { category, status } = formData;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (category !== "" && status !== "") {
            activeCallBack(4);
        } else {
            return toast.error("Please fill out details before moving on to the next step");
        }
    };
    return (
        <div className="sidebar-body">
            <Form>
                <Row className="g-lg-4 g-3">
                    <Col xs={12}>
                        <Row className="g-3">
                            <Col sm={6}>
                                <Row className="g-2">
                                    <Col xs={12}>
                                        <Label className="m-0">{AddCategory}</Label>
                                    </Col>
                                    <Col xs={12}>
                                        <Input type="select" name='category' value={category} onChange={updateFormData} >
                                            {addCategoryItem.map((item, index) => (
                                                <option key={index}>{item}</option>
                                            ))}
                                        </Input>
                                        <p className="f-light">{"A product can be added to a category"}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <ProductTag title={"Add Tag"} subTitle={true} />
                            <NewCategoryModal />
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row className="g-3">
                            <Col sm={6}>
                                <Row>
                                    <Col xs={12}>
                                        <Label>{PublishStatus}</Label>
                                        <Input type="select" name='status' value={status} onChange={updateFormData}>
                                            {publishStatusItem.map((item, index) => (
                                                <option key={index}>{item}</option>
                                            ))}
                                        </Input>
                                        <p className="f-light">{"Choose the status"}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <ProductDate />
                        </Row>
                    </Col>
                </Row>
                <div className="product-buttons">
                    <Button color='transparent' className='me-1' onClick={() => activeCallBack(2)}>
                        <div className="d-flex align-items-center gap-sm-2 gap-1">
                            <SVG iconId='back-arrow' /> {'Previous'}
                        </div>
                    </Button>
                    <Button color='transparent' onClick={handleNextButton}>
                        <div className="d-flex align-items-center gap-sm-2 gap-1">
                        {'Next'} <SVG iconId='front-arrow' /> 
                        </div>
                    </Button>
                </div>
            </Form>
        </div>
    )
}
export default ProductCategories