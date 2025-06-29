import React from "react";
import Image from "next/image";
import "./ClipCard.scss";

interface ClipCardProps {
  clipUrl: string;
  thumbnailUrl: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
}

const ClipCard: React.FC<ClipCardProps> = ({
  clipUrl,
  thumbnailUrl,
  title,
  views,
  likes,
  comments,
}) => {
  return (
    <div className="clip-card" onClick={() => window.open(clipUrl, "_blank")}>
      <Image
        src={thumbnailUrl}
        alt={title}
        width={48}
        height={48}
        className="clip-card__thumbnail"
      />
      <div className="clip-card__content">
        <h4 className="clip-card__title">{title}</h4>
        <div className="clip-card__stats">
          <span>
            <Image
              src="/assets/icons/analytics/eye-open.svg"
              alt="views"
              width={16}
              height={16}
            />
            {views}
          </span>
          <span>
            <Image
              src="/assets/icons/analytics/heart.svg"
              alt="likes"
              width={16}
              height={16}
            />
            {likes}
          </span>
          <span>
            <Image
              src="/assets/icons/analytics/comment.svg"
              alt="comments"
              width={16}
              height={16}
            />
            {comments}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClipCard;
