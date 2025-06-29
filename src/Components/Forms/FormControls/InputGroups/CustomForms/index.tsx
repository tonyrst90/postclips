import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { CustomFormsTitle, FavoriteChocolatesTitle, FavoriteColorsTitle, FavoriteItemsTitle, Options, PixelstrapThemeTitle, Submit } from '@/Constant';
import { customFormsSubTitle, favoriteChocolatesData, favoriteColorsData, favoriteItemsData, inputGroupPixelstrapList } from '@/Data/Forms/FormControls';
import React from 'react'
import { Button, Card, CardBody, Col, InputGroup, InputGroupText } from 'reactstrap'
import CustomFormSelect from './CustomFormSelect';

const CustomForms = () => {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={CustomFormsTitle} span={customFormsSubTitle} />
                <CardBody className="common-flex main-custom-form">
                    <InputGroup>
                        <InputGroupText htmlFor="inputGroupSelect01">{Options}</InputGroupText>
                        <CustomFormSelect inputId='inputGroupSelect01' title={PixelstrapThemeTitle} options={inputGroupPixelstrapList} />
                    </InputGroup>
                    <InputGroup>
                        <CustomFormSelect inputId='inputGroupSelect02' title={FavoriteColorsTitle} options={favoriteColorsData} />
                        <InputGroupText htmlFor="inputGroupSelect02">{Options}</InputGroupText>
                    </InputGroup>
                    <InputGroup>
                        <Button color='secondary' outline><i className="icofont icofont-credit-card" /></Button>
                        <CustomFormSelect inputId='inputGroupSelect03' title={FavoriteChocolatesTitle} options={favoriteChocolatesData} />
                    </InputGroup>
                    <InputGroup>
                        <CustomFormSelect inputId='inputGroupSelect04' title={FavoriteItemsTitle} options={favoriteItemsData} />
                        <Button color='secondary' outline>{Submit}</Button>
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
export default CustomForms;