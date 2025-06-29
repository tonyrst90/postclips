import React from "react";
import Image from "next/image";
import RotatingGlowButton from "@/Components/Buttons/Common/RotatingGlowButton";

export const StartRightNow = ({ subtitle, link, button }: { subtitle?: string, link?: string, button?: string }) => {
  return (
    <div className="start-right-now-section">
      <Image src="/assets/images/gif/rocket.gif" alt="Start right now" width={50} height={50} />
      <h2 className="start-right-now-title">Start right now</h2>
      <p className="start-right-now-subtitle">{subtitle || "Become a Clipper Today"}</p>
      <div className="header-btn-wrapper">
        <RotatingGlowButton>
          <a className="btn-chipped" href={link || "https://apps.apple.com/mx/app/post-clips/id6742848231?l=en-GB"}>
            {button || "GET THE APP"}
          </a>
        </RotatingGlowButton>
      </div>
    </div>
  );
};
