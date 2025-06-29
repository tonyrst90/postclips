import React from 'react'
import { Col } from 'reactstrap'

const NoBookmarksFound = () => {
    return (
        <Col xl={12}>
            <div className="no-favourite">
                <span>{'No Bookmarks Found.'}</span>
            </div>
        </Col>
    )
}
export default NoBookmarksFound;