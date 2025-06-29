import React, { useState } from "react";
import { Counters } from "./Counters";
import { SlideShow } from "./SlideShow";
import Image from "next/image";

const images = [
    { id: 1, src: "/assets/images/(postclips)/landing/carousel-1.png", views: "4.4M" },
    { id: 2, src: "/assets/images/(postclips)/landing/carousel-2.png", views: "7.2M" },
    { id: 3, src: "/assets/images/(postclips)/landing/carousel-3.png", views: "14.5M" },
    { id: 4, src: "/assets/images/(postclips)/landing/carousel-4.png", views: "7.2M" },
    { id: 5, src: "/assets/images/(postclips)/landing/carousel-5.png", views: "10.8M" },
    { id: 6, src: "/assets/images/(postclips)/landing/carousel-6.png", views: "5.9M" },
    { id: 7, src: "/assets/images/(postclips)/landing/carousel-7.png", views: "2.6M" },
];

export const MainSlider = ({ title, ...props }: { title?: any, labels?: string[], earnings?: number, clips?: number }) => {
    const [step, setStep] = useState(0);

    return (
        <div className="slider_container">
            <h2
                className="earnings-title"
                dangerouslySetInnerHTML={{ __html: title || "We pay you for every<br />1,000 views you generate" }}
            />
            <Counters step={step} {...props} />
            {/* Glowline and Fadelogos */}
            <div className="glowline-row">
                <Image src="/assets/images/(postclips)/landing/glowline.svg" alt="Glowline" width={1400} height={4} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="fadelogos-row">
                <Image src="/assets/images/(postclips)/landing/fadelogos.svg" alt="Faded Logos" width={1400} height={256} style={{ width: '100%', height: 'auto' }} />
            </div>
            <SlideShow images={images} />
        </div>
    );
};
