import React, { ChangeEvent, useState } from 'react'
import { Button, Col, Form, Input, Label, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { ActiveCallbackProp } from '@/Types/ECommerce.type';
import { ChooseYourCurrency, InitialCost, ProductStocks, SellingPriceText, TooltipLabelText } from '@/Constant';
import { chooseCurrencyItem, sellingPriceRadio } from '@/Data/Applications/ECommerce/Product';
import TooltipCommon from './Common/Tooltip';
import SVG from '@/CommonComponent/SVG';

const SellingPrice: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
    const [formData, setFormData] = useState({ initialCost: "", sellingPrice: "", currency: "", stocks: "", })
    const { initialCost, sellingPrice, currency, stocks } = formData;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (initialCost !== "" && sellingPrice !== "" && currency !== "" && stocks !== "") {
            activeCallBack(5);
        } else {
            return toast.error("Please fill out details before moving on to the next step");
        }
    };
    return (
        <div className="sidebar-body">
            <Form className="price-wrapper">
                <Row className="g-3 custom-input">
                    <Col sm={6}>
                        <Label>{InitialCost} <span className="txt-danger">{'*'}</span></Label>
                        <Input type="number" name='initialCost' value={initialCost} onChange={updateFormData} />
                    </Col>
                    <Col sm={6}>
                        <Label>{SellingPriceText} <span className="txt-danger">{'*'}</span></Label>
                        <Input type="number" name='sellingPrice' value={sellingPrice} onChange={updateFormData} />
                    </Col>
                    <Col sm={6}>
                        <Label>{ChooseYourCurrency}</Label>
                        <Input type="select" name='currency' value={currency} onChange={updateFormData}>
                            {chooseCurrencyItem.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </Input>
                    </Col>
                    <Col sm={6}>
                        <Label>{ProductStocks}<span className="txt-danger">{'*'}</span></Label>
                        <Input type="number" name='stocks' value={stocks} onChange={updateFormData} />
                    </Col>
                    <Col xs={12}>
                        <TooltipCommon labelText={TooltipLabelText} tooltip={"Choose the kind of discount that will be used on that particular item."} targetId='selling' />
                        <ul className="radio-wrapper">
                            {sellingPriceRadio.map((data) => (
                                <li key={data.id}>
                                    <Input id={`radio-icon${data.id}`} type="radio" name="radio5" value="option5" defaultChecked={data.check ? true : false} />
                                    <Label htmlFor={`radio-icon${data.id}`} check><span>{data.text}</span></Label>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <div className="product-buttons">
                    <Button color='transparent' className='me-1' onClick={() => activeCallBack(3)}>
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
export default SellingPrice