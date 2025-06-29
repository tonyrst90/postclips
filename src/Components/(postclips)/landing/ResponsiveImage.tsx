'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type ResponsiveImageProps = {
    desktopSrc: string;
    mobileSrc: string;
    alt: string;
    mobileBreakpoint?: number;
    priority?: boolean;
    className?: string;
    containerClassName?: string;
    quality?: number;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    imageSelected?: () => void;
};

export default function ResponsiveImage({
    desktopSrc,
    mobileSrc,
    alt,
    mobileBreakpoint = 768,
    priority = false,
    className = '',
    containerClassName = '',
    quality = 75,
    objectFit = 'cover',
    imageSelected = () => { }
}: ResponsiveImageProps) {
    // Default to desktop image
    const [imageSrc, setImageSrc] = useState(desktopSrc);
    const [isMounted, setIsMounted] = useState(false);

    // Use client-side effect to determine the correct image based on screen width
    useEffect(() => {
        setIsMounted(true);

        // Function to set the appropriate image based on window width
        const handleResize = () => {
            setImageSrc(window.innerWidth < mobileBreakpoint ? mobileSrc : desktopSrc);
        };

        // Call the function immediately to set the initial image
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [desktopSrc, mobileSrc, mobileBreakpoint]);

    // If not yet mounted (client-side), return placeholder div to avoid hydration mismatch
    if (!isMounted) {
        return <div className={containerClassName}></div>;
    }

    return (
        <div className={`responsive-image-container ${containerClassName}`} onClick={() => {
            if (imageSelected) {
                imageSelected();
            }
        }}>
            {/* Use a regular img tag instead of Next.js Image to avoid unwanted styling */}
            <img
                src={imageSrc}
                alt={alt}
                className={`w-full h-auto ${className}`}
                style={{ objectFit }}
                loading={priority ? 'eager' : 'lazy'}
            />
        </div>
    );
}