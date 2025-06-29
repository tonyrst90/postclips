import React, { useState, useEffect, useRef } from 'react';

const PhoneAnimation = ({ source, threshold = 50, transforms = [] }: { threshold?: number, transforms?: string[], source?: string }) => {
    // Just two states: initial (false) or final (true)
    const [showFinalState, setShowFinalState] = useState(false);

    // Track scroll position for threshold detection
    const scrollYRef = useRef(0);

    // Threshold in pixels - how much scroll before triggering the final state
    const SCROLL_THRESHOLD = threshold;

    useEffect(() => {
        // Function to check if we should show initial or final state
        const updateAnimationState = () => {
            const currentScrollY = window.scrollY;

            // Track the scroll position
            scrollYRef.current = currentScrollY;

            // Check if we're at the very top (initial state) or scrolled down (final state)
            const section = document.getElementsByClassName("network-lp")[0] || document.getElementById('animation-section');
            if (!section) return;

            const rect = section.getBoundingClientRect();

            // If the section is in view and we've scrolled past the threshold,
            // show the final state, otherwise show the initial state
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // If we've scrolled down more than the threshold, show final state
                if (rect.top < -SCROLL_THRESHOLD) {
                    setShowFinalState(true);
                } else {
                    // We're at or near the top, show initial state
                    setShowFinalState(false);
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', updateAnimationState, { passive: true });

        // Check initial state
        updateAnimationState();

        // Clean up
        return () => {
            window.removeEventListener('scroll', updateAnimationState);
        };
    }, []);

    // Define the transform styles for each state
    const getTransform = () => {
        // Initial state (at the top)
        if (!showFinalState) {
            return {
                transform: transforms?.at(0) || 'perspective(1200px) translateY(63px) scale(1.4) rotateX(25deg)'
            };
        }

        // Final state (when scrolled down)
        return {
            transform: transforms?.at(1) || 'perspective(1200px) translateY(250px) scale(0.9) rotateX(0deg)'
        };
    };

    const style = {
        ...getTransform(),
        transition: 'transform 0.3s ease-out'
    }

    return (
        <div className="phone-animation-container" id="animation-section">
            <div style={style}>
                <div className="phone-animation-wrapper">
                    <div className="phone-animation-glow" />
                    <div className="phone-animation-device">
                        <video autoPlay muted loop playsInline className="phone-animation-video">
                            <source
                                src={source || "/assets/images/(postclips)/landing/phone1.mp4"}
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneAnimation;