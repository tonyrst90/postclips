import React from "react";
import { motion } from "framer-motion";
import { Play } from "react-feather";
import { useMobile } from "@/Hooks/useMobile";

type SlideShowProps = {
  images: { id: number; src: string; views: string }[];
};

export const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  const { mobile } = useMobile();
  const mapping = mobile ? {
    "-2": [-220, 0],
    "-1": [-140, -56],
    "0": [0, -56],
    "1": [140, -56],
    "2": [220, 0],
  } : {
    "-2": [-490, 0],
    "-1": [-290, -56],
    "0": [0, -56],
    "1": [290, -56],
    "2": [490, 0],
  } as any;

  const getOffset = (index: number) => {
    const mid = Math.floor(images.length / 2);
    return index - mid;
  };

  const getTransformStyle = (offset: number) => {
    const absOffset = Math.abs(offset);
    const scale = offset === 0 ? 1.2 : 1 - absOffset * 0.1;
    const zIndex = 10 - absOffset;
    const [translateX, translateY] = mapping[offset];
    const blur = absOffset > 2 ? "blur(4px)" : "none";
    const opacity = absOffset > 3 ? 0 : 1;

    return {
      transform: `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
      zIndex,
      filter: blur,
      opacity,
    };
  };

  return (
    <div
      className={`slide-show-container ${mobile ? "mobile" : "desktop"}`}
    >
      {images.map((image, i) => {
        const offset = getOffset(i);
        if (Math.abs(offset) > 2 || offset < -2) return null;

        return (
          <div
            key={`img-${image?.src}-${i}`}
            className={`slide-show-card ${offset === 0 ? "slide-show-shadow" : ""}`}
            style={{
              width: mobile ? "8rem" : "auto",
              height: mobile ? "auto" : "100%",
              ...getTransformStyle(offset),
            }}
          >
            {image?.views.length > 0 && (
              <p className="slide-show-views">
                <Play style={{ marginBottom: -3, marginRight: 4 }} />
                {image?.views}
              </p>
            )}
            <motion.img
              src={image?.src}
              alt={`Image ${i}`}
              className="slide-show-image"
            />
          </div>
        );
      })}
    </div>
  );
};
