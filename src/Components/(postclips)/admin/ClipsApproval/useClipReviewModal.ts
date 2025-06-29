import { useState } from 'react';
import { Clip } from '@/Hooks/useClips';

export const useClipReviewModal = () => {
    const [selectedClip, setSelectedClip] = useState<Clip | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (clip: Clip) => {
        setSelectedClip(clip);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedClip(null);
        setIsModalOpen(false);
    };

    return {
        selectedClip,
        isModalOpen,
        openModal,
        closeModal
    };
}; 