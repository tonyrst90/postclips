"use client";
import { type Step, HowItWorks } from '@/Components/(postclips)/landing/HowItWorks';
import { StartRightNow } from '@/Components/(postclips)/landing/StartRightNow';
import ResponsiveImage from '@/Components/(postclips)/landing/ResponsiveImage';
import PhoneAnimation from '@/Components/(postclips)/landing/PhoneAnimation';
import { MainSlider } from '@/Components/(postclips)/landing/MainSlider';
import { AppStore } from "@/Components/(postclips)/landing/AppStore";
import { Header } from "@/Components/(postclips)/landing/Header";
import Footer from '@/Components/(postclips)/landing/Footer';
import FAQs from '@/Components/(postclips)/landing/FAQs';

export default function ClipperLP() {
  return (
    <div className="landing-hero-section">
      <Header />

      <div className="landing-hero-main">
        {/* TEXT BLOCK (Title, Subtitle, Buttons) */}
        <PhoneAnimation />
        <div className="hero-text-block">
          <h1 className="hero-title">Get Paid to<br />Post Clips</h1>

          {/* This appears below the phone on mobile */}
          <div className="hero-subcontent">
            <p className="hero-subtitle">
              <span className="subtitle-top">Earn up to</span>
              <span className="subtitle-bottom">
                <span className="hero-highlight">$10,000+ </span>Per Month
              </span>
            </p>
            <AppStore />
          </div>
        </div>
      </div>


      {/* Earnings and Clips Section */}
      <section className="section-earnings">
        <MainSlider
          title={`You just discovered the <span class="text-gradient">CHEAT CODE</span> for getting customers attention`}
          labels={["Total Earnings"]}
          earnings={1200}
          clips={280}
        />
      </section>

      <HowItWorks steps={HOW_IT_WORK_STEPS} />

      <StartRightNow />

      <div className="images-section">
        <ResponsiveImage
          containerClassName="mb-5"
          desktopSrc="/assets/images/(postclips)/landing/section1.png"
          mobileSrc="/assets/images/(postclips)/landing/section1-mobile.png"
          alt=""
        />
        <ResponsiveImage
          containerClassName="mb-5"
          desktopSrc="/assets/images/(postclips)/landing/section2.png"
          mobileSrc="/assets/images/(postclips)/landing/section2-mobile.png"
          alt=""
        />
        <ResponsiveImage
          containerClassName="mb-5"
          desktopSrc="/assets/images/(postclips)/landing/section3.png"
          mobileSrc="/assets/images/(postclips)/landing/section3-mobile.png"
          alt=""
        />
        <ResponsiveImage
          containerClassName="mb-5 cursor-pointer"
          desktopSrc="/assets/images/(postclips)/landing/section4.png"
          mobileSrc="/assets/images/(postclips)/landing/section4-mobile.png"
          alt=""
          imageSelected={() => {
            window.open("https://apps.apple.com/mx/app/post-clips/id6742848231?l=en-GB", "_blank");
          }}
        />
      </div>
      <FAQs type="clipper" />
      <Footer />
    </div>
  );
}

const HOW_IT_WORK_STEPS: Step[] = [
  {
    id: "step-1",
    title: "Watch YOUR Favorite Networks",
    description:
      "Browse top content from major networks—Just pick your show or movie & watch right inside our app",
    highlight: "YOUR",
    highlightColor1: "#00E7FF"
  },
  {
    id: "step-2",
    title: "Clip YOUR Favorite Moments",
    description:
      "Select the scenes that will go viral—anything interesting, intense, or meme-worthy",
    highlight: "YOUR",
    highlightColor1: "#75A4FF"
  },
  {
    id: "step-3",
    title: "Post YOUR Clips",
    description:
      "Instantly Post to TikTok, Instagram, Facebook, X (Twitter), and YouTube Shorts all from one place",
    highlight: "YOUR",
    highlightColor1: "#00E7FF",
    highlightColor2: "#003FDD"
  },
  {
    id: "step-4",
    title: "YOU Get Paid!",
    description:
      "Get paid for every 1,000 views you get—the more views, the more you earn!",
    highlight: "YOU",
    highlightColor1: "#00E7FF",
    highlightColor2: "#003FDD"
  },
];