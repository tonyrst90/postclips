import React, { useState, useRef, useEffect } from 'react';
import { Modal } from 'reactstrap';
import { Clip, useClips } from '@/Hooks/useClips';
import Image from 'next/image';
import feather from 'feather-icons';

interface ClipReviewModalProps {
    clip: Clip;
    nextClip: Clip | null;
    isOpen: boolean;
    toggle: () => void;
    onTransitionComplete: () => void;
}

const ClipReviewModal = ({ clip, nextClip, isOpen, toggle, onTransitionComplete }: ClipReviewModalProps) => {
    // const { approveClip, rejectClip, approving, rejecting } = useClips();
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionType, setTransitionType] = useState<'up' | 'down' | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleApprove = async () => {
        console.log("[ClipReviewModal] handleApprove called", {
            clipId: clip.id,
            campaignId: clip.campaign_id,
            currentStatus: clip.status
        });
        
        if (isTransitioning) {
            console.log("[ClipReviewModal] Already transitioning, ignoring approve");
            return;
        }
        
        // const success = await approveClip(clip.id, clip.campaign_id);
        // console.log("[ClipReviewModal] approveClip result", { success });

        // if (success) {
        //     setTransitionType('up');
        //     setIsTransitioning(true);
            
        //     if (!nextClip) {
        //         console.log("[ClipReviewModal] No next clip, closing modal");
        //         setTimeout(() => {
        //             toggle();
        //         }, 500);
        //     } else {
        //         console.log("[ClipReviewModal] Moving to next clip", { nextClipId: nextClip.id });
        //         setTimeout(() => {
        //             setIsTransitioning(false);
        //             setTransitionType(null);
        //             onTransitionComplete();
        //         }, 500);
        //     }
        // } else {
        //     console.log("[ClipReviewModal] Approval failed, no transition");
        // }
    };

    const handleReject = async () => {
        console.log("[ClipReviewModal] handleReject called", {
            clipId: clip.id,
            currentStatus: clip.status
        });
        
        if (isTransitioning) {
            console.log("[ClipReviewModal] Already transitioning, ignoring reject");
            return;
        }

        // const success = await rejectClip(clip.id);
        // console.log("[ClipReviewModal] rejectClip result", { success });

        // if (success) {
        //     setTransitionType('down');
        //     setIsTransitioning(true);

        //     if (!nextClip) {
        //         console.log("[ClipReviewModal] No next clip, closing modal");
        //         setTimeout(() => {
        //             toggle();
        //         }, 500);
        //     } else {
        //         console.log("[ClipReviewModal] Moving to next clip", { nextClipId: nextClip.id });
        //         setTimeout(() => {
        //             setIsTransitioning(false);
        //             setTransitionType(null);
        //             onTransitionComplete();
        //         }, 500);
        //     }
        // } else {
        //     console.log("[ClipReviewModal] Rejection failed, no transition");
        // }
    };

    const togglePlaybackSpeed = () => {
        if (videoRef.current) {
            const newSpeed = playbackSpeed === 1 ? 2 : 1;
            videoRef.current.playbackRate = newSpeed;
            setPlaybackSpeed(newSpeed);
        }
    };

    // Reset state when clip changes
    useEffect(() => {
        setIsPlaying(false);
        setPlaybackSpeed(1);
        setIsTransitioning(false);
        setTransitionType(null);
    }, [clip]);

    const getTransformStyle = () => {
        if (!isTransitioning) return '';
        const translateY = transitionType === 'up' ? '-100%' : '100%';
        const scale = 0.8;
        return `translate3d(0, ${translateY}, 0) scale(${scale})`;
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="xl" className="clip-review-modal">
            <div className="bg-dark p-4" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <div className="row">
                    {/* Left side - Video */}
                    <div className="col-8">
                        <div className="position-relative d-flex justify-content-center" style={{ overflow: 'hidden' }}>
                            <div 
                                ref={containerRef}
                                className="position-relative"
                                style={{
                                    maxWidth: '400px',
                                    width: '100%',
                                    transform: getTransformStyle(),
                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                    opacity: isTransitioning ? 0.5 : 1,
                                }}
                            >
                                {isPlaying ? (
                                    <>
                                        <div className="position-relative" style={{ aspectRatio: '9/16' }}>
                                            <video
                                                ref={videoRef}
                                                src={clip.clip_url}
                                                className="w-100 h-100 object-fit-cover rounded"
                                                autoPlay
                                                controls
                                                onEnded={() => setIsPlaying(false)}
                                            />
                                            <button
                                                className="position-absolute top-0 end-0 m-3 btn btn-dark bg-opacity-75 d-flex align-items-center gap-1"
                                                onClick={togglePlaybackSpeed}
                                                style={{ zIndex: 1 }}
                                            >
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: feather.icons['fast-forward'].toSvg({ width: 16, height: 16, color: "white" })
                                                    }}
                                                />
                                                {playbackSpeed}x
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="position-relative" style={{ aspectRatio: '9/16' }}>
                                            <Image
                                                src={clip.thumbnail_url}
                                                alt={`Clip from ${clip.user_profile.name}`}
                                                fill
                                                className="object-fit-cover rounded"
                                            />
                                            <button
                                                className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle border-0 d-flex align-items-center justify-content-center"
                                                onClick={() => setIsPlaying(true)}
                                                style={{ width: "60px", height: "60px" }}
                                            >
                                                <div
                                                    className="d-flex align-items-center justify-content-center"
                                                    style={{ width: "100%", height: "100%", marginLeft: "4px" }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: feather.icons.play.toSvg({ width: 24, height: 24, color: "white" })
                                                    }}
                                                />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Info & Actions */}
                    <div className="col-4">
                        <div style={{ height: '600px' }} className="d-flex flex-column">
                            <h2 className="text-white">{clip.campaign.title}</h2>
                            
                            <div className="mt-auto pb-3">
                                <div className="d-flex flex-column gap-3">
                                    {/* <button
                                        className="btn btn-primary d-flex align-items-center justify-content-center gap-2 py-3 w-100"
                                        onClick={handleApprove}
                                        disabled={approving || rejecting || isTransitioning}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: feather.icons.check.toSvg({ width: 20, height: 20 })
                                            }}
                                        />
                                        APPROVE
                                    </button>
                                    <button
                                        className="btn btn-danger d-flex align-items-center justify-content-center gap-2 py-3 w-100"
                                        onClick={handleReject}
                                        disabled={rejecting || approving || isTransitioning}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: feather.icons.x.toSvg({ width: 20, height: 20 })
                                            }}
                                        />
                                        REJECT
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ClipReviewModal; 