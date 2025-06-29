import React from 'react'
import { CardHeader } from 'reactstrap'
import { Grid, List } from 'react-feather'
import { HeaderCardProp } from '@/Types/Bookmark.type';
import { useAppDispatch } from '@/Redux/Hooks';
import { setGridView } from '@/Redux/Reducers/BookmarkSlice';
import { Href } from '@/Constant';

const HeaderCard: React.FC<HeaderCardProp> = ({ title }) => {
    const dispatch = useAppDispatch();
    const gridBookmark = () => {
        dispatch(setGridView(true));
    };
    const listBookmark = () => {
        dispatch(setGridView(false));
    };
    return (
        <CardHeader className='d-flex pb-0'>
            <h3 className='mb-0'>{title}</h3>
            <ul>
                <li>
                    <a className='grid-bookmark-view' href={Href}>
                        <Grid onClick={gridBookmark} />
                    </a>
                </li>
                <li>
                    <a className='list-layout-view' href={Href}>
                        <List onClick={listBookmark} />
                    </a>
                </li>
            </ul>
        </CardHeader>
    )
}
export default HeaderCard;