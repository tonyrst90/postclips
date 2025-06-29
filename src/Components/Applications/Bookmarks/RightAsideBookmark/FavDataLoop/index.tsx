import React from 'react'
import { Card, Col, Row } from 'reactstrap';
import FavDescriptionData from './FavDescriptionData';
import NoBookmarksFound from '../Common/NoBookmarksFound';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { BookmarkProps } from '@/Types/Bookmark.type';
import { removeMyBookMark, updateBookMark, updateFavFillStar } from '@/Redux/Reducers/BookmarkSlice';
import Image from 'next/image';
import { Href, ImagePath } from '@/Constant';

const FavDataLoop = () => {
    const { myBookmarkData } = useAppSelector((state) => state.bookmark);
    const dispatch = useAppDispatch();
    const removeFavourite = (data: BookmarkProps) => {
        if (data.fillStar) {
            dispatch(updateFavFillStar(data.id));
            dispatch(removeMyBookMark(data.id));
            dispatch(updateBookMark({ id: data.id, data, image_url: data.image }));
        }
    };
    return (
        <Row>
            {myBookmarkData.length > 0 ? (
                myBookmarkData.map((mybookdata) => {
                    return (
                        <Col xxl={3} md={4} className='col-ed-4' key={mybookdata.id}>
                            <Card className='card-with-border bookmark-card o-hidden'>
                                <div className='details-website'>
                                    <Image className='img-fluid' src={`${ImagePath}/${mybookdata.image}`} width={266} height={177} alt='' />
                                    <div className={`favourite-icon favourite_0 ${mybookdata.fillStar ? 'favourite' : ''}`}>
                                        <a href={Href}>
                                            <i className='fa fa-star' onClick={() => removeFavourite(mybookdata)} />
                                        </a>
                                    </div>
                                    <FavDescriptionData data={mybookdata} />
                                </div>
                            </Card>
                        </Col>
                    );
                })
            ) : (
                <NoBookmarksFound />
            )}
        </Row>
    )
}
export default FavDataLoop;