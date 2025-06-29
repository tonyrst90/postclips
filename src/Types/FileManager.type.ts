import { ChangeEvent } from "react";

export interface FileContentData {
    id: number;
    name: string;
    size: string;
    modify: string;
    icon: string;
    folderClass: string;
    title: string
    folderSize: string
    modifyFolder: string
}

export interface FileListPropsType {
    myFile: FileContentData[];
}

export interface FileManagerSliceType {
    myFile: FileContentData[]
    searchTerm: string;
    fileSidebar: boolean;
}

export interface FileContentButtonActionsProp {
    selectedFile: File | null;
    onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface FileMainContentPropsType {
    fileList: FileContentData[];
}