"use client";
import { useState, useEffect } from 'react';

export const useMobile = () => {
  const initialValue = checkDevice();
  const [view, setView] = useState(initialValue);

  function handleWindowSizeChange() {
    setTimeout(() => {
      setView(checkDevice());
    }, 10);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);;
  }, []);

  function checkDevice() {
    if (typeof window === 'undefined') return { mobile: true, tablet: false, portrait: false, landscape: false };
    const width = window.innerWidth;
    const height = window.innerHeight;

    const mobile = width < 768;
    const tablet = width >= 768 && width < 1024;
    const portrait = width <= height;
    const landscape = width > height;

    return { mobile, tablet, portrait, landscape };
  }

  return view;
};
