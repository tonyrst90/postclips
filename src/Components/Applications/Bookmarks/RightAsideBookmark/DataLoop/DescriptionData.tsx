import { Href } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { removeBookmMark, removeMyBookMark, setEditModal, setEditRow } from '@/Redux/Reducers/BookmarkSlice';
import { BookmarkProps, DescriptionDataProps } from '@/Types/Bookmark.type';
import React from 'react'
import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather';
import SweetAlert from "sweetalert2";

const DescriptionData: React.FC<DescriptionDataProps> = ({ data }) => {
    const { editModal } = useAppSelector((state) => state.bookmark);

    const dispatch = useAppDispatch();
    const editToggle = () => {
        dispatch(setEditModal(!editModal));
    };
    const onClickHandle = (data: BookmarkProps) => {
        editToggle();
        dispatch(setEditRow(data));
    };
    const removeFromBookmark = (bookmarkId: number, fillstar: boolean) => {
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
                if (fillstar) dispatch(removeMyBookMark(bookmarkId));
                dispatch(removeBookmMark(bookmarkId));
                SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
                SweetAlert.fire("Your imaginary file is safe!");
            }
        });
    };
    return (
        <div className='desciption-data'>
            <div className='title-bookmark'>
                <h3>{data.title} </h3>
                <p> {data.website_url} </p>
                <div className='hover-block'>
                    <ul>
                        <li><a href={Href} onClick={() => onClickHandle(data)}><Edit2 /></a></li>
                        <li><a href={Href}><Link /></a></li>
                        <li><a href={Href}><Share2 /></a></li>
                        <li><a href={Href} onClick={() => removeFromBookmark(data.id, data.fillStar)}><Trash2 /></a></li>
                        <li className='pull-right text-end'><a href={Href}><Tag /></a></li>
                    </ul>
                </div>
                <div className='content-general'>
                    <p>{data.description} </p>
                    <span>{data.collection}</span>
                </div>
            </div>
        </div>
    )
}
export default DescriptionData;