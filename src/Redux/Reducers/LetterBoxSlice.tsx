import { inboxEmailData } from "@/Data/Applications/Email";
import { LetterBoxStateProp } from "@/Types/Email.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: LetterBoxStateProp = {
    navId: "inboxPillTab",
    modal: false,
    composeEmail: false,
    faIcon: false,
    interviewEmail: false,
    page: false,
    inboxEmail: [...inboxEmailData],
    emailValidation: false,
};

const LetterBoxSlice = createSlice({
    name: "LetterBox",
    initialState,
    reducers: {
        setNavId: (state, action) => {
            state.navId = action.payload
        },
        setModal: (state, action) => {
            state.modal = action.payload
        },
        setComposeEmail: (state, action) => {
            state.composeEmail = action.payload
        },
        handleEnvelope: (state, action) => {
            state.faIcon = action.payload
        },
        handleInterview: (state, action) => {
            state.interviewEmail = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        removeItems: (state, action) => {
            state.inboxEmail = state.inboxEmail?.filter((data) => data.id !== action.payload);
        },
        addToFavorites: (state, action) => {
            if (action.payload.star === false) {
                state.inboxEmail = state.inboxEmail.map((item) => (item.id === action.payload.id) ? { ...item, star: true } : item)
                state.inboxEmail = state.inboxEmail
            } else {
                state.inboxEmail = state.inboxEmail.map((item) => (item.id === action.payload.id) ? { ...item, star: false } : item)
                state.inboxEmail = state.inboxEmail
            }
        },
        removeFromFavorite: (state, action) => {
            state.inboxEmail = state.inboxEmail.map((data) => (data.id === action.payload.id ? { ...data, star: false } : data));
            state.inboxEmail = state.inboxEmail;
        },
        setEmailValidation: (state, action) => {
            state.emailValidation = action.payload
        },
        addNewEmail: (state, action) => {
            const emailTemp = {
                id: state.inboxEmail.length + 1,
                star: false,
                image: "14.png",
                color: "primary",
                name: action.payload.userEmail,
                message: action.payload.subject,
                subMessage: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
                time: "7:50 AM"
            };
            state.inboxEmail = [...state.inboxEmail, emailTemp];
        },
    }
})

export const { setNavId, setModal, setComposeEmail, handleEnvelope, handleInterview, setPage, removeItems, addToFavorites, removeFromFavorite, setEmailValidation, addNewEmail } = LetterBoxSlice.actions

export default LetterBoxSlice.reducer