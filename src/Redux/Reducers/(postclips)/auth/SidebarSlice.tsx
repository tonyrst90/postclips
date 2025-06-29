import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostClipsMenuListAdmin, PostClipsMenuListBrand, PostClipsMenuListClipper } from "@/Data/Layout/PostClipsMenu";
import { MenuItem } from "@/Types/Layout.type";

type SidebarState = {
  currentPage: string;
  menuList: MenuItem[] | null;
  loading: boolean;
  selectedRole: string | null;
  isInitialized: boolean;
};

const initialState: SidebarState = {
  currentPage: "",
  menuList: null,
  loading: false,
  selectedRole: null,
  isInitialized: false
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
    initializeSidebar(state) {
      if (!state.isInitialized) {
        state.loading = true;
        state.isInitialized = true;
      }
    },
    setSelectedRole(state, action: PayloadAction<string>) {
      const role = action.payload;
      state.selectedRole = role;
      
      // Update menu list based on role in a single state update
      switch (role) {
        case "ADMIN":
          state.menuList = PostClipsMenuListAdmin as MenuItem[];
          break;
        case "BRAND":
          state.menuList = PostClipsMenuListBrand as MenuItem[];
          break;
        case "CLIPPER":
          state.menuList = PostClipsMenuListClipper as MenuItem[];
          break;
        default:
          state.menuList = null;
      }
      state.loading = false;
    },
    resetSidebar(state) {
      state.currentPage = "";
      state.menuList = null;
      state.loading = false;
      state.selectedRole = null;
      state.isInitialized = false;
    }
  },
});

export const { setCurrentPage, setSelectedRole, resetSidebar, initializeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
