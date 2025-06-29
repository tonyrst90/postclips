export interface SocialHeaderType {
    activeTab: number;
    setActiveTab: (key: number) => void;
}

export interface SocialTabContentsType {
    activeTab: number;
}

export interface CommonCardProps {
    title: string;
    children: React.ReactNode;
    cardClass?: string;
};

export interface FollowDataType {
    heading: string;
}

export interface AboutDetailTypes {
    id: number;
    title: string;
    child: AboutDetailChild[];
}

interface AboutDetailChild {
    id: number;
    details: AboutDetailDetails[];
}

interface AboutDetailDetails {
    id: number;
    text: string;
    year?: string;
    paragraph: string;
}
