import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { removeItems, selectItem } from '@/Redux/Reducers/TodoSlice';
import { TodoListType } from '@/Types/Todo.type';
import React from 'react'
import { toast } from 'react-toastify';
import { Badge } from 'reactstrap';

const TodoList = () => {
    const { allTodos } = useAppSelector((state) => state.todos);
    const dispatch = useAppDispatch();
    const handleRemoveTodo = (todoId: number, todo: string) => {
        dispatch(removeItems(todoId));
        toast.success(`${todo} deleted`);
    };
    const handleMarkedTodo = (item: TodoListType) => {
        if (item.status === "completed") {
            dispatch(selectItem({ id: item.id, status: 'pending', badgeclass: 'danger' }));
            toast.error(item.title + " as Incomplete");
        } else if (item.status === "pending") {
            dispatch(selectItem({ id: item.id, status: 'completed', badgeclass: 'success' }));
            toast.success(item.title + " as Complete");
        }
    };
    return (
        <ul id='todo-list'>
            {allTodos.length > 0
                ? allTodos.map((todo, index) => (
                    <li className={`task ${todo.status}`} key={index}>
                        <div className='task-container'>
                            <h4 className='task-label'>{todo.title}</h4>
                            <div className='d-flex align-items-center gap-3'>
                                <Badge color='' className={`badge-light-${todo.badgeclass}`}>{todo.badge}</Badge>
                                <h5 className='assign-name m-0'>{todo.date}</h5>
                                <span className='task-action-btn'>
                                    <span className='action-box large delete-btn' title='Delete Task' onClick={() => handleRemoveTodo(todo.id, todo.title)}>
                                        <i className='icon'>
                                            <i className='icon-trash' />
                                        </i>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </li>
                ))
                : ''}
        </ul>
    )
}
export default TodoList;