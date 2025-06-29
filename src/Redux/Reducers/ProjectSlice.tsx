import { createSlice } from "@reduxjs/toolkit";
import { ProjectType } from "@/Types/Project.type";
import { projectListData } from "@/Data/Applications/Project/ProjectList";

const initialState: ProjectType = {
  activeTab: "1",
  createdFormData: projectListData,
};

const ProjectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setCreatedData: (state, action) => {
      state.createdFormData = action.payload;
    },
  },
});
export const { setActiveTab, setCreatedData } = ProjectSlice.actions;

export default ProjectSlice.reducer;