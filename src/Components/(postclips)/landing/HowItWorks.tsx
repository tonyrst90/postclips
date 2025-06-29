import { useMobile } from "@/Hooks/useMobile";
import { useEffect, useRef, useState } from "react";

export interface Step {
    id: string;
    title: string;
    description?: string;
    highlight: string | string[];
    highlightColor1: string | string[];
    highlightColor2?: string | string[];
    videoSrc?: string;
}

export const HowItWorks = ({ steps }: { steps: Step[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { mobile } = useMobile();

    useEffect(() => {
        const stepEls = document.querySelectorAll("[data-step-index]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute("data-step-index"));
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: containerRef.current,
                threshold: 0.5,
            }
        );

        stepEls.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="howitworks_section">
            <div className="howitworks_scrollWrapper" ref={containerRef}>
                <div className="howitworks_videoColumn">
                    <h4 className="howitworks_title mobile-only">How it works</h4>

                    {(!mobile) && (
                        <VideoStack steps={steps} activeIndex={activeIndex} />
                    )}
                </div>

                <div className="howitworks_textColumn">
                    <div className="howitworks_textScroller hide-scroll">
                        <div className="howitworks_step desktop-only">
                            <div className="howitworks_title">How it works</div>
                        </div>

                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="howitworks_step"
                                data-step-index={index}
                            >
                                {(mobile) && (
                                    <VideoItem
                                        step={step}
                                        src={step.videoSrc}
                                        className="howitworks_video"
                                    />
                                )}

                                <h2>
                                    {highlightTitle(
                                        step.title,
                                        step.highlight,
                                        step.highlightColor1,
                                        step.highlightColor2
                                    )}
                                </h2>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export const VideoStack = ({ activeIndex, steps }: { steps: Step[], activeIndex: number }) => {
    return (
        <div className="howitworks_videoStack">
            <div className="phone-animation-glow small" />
            {steps.map((step, index) =>
                <VideoItem
                    key={step.id + index}
                    step={step}
                    src={step.videoSrc}
                    className={`howitworks_video ${index === activeIndex ? "visible" : ""}`}
                />
            )}
        </div>
    )
}

const VideoItem = ({ src, className, step }: { src?: string, className?: string, step: Step }) => {
    const gradient = step.highlightColor1 && step.highlightColor2
        ? [step.highlightColor1, step.highlightColor2]
        : [step.highlightColor1, step.highlightColor1]

    return (
        <div className={className}>
            <div className="phone-animation-glow small" style={{ backgroundColor: `linear-gradient(90deg, ${gradient.at(0)} 0%, ${gradient.at(1)} 100%)` }} />
            <video autoPlay muted loop playsInline>
                <source
                    src={src || "/assets/images/(postclips)/landing/how-it-works.mp4"}
                    type="video/mp4"
                />
            </video>
        </div>
    );
}

function highlightTitle(
    text: string,
    highlight: string | string[],
    color1: string | string[],
    color2?: string | string[]
): React.ReactNode {
    const highlights = Array.isArray(highlight) ? highlight : [highlight];
    const colors1 = Array.isArray(color1) ? color1 : highlights.map(() => color1);
    const colors2 = color2
        ? Array.isArray(color2)
            ? color2
            : highlights.map(() => color2)
        : undefined;

    const baseStyle = { marginRight: "0.25ch" };
    if (highlights.length === 0) return text;

    // Escape and build regex
    const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const regex = new RegExp(`(${escaped.join("|")})`, "gi");

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    text.replace(regex, (match, _, offset) => {
        if (lastIndex < offset) {
            parts.push(
                <span key={lastIndex} style={baseStyle}>
                    {text.slice(lastIndex, offset)}
                </span>
            );
        }

        // Identify original highlight index to get corresponding colors
        const matchLower = match.toLowerCase();
        const index = highlights.findIndex((h) => h.toLowerCase() === matchLower);
        const c1 = colors1[index] || "#000";
        const c2 = colors2?.[index];

        const key = `highlight-${offset}`;

        if (c2) {
            parts.push(
                <span
                    key={key}
                    style={{
                        position: "relative",
                        display: "inline-block",
                        fontWeight: 700,
                        ...baseStyle,
                    }}
                >
                    <span style={{ opacity: 0 }}>{match}</span>
                    <span
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            background: `linear-gradient(to right, ${c1}, ${c2})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {match}
                    </span>
                </span>
            );
        } else {
            parts.push(
                <span
                    key={key}
                    style={{ color: c1, fontWeight: 700, ...baseStyle }}
                >
                    {match}
                </span>
            );
        }

        lastIndex = offset + match.length;
        return match;
    });

    if (lastIndex < text.length) {
        parts.push(
            <span key={lastIndex} style={baseStyle}>
                {text.slice(lastIndex)}
            </span>
        );
    }

    return parts;
}
