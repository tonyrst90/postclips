"use client";

import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { useClips, Clip } from "@/Hooks/useClips";
import { Button, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import ClipCard from "./ClipCard";
import ClipReviewModal from "./ClipReviewModal";
import { useClipReviewModal } from "./useClipReviewModal";

type TabType = "in_review" | "approved" | "rejected";

const Clips = () => {
    console.log("[Clips] Component rendering");
    const [activeTab, setActiveTab] = useState<TabType>("in_review");
    const { clips, loading, error, fetchClips } = useClips();
    const [currentClipIndex, setCurrentClipIndex] = useState<number>(0);
    const { selectedClip, isModalOpen, openModal, closeModal } = useClipReviewModal();
    const hasFetchedRef = useRef(false);

    const handleTabChange = useCallback((tab: TabType) => {
        console.log("[Clips] Tab change requested:", { from: activeTab, to: tab });
        if (activeTab !== tab) {
            setActiveTab(tab);
            setCurrentClipIndex(0);
            fetchClips({ status: tab });
        }
    }, [activeTab, fetchClips]);

    const handleReviewClick = useCallback((clip: Clip) => {
        console.log("[Clips] Review click:", { clipId: clip.id });
        const index = clips.findIndex(c => c.id === clip.id);
        setCurrentClipIndex(index);
        openModal(clip);
    }, [clips, openModal]);

    const handleTransitionComplete = useCallback(() => {
        console.log("[Clips] handleTransitionComplete", {
            currentIndex: currentClipIndex,
            activeTab,
            clipsCount: clips.length,
            pendingClipsCount: clips.filter(c => c.status === "in_review").length
        });
        
        // Refetch clips to ensure we have the latest data
        fetchClips({ status: activeTab });
        
        const pendingClips = clips.filter(clip => clip.status === "in_review");
        const nextIndex = currentClipIndex + 1;
        
        if (nextIndex < pendingClips.length) {
            console.log("[Clips] Moving to next clip", { nextIndex, pendingClipsCount: pendingClips.length });
            setCurrentClipIndex(nextIndex);
            openModal(pendingClips[nextIndex]);
        } else {
            console.log("[Clips] No more clips to review, closing modal");
            closeModal();
        }
    }, [clips, currentClipIndex, activeTab, openModal, closeModal, fetchClips]);

    const getNextClip = useCallback((): Clip | null => {
        const pendingClips = clips.filter(clip => clip.status === "in_review");
        const nextIndex = currentClipIndex + 1;
        const nextClip = nextIndex < pendingClips.length ? pendingClips[nextIndex] : null;
        console.log("[Clips] getNextClip", {
            currentIndex: currentClipIndex,
            nextIndex,
            hasNextClip: !!nextClip,
            pendingClipsCount: pendingClips.length
        });
        return nextClip;
    }, [clips, currentClipIndex]);

    // Memoize filtered clips to prevent unnecessary re-renders
    const filteredClips = useMemo(() => {
        const filtered = clips.filter(clip => clip.status === activeTab);
        console.log("[Clips] filteredClips updated", {
            activeTab,
            totalClips: clips.length,
            filteredCount: filtered.length,
            clipStatuses: clips.map(c => ({ id: c.id, status: c.status }))
        });
        return filtered;
    }, [clips, activeTab]);

    // Fetch clips only once when the component mounts or when the tab changes
    useEffect(() => {
        if (!hasFetchedRef.current) {
            console.log("[Clips] Initial fetch");
            hasFetchedRef.current = true;
            fetchClips({ status: activeTab });
        }
    }, [activeTab, fetchClips]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className="mb-4">Clips approval</h1>
                    <div className="mb-4">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === "in_review" })}
                                    onClick={() => handleTabChange("in_review")}
                                    style={{ cursor: "pointer" }}
                                >
                                    In review
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === "approved" })}
                                    onClick={() => handleTabChange("approved")}
                                    style={{ cursor: "pointer" }}
                                >
                                    Approved
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === "rejected" })}
                                    onClick={() => handleTabChange("rejected")}
                                    style={{ cursor: "pointer" }}
                                >
                                    Rejected
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="in_review">
                                {loading ? (
                                    <div className="text-center mt-4">Loading...</div>
                                ) : error ? (
                                    <div className="text-danger mt-4">{error}</div>
                                ) : filteredClips.length === 0 ? (
                                    <div className="text-center mt-4">No clips to review</div>
                                ) : (
                                    <div className="row mt-4">
                                        {filteredClips.map(clip => (
                                            <div key={clip.id} className="col-12 col-md-6 col-lg-4 mb-4">
                                                <ClipCard 
                                                    clip={clip} 
                                                    onReviewClick={handleReviewClick} 
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </TabPane>
                            <TabPane tabId="approved">
                                {loading ? (
                                    <div className="text-center mt-4">Loading...</div>
                                ) : error ? (
                                    <div className="text-danger mt-4">{error}</div>
                                ) : filteredClips.length === 0 ? (
                                    <div className="text-center mt-4">No approved clips</div>
                                ) : (
                                    <div className="row mt-4">
                                        {filteredClips.map(clip => (
                                            <div key={clip.id} className="col-12 col-md-6 col-lg-4 mb-4">
                                                <ClipCard 
                                                    clip={clip} 
                                                    onReviewClick={handleReviewClick} 
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </TabPane>
                            <TabPane tabId="rejected">
                                {loading ? (
                                    <div className="text-center mt-4">Loading...</div>
                                ) : error ? (
                                    <div className="text-danger mt-4">{error}</div>
                                ) : filteredClips.length === 0 ? (
                                    <div className="text-center mt-4">No rejected clips</div>
                                ) : (
                                    <div className="row mt-4">
                                        {filteredClips.map(clip => (
                                            <div key={clip.id} className="col-12 col-md-6 col-lg-4 mb-4">
                                                <ClipCard 
                                                    clip={clip} 
                                                    onReviewClick={handleReviewClick} 
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>

            {/* Clip Review Modal */}
            {selectedClip && (
                <ClipReviewModal
                    clip={selectedClip}
                    nextClip={getNextClip()}
                    isOpen={isModalOpen}
                    toggle={closeModal}
                    onTransitionComplete={handleTransitionComplete}
                />
            )}
        </div>
    );
};

export default Clips; 