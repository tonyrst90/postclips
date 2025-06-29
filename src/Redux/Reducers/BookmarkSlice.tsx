import { bookmarkData } from "@/Data/Applications/Bookmarks";
import { BookmarkState } from "@/Types/Bookmark.type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BookmarkState = {
    bookmark: bookmarkData,
    activeTabs: "1",
    gridView: true,
    myBookmarkData: [],
    editRow: {},
    editModal: false,
    editImgurl: "",
    bookMarkClass: false,
    isOpen: false,
};

export const BookmarkSlice = createSlice({
    name: "bookmark",
    initialState,
    reducers: {
        setIsClose: (state, action) => {
            state.isOpen = action.payload;
        },
        setBookMarkClass: (state, action) => {
            state.bookMarkClass = action.payload;
        },
        updateFillStar: (state, action) => {
            state.bookmark = state.bookmark.map((data) =>
                data.id === action.payload.id ? { ...data, fillStar: true } : { ...data }
            );
            state.myBookmarkData.push({ ...action.payload, fillStar: true });
        },
        fillStarFalse: (state, action) => {
            state.bookmark = state.bookmark.map((data) =>
                data.id === action.payload ? { ...data, fillStar: false } : { ...data }
            );
        },
        updateFavFillStar: (state, action) => {
            state.myBookmarkData = state.myBookmarkData.map((data) =>
                data.id === action.payload ? { ...data, fillStar: false } : { ...data }
            );
        },
        addData: (state, action) => {
            state.bookmark = action.payload;
        },
        addNewBookmark: (state, action) => {
            const bookmarkTemp = {
                id: state.bookmark.length + 1,
                fillStar: false,
                image: action.payload.img_url,
                title: action.payload.data.title,
                website_url: action.payload.data.website_url,
                description: action.payload.data.description,
                collection: action.payload.data.collection,
            };
            state.bookmark = [bookmarkTemp, ...state.bookmark];
        },
        updateActiveTabs: (state, action) => {
            state.activeTabs = action.payload;
        },
        setGridView: (state, action) => {
            state.gridView = action.payload;
        },
        removeBookmMark: (state, action) => {
            state.bookmark = state.bookmark.filter((data) => data.id !== action.payload);
        },
        removeMyBookMark: (state, action) => {
            state.myBookmarkData = state.myBookmarkData.filter((data) => data.id !== action.payload);
        },
        setEditImgUrl: (state, action) => {
            state.editImgurl = action.payload;
        },
        setEditRow: (state, action) => {
            state.editRow = action.payload;
        },
        setEditModal: (state, action) => {
            state.editModal = action.payload;
        },
        updateBookMark: (state, action) => {
            const bookmarkTemp = {
                id: action.payload.id,
                fillStar: action.payload.data.fillStar,
                image: action.payload.image_url,
                title: action.payload.data.title,
                website_url: action.payload.data.url,
                description: action.payload.data.description,
                collection: action.payload.data.collection,
            };
            state.bookmark = state.bookmark.map((item) =>
                item.id === action.payload.id ? bookmarkTemp : item
            );
        },
    },
});

export const {
    setIsClose,
    setBookMarkClass,
    updateFillStar,
    fillStarFalse,
    updateFavFillStar,
    addData,
    addNewBookmark,
    updateActiveTabs,
    setGridView,
    removeBookmMark,
    removeMyBookMark,
    setEditImgUrl,
    setEditRow,
    setEditModal,
    updateBookMark,
} = BookmarkSlice.actions;

export default BookmarkSlice.reducer;