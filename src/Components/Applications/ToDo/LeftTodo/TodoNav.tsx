import React, { useState } from 'react'
import { Badge, Button, Nav, NavItem } from 'reactstrap'
import { CheckCircle, FilePlus, Trash } from 'react-feather'
import { useAppSelector } from '@/Redux/Hooks';
import { TodoListType } from '@/Types/Todo.type';
import { Href } from '@/Constant';
import { todoNavList } from '@/Data/Applications/Todo';

const TodoNav = () => {
    const { allTodos } = useAppSelector((state) => state.todos)
    const [showTodos, setShowTodos] = useState<TodoListType[]>(allTodos);;
    const handleShowAllTodos = () => {
        setShowTodos(allTodos);
    };
    const handleShowFilteredTodos = (filter: string) => {
        const filteredTodos = allTodos.filter((data) => data.badge === filter);
        setShowTodos(filteredTodos);
    };

    return (
        <Nav className="main-menu">
            <NavItem>
                <Button color='primary' className="badge-light d-block btn-mail w-100"><CheckCircle className='me-2' />{'To Do List'}</Button>
            </NavItem>
            <NavItem>
                <a href={Href} onClick={handleShowAllTodos}>
                    <span className="iconbg badge-light-primary"><FilePlus /></span>
                    <span className="title ms-2">{'All Task'}</span>
                </a>
            </NavItem>
            {todoNavList.map((item, index) => (
                <NavItem key={index}>
                    <a href={Href} onClick={() => handleShowFilteredTodos(item.badgeText)}>
                        <span className={`iconbg badge-light-${item.color}`}>{item.icon}</span>
                        <span className="title ms-2">{item.tittle}</span>
                        <Badge color={item.color} pill>{allTodos.filter((data) => data.badge === item.badgeText).length}</Badge>
                    </a>
                </NavItem>
            ))}
            <NavItem>
                <a href={Href}>
                    <span className="iconbg badge-light-danger"><Trash /></span>
                    <span className="title ms-2">{'Trash'}</span>
                </a>
            </NavItem>
        </Nav>
    )
}
export default TodoNav;