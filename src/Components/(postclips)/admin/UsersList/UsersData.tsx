import { TableColumn } from "react-data-table-component";
import { Badge } from "reactstrap";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import UserConfigModal from './UserConfigModal';
import { useState } from 'react';

// Initialize the relativeTime plugin
dayjs.extend(relativeTime);

export interface ClipperUser {
    id: string;
    email: string;
    name: string;
    profile_picture: string;
    location: string;
    gender: string;
    age_range: string;
    total_clips: number;
    total_campaigns: number;
    total_social_posts: number;
    analytics: {
        views: number;
        likes: number;
        comments: number;
        shares: number;
        favorites: number;
    };
    created_at: string;
    updated_at: string;
}

export const useUserConfigModal = () => {
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (userId: string) => {
        setSelectedUserId(userId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUserId(null);
    };

    return {
        selectedUserId,
        isModalOpen,
        openModal,
        closeModal
    };
};

export const userColumns = (openModal: (userId: string) => void): TableColumn<ClipperUser>[] => [
    {
        name: 'User',
        selector: (row) => row.name,
        sortable: true,
        cell: (row) => (
            <div 
                className="user-info d-flex align-items-center gap-2 cursor-pointer"
                onClick={() => openModal(row.id)}
            >
                <div className="user-image" style={{ width: '50px', height: '50px', position: 'relative', flexShrink: 0 }}>
                    <Image 
                        src={row.profile_picture || `${ImagePath}/dashboard-3/user/3.png`}
                        alt={row.name}
                        className="rounded-circle"
                        width={50}
                        height={50}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="user-details">
                    <p className="mb-0 fw-bold text-white">{row.name || 'N/A'}</p>
                    <small className="text-white-50">{row.email}</small>
                </div>
            </div>
        ),
        width: '25%'
    },
    {
        name: 'Demographics',
        selector: (row) => row.location,
        sortable: true,
        cell: (row) => (
            <div className="demographics">
                <div className="d-flex flex-column gap-1">
                    <div className="d-flex gap-2">
                        <Badge color="light-info">
                            {row.gender || 'N/A'}
                        </Badge>
                        <Badge color="light-warning">
                            {row.age_range || 'N/A'}
                        </Badge>
                    </div>
                    <div>
                        <Badge color="light-primary">
                            {row.location || 'N/A'}
                        </Badge>
                    </div>
                </div>
            </div>
        ),
        width: '15%'
    },
    {
        name: 'Stats',
        sortable: true,
        cell: (row) => (
            <div className="stats">
                <div className="d-flex gap-2">
                    <Badge color="light-primary">
                        {row.total_clips} Clips
                    </Badge>
                    <Badge color="light-info">
                        {row.total_campaigns} Campaigns
                    </Badge>
                    <Badge color="light-success">
                        {row.total_social_posts} Posts
                    </Badge>
                </div>
            </div>
        ),
        width: '20%'
    },
    {
        name: 'Analytics',
        sortable: true,
        cell: (row) => (
            <div className="analytics">
                <div className="d-flex flex-column gap-1">
                    <div className="d-flex gap-2">
                        <Badge color="light-primary">
                            {row.analytics.views.toLocaleString()} Views
                        </Badge>
                        <Badge color="light-success">
                            {row.analytics.likes.toLocaleString()} Likes
                        </Badge>
                    </div>
                    <div className="d-flex gap-2">
                        <Badge color="light-info">
                            {row.analytics.comments.toLocaleString()} Comments
                        </Badge>
                        <Badge color="light-warning">
                            {row.analytics.shares.toLocaleString()} Shares
                        </Badge>
                    </div>
                </div>
            </div>
        ),
        width: '25%'
    },
    {
        name: 'Joined',
        selector: (row) => row.created_at,
        sortable: true,
        cell: (row) => {
            const date = row.created_at ? dayjs(row.created_at) : null;
            return (
                <div className="joined">
                    <p className="mb-0 text-white">
                        {date ? date.format('MMM D, YYYY') : 'N/A'}
                    </p>
                    <small className="text-white-50">
                        {date ? date.fromNow() : 'N/A'}
                    </small>
                </div>
            );
        },
        width: '15%'
    }
]; 