import React from 'react'
import { Card, CardBody, Col, Form } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { MultipleSectionsHeadersTitle } from '@/Constant';
import { multipleSelectionSubTitle } from '@/Data/Forms/FormWidgets';
import { multipleWithHeadersData } from '@/Data/Forms/FormWidgets/Typeahead';

const MultipleSectionsWithHeaders = () => {
    return (
        <Col sm={12} md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={MultipleSectionsHeadersTitle} span={multipleSelectionSubTitle} />
                <CardBody>
                    <div id="multiple-datasets">
                        <Form className="theme-form">
                            <div>
                                <Typeahead
                                    id='multiple-typeahead'
                                    multiple
                                    options={multipleWithHeadersData}
                                    placeholder="NBA and NHL teams"
                                    labelKey='name'
                                />
                            </div>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default MultipleSectionsWithHeaders;