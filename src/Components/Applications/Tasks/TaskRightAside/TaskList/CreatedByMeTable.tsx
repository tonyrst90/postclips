import React from 'react'
import { Table } from 'reactstrap';
import SweetAlert from "sweetalert2";
import { Link, MoreHorizontal, Trash2 } from 'react-feather';
import { CreatedByMeTableProp } from '@/Types/Tasks.type';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { removeTask } from '@/Redux/Reducers/TasksSlice';
import { Href } from '@/Constant';

const CreatedByMeTable: React.FC<CreatedByMeTableProp> = ({ componentRef }) => {
    const { allTask } = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();
    const deleteTask = (userId: number) => {
        SweetAlert.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ok",
            cancelButtonText: "cancel",
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                dispatch(removeTask(userId));
                SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
                SweetAlert.fire("Your imaginary file is safe!");
            }
        });
    };
    return (
        <div className="taskadd" ref={componentRef}>
            <div className="table-responsive custom-scrollbar theme-scrollbar">
                <Table>
                    <tbody>
                        {allTask.map((list) => (
                            <tr key={list.id}>
                                <td>
                                    <h3 className="task_title_0">{list.title}</h3>
                                    <p className='project_name_0'>{list.collection}</p>
                                </td>
                                <td>
                                    <p className='task_desc_0'>{list.description}</p>
                                </td>
                                <td>
                                    <a className="me-2" href={Href}><Link /></a>
                                    <a href={Href}><MoreHorizontal /></a>
                                </td>
                                <td><a href={Href} onClick={() => deleteTask(list.id)}><Trash2 /></a></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default CreatedByMeTable;