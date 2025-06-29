import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { NewTaskFormProps, TaskItems } from '@/Types/Tasks.type';
import { addNewTask } from '@/Redux/Reducers/TasksSlice';
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import { SubTaskTitle, TaskTitleLabel } from '@/Constant';
import DateDetailsInputs from './DateDetailsInputs';

const NewTaskForm: React.FC<NewTaskFormProps> = ({ setAddModal, toggle }) => {
    const [validate, setValidate] = useState(false);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, } = useForm<TaskItems>();
    const addTask = (data: TaskItems) => {
        if (data.title && data.collection && data.description) {
            dispatch(addNewTask(data));
            setValidate(true);
            setAddModal(false);
        } else {
            console.error('Please submit valid details')
        }
    };
    return (
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(addTask)} noValidate>
            <Row>
                <Col md={12}>
                    <FormGroup className='mt-0'>
                        <Label>{TaskTitleLabel}</Label>
                        <input type="text" className={`form-control ${errors.title ? 'is-invalid' : ''} ${validate && !errors.title ? 'is-valid' : ''}`} {...register('title', { required: true })} />
                        {errors.title && (<FormFeedback>{errors.title && ('Task title is required')}</FormFeedback>)}
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup className='mt-0'>
                        <Label>{SubTaskTitle}</Label>
                        <input type="text" className={`form-control ${errors.collection ? 'is-invalid' : ''} ${validate && !errors.collection ? 'is-valid' : ''}`} {...register('collection', { required: true })} />
                        {errors.collection && (<FormFeedback>{errors.collection && ('Sub task is required')}</FormFeedback>)}
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup className='mt-0'><DateDetailsInputs /></FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup className='mt-0'>
                        <Input type="select" className="js-example-basic-single">
                            <option value="task">{'My Task'}</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup className='mt-0'>
                        <Input type="select" className="js-example-disabled-results">
                            <option value="general">{'General'}</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup className="my-0">
                        <input type="textarea" className={`form-control ${errors.description ? 'is-invalid' : ''} ${validate && !errors.description ? 'is-valid' : ''}`} {...register('description', { required: true })} />
                        {errors.description && (<FormFeedback>{errors.description && ('Description is required')}</FormFeedback>)}
                    </FormGroup>
                </Col>
            </Row>
            <Button color='secondary' className='me-2'>{'Save'}</Button>
            <Button color='primary' onClick={toggle} >{'Cancel'}</Button>
        </Form>
    );
}
export default NewTaskForm;