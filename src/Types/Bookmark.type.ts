export interface BookmarkProps {
    id: number;
    fillStar: boolean;
    image: string;
    title: string;
    website_url: string;
    description: string;
    collection: string;
}

export interface BookmarkState {
    bookmark: BookmarkProps[];
    activeTabs: string;
    gridView: boolean;
    myBookmarkData: BookmarkProps[];
    editRow: any;
    editModal: boolean;
    editImgurl: string;
    bookMarkClass: boolean;
    isOpen: boolean;
}

export interface StateType {
    addModal: boolean;
    tagModal: boolean;
}

export interface TagModalProps {
    showModal: boolean;
    modalToggle: () => void;
}

export interface NewBookmarkModalProps {
    showModal: boolean;
    modalToggle: () => void;
    addCallback: (toggle: boolean) => void;
}

export interface NewBookmarkModalFormType {
    modalToggle: () => void;
    addCallback: (toggle: boolean) => void;
}

export interface FormData {
    url: string;
    title: string;
    description: string;
    collection: string;
}

export interface HeaderCardProp {
    title: string;
}

export interface DescriptionDataProps {
    data: BookmarkProps;
}

export interface EditFormProps {
    editToggle: () => void;
}