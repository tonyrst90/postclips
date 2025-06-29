"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useFeatureStore } from "./useFeatureStore";

type Props = {
    children: React.ReactNode;
    id: string;
};

export const FeatureTitle = ({ children, id }: Props) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const documentRef = useRef<Document | null>(null);

    // Set document ref after component mounts
    useEffect(() => {
        documentRef.current = document;
    }, []);

    const isInView = useInView(ref, {
        margin: "-60% 0px -60% 0px",
        // @ts-expect-error framer-motion works with document as root, but types don't reflect this
        root: documentRef,
    });
    const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
    const inViewFeature = useFeatureStore((state) => state.inViewFeature);

    useEffect(() => {
        if (isInView) setInViewFeature(id);
        if (!isInView && inViewFeature === id) setInViewFeature(null);
    }, [isInView, id, setInViewFeature, inViewFeature]);

    return (
        <p
            ref={ref}
            className={`feature-title ${isInView ? "opacity-100" : "opacity-0"}`}
        >
            {children}
        </p>
    );
};