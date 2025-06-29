export type ProjectListData = {
    id?: number | string;
    title: string;
    badge: string;
    image: string;
    sites: string;
    description: string;
    issue: string;
    resolved: string;
    comment: string;
    like: string;
    progress: number;
    customers_image1: string;
    customers_image2: string;
    customers_image3: string;
    rate?: string
    progress_level?: string
    issues?: string
    color: string
};

export interface ProjectType {
    activeTab: string;
    createdFormData: ProjectListData[]
}

export interface ProjectCommonType {
    item: ProjectListData;
}

export interface ProjectInitialValue {
    title: string;
    client: string;
    progress: number;
    type: string;
    priority: string;
    size: string;
    description: string;
}