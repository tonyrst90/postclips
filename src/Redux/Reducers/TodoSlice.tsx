import { TodoInitialStateType, TodoListType } from "@/Types/Todo.type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk<TodoListType[], void, {}>("/api/todoapi", async () => {
    const response = await axios.get("/api/todoapi");
    return response.data;
});

const initialState: TodoInitialStateType = { allTodos: [] };

const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setAllTodo: (state, action) => {
            state.allTodos = action.payload;
        },
        removeItems: (state, action) => {
            state.allTodos = state.allTodos.filter((data: TodoListType) => data.id !== action.payload);
        },
        selectItem: (state, action: PayloadAction<{ id: number, status: string, badgeclass: string }>) => {
            state.allTodos = state.allTodos.map((item: TodoListType) => {
                if (item.id === action.payload.id) {
                    if (action.payload.status === "pending") {
                        return {
                            ...item,
                            status: action.payload.status,
                            badgeclass: action.payload.badgeclass,
                            badge: "Pending",
                        };
                    } else if (action.payload.status === "completed") {
                        return {
                            ...item,
                            status: action.payload.status,
                            badgeclass: action.payload.badgeclass,
                            badge: "Done",
                        };
                    }
                }
                return item;
            });
        },
        addNewTodo: (state, action) => {
            const newTodo: TodoListType = {
                id: state.allTodos.length + 1,
                title: action.payload,
                status: "pending",
                badge: "Pending",
                badgeclass: 'danger',
                date: '10 dec'
            };
            state.allTodos = [...state.allTodos, newTodo];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.allTodos = action.payload;
        });
    },
});

export const { setAllTodo, removeItems, selectItem, addNewTodo } = TodoSlice.actions;
export default TodoSlice.reducer;