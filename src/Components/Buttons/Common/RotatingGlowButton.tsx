import React, { ButtonHTMLAttributes, useEffect, useRef } from "react";

export default function RotatingGlowButton({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const glowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let angle = 0;
    let frame: number;

    const animate = () => {
      angle = (angle + 1) % 360;
      if (glowRef.current) {
        glowRef.current.style.setProperty("--angle", `${angle}deg`);
      }
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span className={"glow-wrapper " + (className || "")}>
      <span className="glow" ref={glowRef} />
      {typeof children === "string" ? (
        <button className="btn-chipped" {...props}>
          {children}
        </button>
      ) : (
        children
      )}
    </span>
  );
}
