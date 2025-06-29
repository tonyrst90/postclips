import React from 'react'
import { Card, CardBody, Col, Form } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { CommonTypeaheadProps } from '@/Types/Forms.type'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'

const CommonTypeahead: React.FC<CommonTypeaheadProps> = ({ title, subTitle, options, placeholder, labelKey, className, id }) => {
    return (
        <Col sm={12} md={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={title} span={subTitle} />
                <CardBody>
                    <div>
                        <Form className="theme-form">
                            <div className={className}>
                                <Typeahead id={id} options={options} labelKey={labelKey} placeholder={placeholder} />
                            </div>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default CommonTypeahead;