import React from "react";
import Image from "next/image";
import "./AccountCard.scss";

interface AccountCardProps {
  avatarUrl: string;
  username: string;
  views: string;
  platformIcon: string; // path to platform icon (e.g. TikTok, YouTube, Instagram)
  accountUrl: string;
}

const AccountCard: React.FC<AccountCardProps> = ({
  accountUrl,
  avatarUrl,
  username,
  views,
  platformIcon,
}) => {
  return (
    <div className="account-card" onClick={() => window.open(accountUrl, "_blank")}>
      <div className="avatar-wrapper">
        <Image
          src={avatarUrl}
          alt="account avatar"
          width={48}
          height={48}
          className="avatar"
        />
        <Image
          src={platformIcon}
          alt="platform"
          width={16}
          height={16}
          className="platform-icon"
        />
      </div>
      <p className="username">{username}</p>
      <p className="views">{views} Views</p>
    </div>
  );
};

export default AccountCard;
