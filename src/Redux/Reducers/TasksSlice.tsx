import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TaskItems, TasksInitialStateProps } from '@/Types/Tasks.type';

export const fetchTasks = createAsyncThunk<TaskItems[], void, {}>("/api/tasksapi", async () => {
    const response = await axios.get("/api/tasksapi");
    return response.data;
});

const initialState: TasksInitialStateProps = { newTask: [], allTask: [] };

const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setAllTask: (state, action) => {
            state.allTask = action.payload;
        },
        addNewTask: (state, action) => {
            if (!Array.isArray(state.allTask)) {
                state.allTask = [];
            }
            const newId = Math.max(...state.allTask.map(task => task.id), 0) + 1;
            const taskTemp = {
                id: newId,
                title: action.payload.title,
                collection: action.payload.collection,
                description: action.payload.description,
            };
            state.allTask = [taskTemp, ...state.allTask];
        },
        removeTask: (state, action) => {
            state.allTask = state.allTask.filter((data: TaskItems) => data.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.allTask = action.payload;
        });
    },
});
export const { setAllTask, addNewTask, removeTask } = TaskSlice.actions;
export default TaskSlice.reducer;