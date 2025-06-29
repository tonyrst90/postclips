import { configureStore } from "@reduxjs/toolkit";
import BookmarkSlice from "./Reducers/BookmarkSlice";
import ChatSlice from "./Reducers/ChatSlice";
import ContactSlice from "./Reducers/ContactSlice";
import FilterReducer from "./Reducers/ECommerce/FilterReducer";
import ProductReducer from "./Reducers/ECommerce/ProductReducer";
import FileManagerSlice from "./Reducers/FileManagerSlice";
import HeaderBookmarkSlice from "./Reducers/Layout/HeaderBookmarkSlice";
import LayoutSlice from "./Reducers/Layout/LayoutSlice";
import LetterBoxSlice from "./Reducers/LetterBoxSlice";
import ProjectSlice from "./Reducers/ProjectSlice";
import SearchResultSlice from "./Reducers/SearchResultSlice";
import TasksSlice from "./Reducers/TasksSlice";
import ThemeCustomizerSlice from "./Reducers/ThemeCustomizerSlice";
import TodoSlice from "./Reducers/TodoSlice";

// Postclips
import HeaderSlice from "./Reducers/(postclips)/auth/HeaderSlice";
import SidebarSlice from "./Reducers/(postclips)/auth/SidebarSlice";

const reducer = {
  layout: LayoutSlice,
  headerBookMark: HeaderBookmarkSlice,
  letterbox: LetterBoxSlice,
  fileManager: FileManagerSlice,
  chat: ChatSlice,
  project: ProjectSlice,
  bookmark: BookmarkSlice,
  contact: ContactSlice,
  todos: TodoSlice,
  tasks: TasksSlice,
  product: ProductReducer,
  filter: FilterReducer,
  searchResult: SearchResultSlice,
  themeCustomizer: ThemeCustomizerSlice,
  header: HeaderSlice,
  sidebar: SidebarSlice,
};

// Create store with hydration handling
function makeStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
}

// Create store instance
const Store = makeStore();

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
