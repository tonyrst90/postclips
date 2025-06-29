"use client";

import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Clip } from "@/Hooks/useClips";
import Image from "next/image";
import feather from "feather-icons";

interface ClipCardProps {
    clip: Clip;
    onReviewClick: (clip: Clip) => void;
}

const ClipCard = ({ clip, onReviewClick }: ClipCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        feather.replace();
    }, []);

    const handleClick = () => {
        if (clip.status === "in_review") {
            onReviewClick(clip);
        }
    };

    const handleSocialPostClick = (e: React.MouseEvent, url: string) => {
        e.stopPropagation();
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <Card className="h-100 shadow-sm" onClick={handleClick} style={{ cursor: clip.status === "in_review" ? "pointer" : "default" }}>
            <div className="position-relative" style={{ paddingTop: "177.77%" }}>
                {isPlaying ? (
                    <video
                        src={clip.clip_url}
                        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                        autoPlay
                        controls
                        onEnded={() => setIsPlaying(false)}
                    />
                ) : (
                    <>
                        <Image
                            src={clip.thumbnail_url}
                            alt={`Clip from ${clip.user_profile?.name || 'User'}`}
                            fill
                            className="object-fit-cover rounded-top"
                        />
                        {clip.status !== "in_review" && (
                            <button
                                className="position-absolute top-50 start-50 translate-middle rounded-circle d-flex align-items-center justify-content-center p-0"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsPlaying(true);
                                }}
                                style={{ width: "60px", height: "60px", background: "rgba(0,0,0,0.5)", border: "none" }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{ width: "100%", height: "100%", marginLeft: "4px" }}
                                    dangerouslySetInnerHTML={{
                                        __html: feather.icons.play.toSvg({ width: 24, height: 24, color: "white" }),
                                    }}
                                />
                            </button>
                        )}
                    </>
                )}
                {/* Overlay for campaign title and ends-in at the bottom */}
                <div
                    className="position-absolute start-0 end-0 bottom-0 px-3 py-3"
                    style={{
                        background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
                        color: "#fff",
                        zIndex: 2,
                        minHeight: 64,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}
                >
                    <div style={{ fontWeight: 700, fontSize: 18, lineHeight: 1.2, fontFamily: 'Sora, sans-serif', marginBottom: 2 }}>
                        {clip.campaign?.title || 'Untitled Campaign'}
                    </div>
                    <div style={{ fontSize: 14, color: '#e0e0e0', fontFamily: 'Sora, sans-serif' }}>
                        {clip.campaign && 'end_date' in clip.campaign && clip.campaign.end_date ? (
                            (() => {
                                const endDate = new Date(clip.campaign.end_date as string);
                                const now = new Date();
                                endDate.setUTCHours(0, 0, 0, 0);
                                now.setUTCHours(0, 0, 0, 0);
                                const daysRemaining = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
                                return daysRemaining > 0 ? `Ends in ${daysRemaining} days` : 'Ended';
                            })()
                        ) : (
                            'No end date'
                        )}
                    </div>
                </div>
            </div>
            <CardBody>
                <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle overflow-hidden me-2" style={{ width: "40px", height: "40px" }}>
                        <Image
                            src={clip.user_profile?.profile_picture || '/default-profile.png'}
                            alt={clip.user_profile?.name || 'User'}
                            width={40}
                            height={40}
                            className="object-fit-cover"
                        />
                    </div>
                    <div>
                        <div className="fw-bold">{clip.user_profile?.name || 'User'}</div>
                        <small className="text-muted">
                            Posted {new Date(clip.created_at).toLocaleDateString()}
                        </small>
                    </div>
                </div>
                {clip.social_posts && clip.social_posts.length > 0 && (
                    <div className="mb-3">
                        <small className="text-muted d-block mb-1">Posted on:</small>
                        <div className="d-flex flex-wrap gap-1">
                            {clip.social_posts.map((post, index) => (
                                <button
                                    key={index}
                                    className="p-0 me-2 border-0 bg-transparent"
                                    onClick={(e) => handleSocialPostClick(e, post.post_url || '')}
                                    disabled={!post.post_url}
                                >
                                    <small className="text-primary">
                                        {post.platform === 'instagram' ? '📸 Instagram' : 
                                         post.platform === 'tiktok' ? '🎵 TikTok' : 
                                         post.platform === 'facebook' ? '👍 Facebook' : post.platform}
                                    </small>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {clip.status === "approved" && (
                    <div className="text-success">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: feather.icons.check.toSvg({ width: 16, height: 16, color: "currentColor" }),
                            }}
                            className="me-2"
                        />
                        Approved
                    </div>
                )}
                {clip.status === "rejected" && (
                    <div className="text-danger">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: feather.icons.x.toSvg({ width: 16, height: 16, color: "currentColor" }),
                            }}
                            className="me-2"
                        />
                        Rejected
                    </div>
                )}
                {clip.status === "in_review" && (
                    <div className="text-warning">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: feather.icons.clock.toSvg({ width: 16, height: 16, color: "currentColor" }),
                            }}
                            className="me-2"
                        />
                        In Review
                    </div>
                )}
            </CardBody>
        </Card>
    );
};

export default ClipCard; 