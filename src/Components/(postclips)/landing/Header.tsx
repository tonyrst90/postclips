import { useEffect, useState } from "react";
import RotatingGlowButton from "@/Components/Buttons/Common/RotatingGlowButton";
import Image from "next/image";
import clsx from "clsx";

export const Header = ({ button = "GET THE APP" }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={clsx("landing-header", scrolled && "landing-header--scrolled")}>
      <div className="logo-container">
        <Image
          src="/assets/images/(postclips)/logos/logo.svg"
          alt="PostClips Logo"
          width={120}
          height={32}
          priority
        />
      </div>
      <div className="header-btn-wrapper">
        <RotatingGlowButton>
          <a
            href="https://apps.apple.com/mx/app/post-clips/id6742848231?l=en-GB"
            target="_blank"
            className="btn-chipped"
          >
            {button}
          </a>
        </RotatingGlowButton>
      </div>
    </header>
  );
};
