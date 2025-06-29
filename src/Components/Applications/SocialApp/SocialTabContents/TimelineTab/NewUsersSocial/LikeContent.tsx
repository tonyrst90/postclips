import React from 'react'

const LikeContent = () => {
    return (
        <div className="like-content">
            <span>
                <i className="fa fa-heart font-danger" />
            </span>
            <span className="pull-right comment-number">
                <span>{"20 "}</span>
                <span>
                    <i className="fa fa-share-alt me-0" />
                </span>
            </span>
            <span className="pull-right comment-number">
                <span>{"10 "}</span>
                <span>
                    <i className="fa fa-comments-o" />
                </span>
            </span>
        </div>
    )
}
export default LikeContent