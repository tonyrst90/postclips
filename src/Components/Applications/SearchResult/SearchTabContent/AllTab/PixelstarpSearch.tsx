import { Href } from '@/Constant'
import { SearchResultInitialState } from '@/Types/SearchResult.type'
import React from 'react'
import { Col } from 'reactstrap'

const PixelstarpSearch: React.FC<SearchResultInitialState> = ({ allResult }) => {
    return (
        <Col xxl={8} xl={6} className="box-col-7">
            <h5 className="f-w-700 mb-2">{'Search result for "Pixelstrap"'}</h5>
            {allResult &&
                allResult.slice(0, 4).map((item) => (
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
export default PixelstarpSearch;