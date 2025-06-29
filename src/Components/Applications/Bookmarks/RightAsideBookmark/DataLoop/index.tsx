import { Href, ImagePath } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { fillStarFalse, removeMyBookMark, updateFillStar } from '@/Redux/Reducers/BookmarkSlice';
import { BookmarkProps } from '@/Types/Bookmark.type';
import Image from 'next/image';
import React from 'react'
import { Card, Col, Row } from 'reactstrap';
import DescriptionData from './DescriptionData';
import NoBookmarksFound from '../Common/NoBookmarksFound';

const DataLoop = () => {
    const { bookmark } = useAppSelector((state) => state.bookmark);
    const dispatch = useAppDispatch();
    const addToFavourites = (data: BookmarkProps) => {
        if (data.fillStar === false) {
            dispatch(updateFillStar(data));
        } else {
            dispatch(fillStarFalse(data.id));
            dispatch(removeMyBookMark(data.id));
        }
    };
    return (
        <Row id='bookmarkData'>
            {bookmark.length > 0 ? (
                bookmark.map((data) => (
                    <Col xxl={3} md={4} className='col-ed-4' key={data.id}>
                        <Card className='card-with-border bookmark-card o-hidden'>
                            <div className='details-website'>
                                <Image className='img-fluid' src={`${ImagePath}/${data.image}`} width={266} height={177} alt='' />
                                <div className={`favourite-icon favourite_0 ${data.fillStar ? 'favourite' : ''}`} onClick={() => addToFavourites(data)}>
                                    <a href={Href}><i className='fa fa-star' /></a>
                                </div>
                                <DescriptionData data={data} />
                            </div>
                        </Card>
                    </Col>
                )
                )
            ) : (
                <NoBookmarksFound />
            )}
        </Row>
    )
}
export default DataLoop;