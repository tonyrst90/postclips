import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Input, InputGroup } from 'reactstrap'
import TodoList from './TodoList'
import { useAppDispatch } from '@/Redux/Hooks';
import { addNewTodo } from '@/Redux/Reducers/TodoSlice';

const RightTodo = () => {
    const [task, setTask] = useState("");
    const dispatch = useAppDispatch();
    const handleNewTask = () => {
        if (task !== "") {
            dispatch(addNewTodo(task));
            setTask("");

        } else { return;}
    };
    return (
        <Col xxl={9} xl={8} className="box-col-8">
            <Card>
                <CardHeader className="b-bottom">
                    <div className="todo-list-header">
                        <InputGroup className="new-task-wrapper">
                            <Input className="m-0" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter new task here. . ." />
                            <Button color='primary' className="add-new-task-btn" onClick={handleNewTask}>{'Add Task'}</Button>
                        </InputGroup>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="todo">
                        <div className="todo-list-wrapper theme-scrollbar custom-scrollbar">
                            <div className="todo-list-container">
                                <div className="todo-list-body">
                                    <TodoList />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default RightTodo;