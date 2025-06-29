import CardHeaderSpan from '@/CommonComponent/CardHeaderSpan'
import { EmptyDataProp } from '@/Types/Contact.type'
import React from 'react'
import { Card, CardBody } from 'reactstrap'

const EmptyData: React.FC<EmptyDataProp> = ({ title }) => {
    return (
        <Card className="mb-0">
            {title && <CardHeaderSpan headerClass="d-flex" heading={title}
                span={'0 Contacts'} />}
            <CardBody>
                <p className='text-center'>{'No Contact Found'} </p>
            </CardBody>
        </Card>
    )
}
export default EmptyData;