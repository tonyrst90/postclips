import { ContactStateProps, UserProps } from "@/Types/Contact.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContactApiData = createAsyncThunk<UserProps[], void, {}>("/api/contactapi", async () => {
  const response = await axios.get("/api/contactapi");
  return response.data;
});

const initialState: ContactStateProps = {
  users: [],
  data: [],
  tempId: 0,
  editRow: {},

};

const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setEditData(state, action) {
      state.users = state.users.map((item) =>
        item.id === state.tempId ? action.payload : item
      );
    },
    setTempId(state, action) {
      state.tempId = action.payload;
    },
    createUser(state, action) {
      const userTemp: UserProps = {
        id: state.users.length + 1,
        avatar: action.payload.defaultUser,
        name: action.payload.data?.name,
        surname: action.payload.data.surname,
        email: action.payload.data.email,
        age: action.payload.data?.age,
        mobile: action.payload.data.mobile,
      };
      state.users = [...state.users, userTemp];
    },
    editUser(state, action) {
      const userTemp: UserProps = {
        id: state.users.length + 1,
        avatar: action.payload.imgUrl,
        name: action.payload.data.name,
        surname: action.payload.data.surname,
        email: action.payload.data.email,
        age: action.payload.data.age,
        mobile: action.payload.data.mobile,
      };
      state.data = [...state.data, userTemp];
    },
    deletedUser(state, action) {
      state.users = state.users.filter((data) => data.id !== action.payload);
    },
    setEditRow: (state, action) => {
      state.editRow = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContactApiData.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { setUsers, setEditData, setTempId, createUser, editUser, deletedUser, setEditRow } = ContactSlice.actions;

export default ContactSlice.reducer;