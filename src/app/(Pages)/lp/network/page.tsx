"use client";
import { CardSlider, ITEMS } from "@/Components/(postclips)/landing/CardSlider";
import { HowItWorks, Step } from "@/Components/(postclips)/landing/HowItWorks";
import RotatingGlowButton from "@/Components/Buttons/Common/RotatingGlowButton";
import { StartRightNow } from "@/Components/(postclips)/landing/StartRightNow";
import PhoneAnimation from "@/Components/(postclips)/landing/PhoneAnimation";
import { MainSlider } from "@/Components/(postclips)/landing/MainSlider";
import { useMobile } from "@/Hooks/useMobile";
import { Header } from "@/Components/(postclips)/landing/Header";
import Footer from "@/Components/(postclips)/landing/Footer";
import Image from "next/image";
import FAQs from "@/Components/(postclips)/landing/FAQs";

export default function NetworkLP() {
  const { mobile } = useMobile();

  return (
    <div className="network-lp">
      <Header button="LOGIN" />

      <section className="section-hero">
        <h1 className="hero-title">
          Stop Spending,<br />
          <span className="text-gradient">Start Posting</span>
        </h1>
        <p className="hero-subtitle">
          Traditional Media is about to takeover Social Media
        </p>

        <PhoneAnimation
          source="/assets/video/lp-network.mp4"
          threshold={mobile ? 0 : 220}
          transforms={mobile ? [
            "perspective(1200px) translateY(0px) scale(1.8) rotateX(25deg)",
            "perspective(1200px) translateY(-20px) scale(1.3) rotateX(0deg)"
          ] : [
            "perspective(1200px) translateY(20vw) scale(1.8) rotateX(25deg)",
            "perspective(1200px) translateY(0px) scale(0.75) rotateX(0deg)"
          ]}
        />

        <RotatingGlowButton>
          <a href="/login" className="btn-chipped">
            Go To Network Dashboard
          </a>
        </RotatingGlowButton>
      </section>

      <section className="section-earnings">
        <MainSlider
          title={`You just discovered the <span class="text-gradient">CHEAT CODE</span> for getting customers <span class="text-gradient">ATTENTION</span>`}
          labels={["Campaign Views"]}
          earnings={2150209000}
          clips={26450}
        />
      </section>

      <HowItWorks steps={HOW_IT_WORK_STEPS} />

      <StartRightNow
        link="/login"
        subtitle="Turn Every Scroll Into Your Ad Space"
        button="GO to Network Dashboard"
      />

      <div className="card-image-list">
        {Array.from({ length: 4 }).map((_, index) =>
          <Image
            key={index + (mobile ? "-mobile" : "")}
            src={`/assets/images/(postclips)/landing/network/card-${index + 1}${mobile ? "-mobile" : ""}.png?v=1`}
            alt={"Image card " + (index + 1)}
            className="image-card"
            width={1800}
            height={800}
          />
        )}

        <CardSlider items={ITEMS} />
      </div>

      <FAQs type="network" />

      <Footer showDownloadApp={false} />
    </div>
  );
}

const HOW_IT_WORK_STEPS: Step[] = [
  {
    id: "step-1",
    title: "DESIGN the Accounts",
    description: "Choose the username, bio, link in bio, and profile pictures for every account",
    highlight: "DESIGN",
    highlightColor1: "#00E7FF",
    videoSrc: "/assets/video/design.mp4"
  },
  {
    id: "step-2",
    title: "CUSTOMIZE your clips",
    description: "Control every detail— Pick the caption, add your logo, show name, and outro for every post",
    highlight: "CUSTOMIZE",
    highlightColor1: "#75A4FF",
    videoSrc: "/assets/video/customize.mp4"
  },
  {
    id: "step-3",
    title: "APPROVE or REJECT Every Clip Submitted",
    description: "Total control—nothing goes live without your sign-off",
    highlight: ["APPROVE", "REJECT"],
    highlightColor1: ["#00E7FF", "#e93b2e"],
    highlightColor2: ["#75A4FF", "#601616"],
    videoSrc: "/assets/video/review.mp4"
  },
  {
    id: "step-4",
    title: "GET UP to Billions of Views",
    description: "Let our clippers push content across thousands of accounts",
    highlight: "Billions of Views",
    highlightColor1: "#00E7FF",
    videoSrc: "/assets/video/views.mp4"
  },
  {
    id: "step-5",
    title: "Get Analytics for Unlimited Accounts All in 1 Place",
    description: "You can have thousands of accounts, all on different platforms, all controlled here",
    highlight: "Unlimited Accounts",
    highlightColor1: "#00E7FF",
    videoSrc: "/assets/video/analytics.mp4"
  },
];