import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: "filter",
    initialState: {
        gridClass: "",
        columnClass: "col-xl-3 col-lg-6 col-sm-6 xl-4 box-col-4",
        sidebarOpen: false,
    },
    reducers: {
        toggleRowGrid: (state) => {
            state.gridClass = "list-view";
        },
        toggleColumnGrid: (state) => {
            state.gridClass = "";
            state.columnClass = "col-xl-3 col-lg-6 col-sm-6 xl-4 box-col-4";
        },
        changeColumnClass: (state, action) => {
            state.columnClass = action.payload;
        },
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
    },
});

export default FilterSlice.reducer;
export const { toggleSidebar, toggleRowGrid, toggleColumnGrid, changeColumnClass } = FilterSlice.actions;
