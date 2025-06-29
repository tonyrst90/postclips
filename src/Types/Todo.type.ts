export interface TodoListType {
    id: number;
    title: string;
    status: string;
    badge: string;
    badgeclass: string;
    date: string;
}

export interface TodoInitialStateType {
    allTodos: TodoListType[];
}
