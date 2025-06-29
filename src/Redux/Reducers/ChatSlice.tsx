import { AllMemberType, ChatSliceType, ChatsTypes } from "@/Types/Chat.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState:ChatSliceType = {
    allMembers : [],
    members: [],
    chats: [],  
    currentUser: null,
    selectedUser : null
};

export const fetchChatMemberApiData = createAsyncThunk<AllMemberType[], void, {}>("/api/chatmemberapi", async () => {
  const response = await axios.get("/api/chatmemberapi");
  return response.data;
});

export const fetchChatApiData = createAsyncThunk<ChatsTypes[], void, {}>("/api/chat", async () => {
  const response = await axios.get("/api/chatapi");
  return response.data;
});

const ChatSlice = createSlice({
  name: "Chat",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setAllMembers: (state, action) => {
      state.allMembers = action.payload;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    fetchChatMemberAsync: (state) => {
      if (state.allMembers.length > 0) {
        state.currentUser = state.allMembers[0];
        state.members = state.allMembers;
      }
    },
    fetchChatAsync: (state) => {
      if (state.chats.length > 0) {
        const currentUserId = 0;
        var chat = state.chats.filter((x: ChatsTypes) => x.users.includes(currentUserId));
        var selectedUser = state.chats[0].users.find((x: ChatsTypes | number) => x !== currentUserId);

        if (state.allMembers.length > 0) {
          state.chats = chat;
          state.selectedUser = state.allMembers.find((x: { id: number; }) => x.id === selectedUser);
        }
      }
    },
    getChatsSuccess: (state, action) => {
      if (state.allMembers.length > 0) {
        state.chats = action.payload.chats;
      }
    },
    changeChat: (state, action) => {
      let newUser = state.allMembers.find((x: { id: number; }) => x.id === action.payload);
      state.selectedUser = newUser;
    },
    createNewChatAsync: (state, action) => {
      let conversation = {
        id: action.payload.chats.length + 1,
        users: [action.payload.currentUserId, action.payload.selectUser],
        lastMessageTime: "-",
        messages: [],
      };
      state.chats.splice(0, 0, conversation);
      if (state.allMembers.length > 0) {
        let selectUsers = state.allMembers.find((x: { id: number; }) => x.id === action.payload.selectedUserId);
        state.selectedUser = selectUsers;
      }
    },
    searchMember: (state, action) => {
      if (action.payload === "") {
        state.members = state.allMembers
      }
       else {
        const keyword = action.payload.toLowerCase();
        const searchedMembers = state.allMembers.filter((member: AllMemberType) => member.name.toLowerCase().indexOf(keyword) > -1);
        state.members = searchedMembers;
      }
    },
    sendMessageAsync: (state, action) => {
      let chat = state.chats.find((x: ChatsTypes) => x.users.includes(action.payload.currentUserId) && x.users.includes(action.payload.selectedUserId));
      const now = new Date();
      const time = now.getHours() + ":" + now.getMinutes();
      if (chat) {
        chat.messages.push({
          sender: action.payload.currentUserId,
          time: time,
          text: action.payload.messageInput,
          status: true,
        });
        chat.time = time;
        let chats_data = state.chats.filter((x: { id?: number; }) => x.id !== chat?.id);
        chats_data.splice(0, 0, chat);
        if (state.allMembers.length > 0) {
          let selectedUser = state.allMembers.find((x: { id: number; }) => x.id === action.payload.selectedUserId);
          state.selectedUser = selectedUser;
        }
      }
    },
    replyByUserAsync: (state, action) => {
      let chat = state.chats.find((x: ChatsTypes) => x.users.includes(action.payload.currentUserId) && x.users.includes(action.payload.selectedUserId));
      const now = new Date();
      const time = now.getHours() + ":" + now.getMinutes();
      if (chat) {
        chat.messages.push({
          sender: action.payload.selectedUserId,
          time: time,
          text: action.payload.replyMessage,
          status: true,
        });
        chat.lastMessageTime = time;
        let chats_data = state.chats.filter((x: { id?: number; }) => x.id !== chat?.id);
        chats_data.splice(0, 0, chat);
      }
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChatMemberApiData.fulfilled, (state, action) => {
      state.allMembers = action.payload;
      state.members = action.payload;
    });
    builder.addCase(fetchChatApiData.fulfilled, (state, action) => {
      state.chats = action.payload;
    });
  },
});

export const { setAllMembers, setChats, setSelectedUser, fetchChatMemberAsync, getChatsSuccess, changeChat, createNewChatAsync, fetchChatAsync, sendMessageAsync, replyByUserAsync ,searchMember } = ChatSlice.actions;

export default ChatSlice.reducer;