'use client'
import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import LeftTodo from './LeftTodo';
import RightTodo from './RightTodo';
import { useAppDispatch } from '@/Redux/Hooks';
import { fetchTodo } from '@/Redux/Reducers/TodoSlice';
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import { ApplicationsTitle, ToDoTitle } from '@/Constant';

const ToDoContainer = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodo());
    }, []);
    return (
        <>
            <Breadcrumbs mainTitle={ToDoTitle} parent={ApplicationsTitle} title={ToDoTitle} />
            <Container fluid className="email-wrap bookmark-wrap todo-wrap">
                <Row>
                    <LeftTodo />
                    <RightTodo />
                </Row>
            </Container>
        </>
    )
}
export default ToDoContainer;