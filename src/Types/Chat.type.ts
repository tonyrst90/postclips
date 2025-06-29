export interface AllMemberType {
    id: number;
    name: string;
    image: string;
    status: string;
    online: string;
    lastSeenDate: string;
    time: string;
    reply: string;
    badge?: boolean;
}

export interface MessageTypes {
    name?: string;
    sender: number;
    class?: string;
    time: string;
    text: string;
    status?: boolean;
}

export interface ChatsTypes {
    id?: number;
    users: number[];
    lastMessageTime: string;
    messages: MessageTypes[];
    time?: string;
}

export interface ChatSliceType {
    allMembers: AllMemberType[] | [];
    chats: ChatsTypes[] | [];
    members: AllMemberType[] | [];
    currentUser: null | AllMemberType,
    selectedUser?: null | AllMemberType
}

export interface DropClassTypes {
    dropClass?: string
}

export interface data {
    users: {

    }
}

export interface SearchNotFoundClassType {
    word: string;
}