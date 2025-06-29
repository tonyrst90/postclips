import React from "react";
import Image from "next/image";
import "./CommentCard.scss";

interface CommentCardProps {
  avatarUrl: string;
  username: string;
  date: string;
  comment: string;
  likes: string;
  thumbnailUrl: string;
  clipUrl: string;
}

const CommentCard: React.FC<CommentCardProps> = ({  
  clipUrl,
  avatarUrl,
  username,
  date,
  comment,
  likes,
  thumbnailUrl,
}) => {
  return (
    <div className="comment-card" onClick={() => window.open(clipUrl, "_blank")}>
      {/* Header */}
      <div className="comment-card__header">
        <h2>Comments</h2>
        <button className="view-all">VIEW ALL</button>
      </div>

      {/* Comment Content */}
      <div className="comment-card__body">
        <Image
          src={avatarUrl}
          alt="avatar"
          width={28}
          height={28}
          className="avatar"
        />

        <div className="comment-card__text">
          <div className="meta">
            <span className="username">{username}</span>
            {/* <span className="dot">•</span> */}
            {/* <span className="date">{date}</span> */}
          </div>
          <p className="comment">{comment}</p>
        </div>

        <div className="comment-card__actions">
          <Image
            src="/assets/icons/analytics/heart.svg"
            alt="heart"
            width={16}
            height={16}
            className="heart-icon"
          />
          <span className="likes">{likes}</span>
        </div>

        <Image
          src={thumbnailUrl}
          alt="thumbnail"
          width={40}
          height={40}
          className="thumbnail"
        />
      </div>
    </div>
  );
};

export default CommentCard;
