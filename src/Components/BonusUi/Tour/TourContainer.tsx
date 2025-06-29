"use client";
import TourMain from "./TourMain";
import { tourSteps } from "@/Data/BonusUi/Tour";
import { TourGuideClient } from "@sjmc11/tourguidejs";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const TourContainer = () => {
  const tourRef = useRef<any | null>(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(() => {
    try {
      tourRef.current = new TourGuideClient({ steps: tourSteps });
    } catch (error) {
      toast.error("Error initializing TourGuideClient:" + error);
    }

    return () => tourRef.current?.destroy?.();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsTourOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isTourOpen) tourRef.current?.start?.();
  }, [isTourOpen]);

  return (
    <>
      <TourMain />
    </>
  );
};

export default TourContainer;
