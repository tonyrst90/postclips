import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { Printer } from 'react-feather'
import { EmptyTaskProp } from '@/Types/Tasks.type'
import { Href } from '@/Constant'

const EmptyTask: React.FC<EmptyTaskProp> = ({ title }) => {
    return (
        <Card className='mb-0'>
            <CardHeader className='d-flex'>
                <h3 className='mb-0'>{title}</h3>
                <a href={Href}>
                    <Printer className='me-2' />{'Print'}
                </a>
            </CardHeader>
            <CardBody>
                <div className='details-bookmark text-center'>
                    <span>{'No tasks found.'}</span>
                </div>
            </CardBody>
        </Card>
    )
}
export default EmptyTask;