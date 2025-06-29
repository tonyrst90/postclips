import { ReactNode } from "react";

export interface RootLayoutProps {
    children: ReactNode;
}
export interface MenuItem {
    title: string;
    lanClass?: string;
    menucontent?: string;
    Items?: MenuItem[];
    otherPaths?: string[];
    id?: number;
    icon?: string;
    type?: string;
    active?: boolean;
    children?: MenuItem[];
    path?: string;
    mainTitle?: string;
}

export interface MenuListType {
    menu: MenuItem[] | undefined;
    level: number;
    className?: string;
    setActiveMenu: Function;
    activeMenu: unknown[];
}

export interface SidebarItemTypes {
    item: {
        id?: number;
        title?: string | undefined;
        icon?: string;
        type?: string;
        active?: boolean;
        path?: string;
        children?: SidebarChildrenType[];
        lanClass?: string;
    };
}

export interface SidebarChildrenType {
    path?: string;
    title: string;
    type: string;
    lanClass?: string;
    children?: SubChildrenType[];
}

export interface SubChildrenType {
    title: string;
    type: string;
    path: string;
}

export interface SearchSuggestionItem {
    icon: string | undefined;
    title: string;
    path: string;
    bookmarked?: boolean;
    id?: number;
}

export interface SearchSuggestionListType {
    searchedArray: SearchSuggestionItem[];
    setSearchedWord: (key: string) => void;
}

export interface SearchSuggestionItem {
    icon: string | undefined;
    title: string;
    path: string;
    bookmarked?: boolean;
    id?: number;
}

export interface BookmarkedDataType {
    icon?: string;
    path?: string;
    title?: string;
    color?: string
    id?: number;
    bookmarked?: boolean;
}


export interface BookmarkSliceType {
    linkItemsArray: BookmarkedDataType[] | [];
    bookmarkedData: BookmarkedDataType[];
}

export interface LanguageDataType {
    languageParameter: string,
    languageName: string,
    languageIconClassName: string,
    subTitle?: string
}
export interface PropsLightColor {
    primary: string;
    secondary: string;
}