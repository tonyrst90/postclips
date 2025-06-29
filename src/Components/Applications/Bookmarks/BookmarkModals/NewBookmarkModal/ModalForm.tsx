import React, { useState } from 'react'
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { FormData, NewBookmarkModalFormType } from '@/Types/Bookmark.type';
import { useAppDispatch } from '@/Redux/Hooks';
import { addNewBookmark } from '@/Redux/Reducers/BookmarkSlice';

const ModalForm: React.FC<NewBookmarkModalFormType> = ({ addCallback, modalToggle }) => {
    const dispatch = useAppDispatch();
    const [validate, setValidate] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        if (data.url && data.title && data.description) {
            setValidate(true);
            dispatch(addNewBookmark({ data, img_url: 'lightgallry/01.jpg' }));
            addCallback(true);
        } else {
            console.error('Please fill correct details');
        }
    };
    return (
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row className="g-2">
                <Col md={12}>
                    <FormGroup className="mt-0">
                        <Label>{'Web Url'}</Label>
                        <input type='text' className={`form-control ${errors.url ? 'is-invalid' : ''} ${validate && !errors.url ? 'is-valid' : ''}`} {...register('url', { required: true })} />
                        {errors.url && (<FormFeedback>{errors.url.message}</FormFeedback>)}
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup className="mt-0">
                        <Label>{'Title'}</Label>
                        <input type='text' className={`form-control ${errors.title ? 'is-invalid' : ''} ${validate && !errors.title ? 'is-valid' : ''}`} {...register('title', { required: true })} />
                        {errors.title && (<FormFeedback>{errors.title.message}</FormFeedback>)}
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup className="mt-0">
                        <Label>{'Description'}</Label>
                        <input type='textarea' className={`form-control ${errors.description ? 'is-invalid' : ''} ${validate && !errors.description ? 'is-valid' : ''}`} {...register('description', { required: true })} />
                        {errors.description && (<FormFeedback>{errors.description.message}</FormFeedback>)}
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup className="mt-0">
                        <Label>{'Group'}</Label>
                        <Input type='select'>
                            <option value="bookmark">{'My Bookmarks'}</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup className="mt-0">
                        <Label>{'Collection'}</Label>
                        <Input type='select'>
                            <option value="general">{'General'}</option>
                            <option value="fs">{'fs'}</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <Button color='secondary' className='me-2'>{'Save'}</Button>
            <Button color='primary' onClick={modalToggle}>{'Cancel'}</Button>
        </Form>
    )
}
export default ModalForm;