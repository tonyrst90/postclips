'use client'
import { useAppDispatch } from '@/Redux/Hooks';
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'reactstrap'
import TaskLeftAside from './TaskLeftAside';
import TaskRightAside from './TaskRightAside';
import Breadcrumbs from '@/CommonComponent/BreadCrumbs';
import { ApplicationsTitle, TasksTitle } from '@/Constant';
import { fetchTasks } from '@/Redux/Reducers/TasksSlice';

const TasksContainer = () => {
    const dispatch = useAppDispatch();
    const [activeTab, setActiveTab] = useState(1);
    const activeToggle = (tab: number) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        dispatch(fetchTasks());
    }, []);
    return (
        <>
            <Breadcrumbs mainTitle={TasksTitle} parent={ApplicationsTitle} title={TasksTitle} />
            <Container fluid>
                <div className="email-wrap bookmark-wrap">
                    <Row>
                        <TaskLeftAside activeToggle={activeToggle} activeTab={activeTab} />
                        <TaskRightAside activeTab={activeTab} />
                    </Row>
                </div>
            </Container>
        </>
    )
}
export default TasksContainer;