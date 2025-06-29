import React from 'react'
import { Col } from 'reactstrap'
import BlogShadow from './BlogShadow'
import { SearchResultInitialState } from '@/Types/SearchResult.type'
import { Href } from '@/Constant'

const BlogBox: React.FC<SearchResultInitialState> = ({ allResult }) => {
    return (
        <Col xxl={4} xl={6} className="box-col-5 mt-4">
            <BlogShadow />
            {allResult &&
                allResult.slice(0, 2).map((item) => (
                    <div className='info-block' key={item.id}>
                        <a href={Href}>{item.url}</a>
                        <h5>{item.title}</h5>
                        <p>{item.detail}</p>
                        <div className='star-ratings'>
                            <ul className='search-info'>
                                <li>
                                    <i className='icofont icofont-ui-rating'></i>
                                    <i className='icofont icofont-ui-rating'></i>
                                    <i className='icofont icofont-ui-rating'></i>
                                    <i className='icofont icofont-ui-rate-blank'></i>
                                    <i className='icofont icofont-ui-rate-blank'></i>
                                </li>
                                <li>{item.star}</li>
                                <li>{item.vote}</li>
                                <li>{item.news}</li>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </Col>
    )
}
export default BlogBox;