import { SearchResultInitialState } from '@/Types/SearchResult.type'
import React from 'react'
import { Col, Row } from 'reactstrap'
import PaginationCard from '../Common/PaginationCard'
import { Href } from '@/Constant'

const VideoTab: React.FC<SearchResultInitialState> = ({ allResult }) => {

    return (
        <Row>
            <h5 className="f-w-700 mb-2">{'About 6,000 results (0.60 seconds)'}</h5>
            {allResult &&
                allResult.map((item) => (
                    <Col xxl={6} key={item.id}>
                        <div className="info-block d-flex gap-3">
                            <iframe width="200" height="100" src={item.videoLink}></iframe>
                            <div className="flex-grow-1">
                                <a href={Href}>{item.url}</a>
                                <h5>{item.title}</h5>
                                <div className="star-ratings">
                                    <ul className="search-info">
                                        <li>{item.star}</li>
                                        <li>{item.vote}</li>
                                        <li>{item.news}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))
            }
            <PaginationCard />
        </Row>
    )
}
export default VideoTab;