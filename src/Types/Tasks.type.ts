import { Dispatch, SetStateAction } from "react";

export interface TaskLeftAsideProps {
    activeToggle: (tab: number) => void;
    activeTab: number;
}

export interface NewTaskFormProps {
    setAddModal: Dispatch<SetStateAction<boolean>>;
    toggle: () => void;
}

export interface TaskItems {
    id: number;
    title: string;
    collection: string;
    description: string;
}

export interface TasksInitialStateProps {
    newTask: TaskItems[];
    allTask: TaskItems[];
}

export interface TagModalProps {
    tagModal: boolean;
    tagToggle: () => void;
}

export interface TaskRightAsideProp {
    activeTab: number;
}

export interface EmptyTaskProp {
    title: string;
}

export interface CreatedByMeTableProp {
    componentRef: React.RefObject<HTMLDivElement> | any;
}