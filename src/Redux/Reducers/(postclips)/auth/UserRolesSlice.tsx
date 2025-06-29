import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserRoles = createAsyncThunk(
  "userRoles/fetchUserRoles",
  async (userId: string) => {
    console.log("Fetching roles 4");
    const response = await fetch(`/api/auth/roles/${userId}`);
    const data = await response.json();
    return data.roles;
  }
);

type UserRolesState = {
  roles: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: UserRolesState = {
  roles: [],
  status: "idle",
  error: null,
};

const userRolesSlice = createSlice({
  name: "userRoles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRoles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserRoles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.roles = action.payload;
      })
      .addCase(fetchUserRoles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default userRolesSlice.reducer;
