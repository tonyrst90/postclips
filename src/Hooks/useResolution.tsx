import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'desktop';

interface ResolutionState {
    deviceType: DeviceType;
    width: number;
    height: number;
    isMobile: boolean;
    isDesktop: boolean;
}

/**
 * Hook that detects whether the current device is desktop or mobile
 * based on screen width. Updates in real-time when window is resized.
 * 
 * @param mobileBreakpoint - The width threshold in pixels for mobile devices (default: 768)
 * @returns An object containing device information and boolean flags
 */
export function useResolution(mobileBreakpoint: number = 768): ResolutionState {
    // Get initial window dimensions
    const getWindowDimensions = (): { width: number; height: number } => {
        // SSR check - window might not be available during server-side rendering
        const width = typeof window !== 'undefined' ? window.innerWidth : 0;
        const height = typeof window !== 'undefined' ? window.innerHeight : 0;
        return { width, height };
    };

    // Determine device type based on width
    const getDeviceType = (width: number): DeviceType => {
        return width < mobileBreakpoint ? 'mobile' : 'desktop';
    };

    // Initialize state with window dimensions and device type
    const [dimensions, setDimensions] = useState(getWindowDimensions());
    const deviceType = getDeviceType(dimensions.width);

    useEffect(() => {
        // Function to update dimensions in state
        const handleResize = () => {
            setDimensions(getWindowDimensions());
        };

        // Add event listener
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);

            // Call once to set the initial dimensions
            handleResize();

            // Clean up event listener on component unmount
            return () => window.removeEventListener('resize', handleResize);
        }

        return undefined;
    }, []);

    return {
        deviceType,
        width: dimensions.width,
        height: dimensions.height,
        isMobile: deviceType === 'mobile',
        isDesktop: deviceType === 'desktop',
    };
}

export default useResolution;
