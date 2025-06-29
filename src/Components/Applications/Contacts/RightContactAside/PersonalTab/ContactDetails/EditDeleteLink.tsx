import { Href } from '@/Constant';
import { useAppDispatch } from '@/Redux/Hooks';
import { deletedUser, setTempId } from '@/Redux/Reducers/ContactSlice';
import { EditDeleteLinkProps, UserCallbackUserType, UserProps } from '@/Types/Contact.type';
import React from 'react'
import SweetAlert from "sweetalert2";

const EditDeleteLink: React.FC<EditDeleteLinkProps> = ({ selectedUser, userEditCallback }) => {
    const dispatch = useAppDispatch();
    const editUsers = (usersData: UserCallbackUserType) => {
        if (usersData.id !== undefined) {
            dispatch(setTempId(usersData.id));
            userEditCallback(true, usersData as UserProps);
        }
    };
    const onDeleteUser = (userId: number | undefined) => {
        if (userId !== undefined) {
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
                    dispatch(deletedUser(userId));
                    SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
                } else {
                    SweetAlert.fire("Your imaginary file is safe!");
                }
            });
        } else { console.error("User ID is undefined"); }
    };
    return (
        <>
            <li><a href={Href} onClick={() => editUsers(selectedUser)}>{'Edit'}</a></li>
            <li><a href={Href} onClick={() => onDeleteUser(selectedUser.id)}>{'Delete'}</a></li>
        </>
    )
}
export default EditDeleteLink;