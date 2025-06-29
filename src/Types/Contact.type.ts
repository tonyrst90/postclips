export interface UserProps {
    id: number;
    avatar: string;
    name: string;
    surname: string;
    email: string;
    age: number;
    mobile: string;
}

export interface ContactStateProps {
    users: UserProps[];
    data: UserProps[];
    tempId: number;
    editRow: Partial<UserProps>;
}

export interface LeftContactAsideProps {
    activeTab: number;
    setActiveTab: (tab: number) => void;
    changeTab: (tab: number) => void;
}

export interface AddContactFormProps {
    setModal: (value: boolean) => void;
    toggle: () => void;
}

export interface ContactFormProps {
    name: string;
    surname: string;
    email: string;
    mobile: string;
};

export interface RightContactAsideProp {
    activeTab: number;
}

export interface EmptyDataProp {
    title?: string;
}

export interface PersonalTabProp {
    historyToggle: () => void;
}

export interface NewContactListProps {
    users: UserProps[];
    userCallback: (user: UserCallbackUserType) => void;
}

export interface UpdateUserFormProps {
    editData: Partial<UserProps>;
    userEditCallback: (edit: boolean, usersData: UserUpdateType) => void;
}

export interface ContactDetailsProps {
    selectedUser: UserCallbackUserType;
    userEditCallback: (edit: boolean, usersData: UserUpdateType) => void;
    historyToggle: () => void;
}

export interface EditDeleteLinkProps {
    selectedUser: UserCallbackUserType;
    userEditCallback: (edit: boolean, usersData: UserUpdateType) => void;
}

export interface PrintModalProps {
    printModal: boolean;
    selectedUser: UserCallbackUserType;
    toggleCallback: (toggle: boolean) => void;
}

export interface UserCallbackUserType {
    id?: number | undefined;
    name?: string;
    surname?: string;
    age?: number;
    mobile?: string;
    avatar?: string;
    email?: string;
}

export interface UserUpdateType {
    name?: string;
    surname?: string;
    email?: string;
    mobile?: string;
}

export interface HistoryCardProps {
    historyToggle: () => void;
    showHistory: boolean;
}

export interface NavOrganizationProps {
    orgActiveTab: number;
    setOrgActiveTab: (value: number) => void;
}

interface OrganizationTabPaneItems {
    id: number;
    image: string;
    name: string;
    email: string;
    gender: string;
}

export interface OrganizationTabPaneProps {
    user: OrganizationTabPaneItems;
}
