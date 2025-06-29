import React from 'react'
import Swal from 'sweetalert2';
import { Table } from 'reactstrap';
import { Link, MoreHorizontal, Trash2 } from 'react-feather';
import { CreatedByMeTableProp } from '@/Types/Tasks.type';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { removeTask } from '@/Redux/Reducers/TasksSlice';
import { Href } from '@/Constant';

const NewTaskTable: React.FC<CreatedByMeTableProp> = ({ componentRef }) => {
    const { newTask } = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();
    const deleteTask = (taskId: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ok",
            cancelButtonText: "cancel",
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                dispatch(removeTask(taskId));
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
                Swal.fire("Your imaginary file is safe!");
            }
        });
    };
    return (
        <div className="taskadd" ref={componentRef}>
            <div className="table-responsive custom-scrollbar theme-scrollbar">
                <Table>
                    <tbody>
                        {newTask && newTask.length ? (
                            newTask.map((taskdata, index) => (
                                <tr key={index}>
                                    <td>
                                        <h3 className='task_title_0' >{taskdata.title}</h3>
                                        <p className='project_name_0' >{taskdata.collection}</p>
                                    </td>
                                    <td><p className='task_desc_0'>{taskdata.description}</p></td>
                                    <td>
                                        <a className='me-2' href={Href}><Link /></a>
                                        <a href={Href}><MoreHorizontal /></a>
                                    </td>
                                    <td>
                                        <a href={Href} onClick={() => deleteTask(taskdata.id)}>
                                            <Trash2 />
                                        </a>
                                    </td>
                                </tr>
                            ))) : (
                            <tr>
                                <td>
                                    <div className='no-favourite'>
                                        <span>{'No Tasks Found'}</span>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default NewTaskTable;