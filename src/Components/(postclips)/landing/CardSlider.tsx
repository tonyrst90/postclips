import { ChevronLeft, ChevronRight } from "react-feather";
import { useEffect, useState } from "react";
import RotatingGlowButton from "@/Components/Buttons/Common/RotatingGlowButton";
import { useMobile } from "@/Hooks/useMobile";

export const ITEMS = [
  {
    text: "Design your Accounts",
    image: "card-5-step-1",
  },
  {
    text: "Customize your Clips",
    image: "card-5-step-2",
  },
  {
    text: "View analytics from thousands of accounts—all in one dashboard",
    image: "card-5-step-3",
  }
];

export const CardSlider = ({ items }: { items: typeof ITEMS }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { mobile } = useMobile();

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => () => setActiveIndex(index);

  return (
    <div
      className="card-item"
      style={{
        backgroundImage: `url("/assets/images/(postclips)/landing/network/card-5-bg.png")`,
      }}
    >
      <div className="card-item-heading">
        <h3>Getting Started</h3>

        <div className="card-item-indicator-container">
          {items.map((item, index) => (
            <button
              key={item.image}
              onClick={goTo(index)}
              className={
                "card-item-indicator " + (activeIndex === index ? "active" : "")
              }
            />
          ))}
        </div>

        <p>{items[activeIndex].text}</p>
      </div>

      <div className="card-item-images-container">
        <button onClick={prev} className="card-item-indicator-control prev">
          <ChevronLeft />
        </button>

        <div className="card-item-images">
          {items.map((item, index) => (
            <img
              key={item.image}
              alt={item.text}
              src={`/assets/images/(postclips)/landing/network/${item.image}${mobile ? "-mobile" : ""
                }.png?v=1`}
              className={activeIndex === index ? "active" : ""}
            />
          ))}
        </div>

        <button onClick={next} className="card-item-indicator-control next">
          <ChevronRight />
        </button>
      </div>

      <div className="card-item-button">
        <RotatingGlowButton>
          <a href="/login" className="btn-chipped">
            Go To Network Dashboard
          </a>
        </RotatingGlowButton>
      </div>
    </div>
  );
};
