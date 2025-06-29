export interface SearchNavProps {
    activeTab: number;
    setActiveTab: (key: number) => void;
}

export interface TabDataItems {
    id: number;
    title: string;
    url: string;
    detail: string;
    star: string;
    vote: string;
    news: string;
    videoLink: string;
}

export interface SearchResultInitialState {
    allResult: TabDataItems[];
}

export interface SearchTabContentProp {
    activeTab: number;
}