import { msToTime } from "@/Helper/MsToTime";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import convertSize from "convert-size";
import { fileListData } from "@/Data/Applications/FileManager";
import { FileManagerSliceType } from "@/Types/FileManager.type";

const initialState: FileManagerSliceType = {
  fileSidebar: false,
  myFile: fileListData,
  searchTerm: "",
};

const FileManagerSlice = createSlice({
  name: "FileManagerSlice",
  initialState,
  reducers: {
    setMyFile: (state, action) => {
      state.myFile = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    getFile: () => {
      document.getElementById("upfile")?.click();
    },

    onFileUpload: (state, action) => {
      const date = new Date();
      const time = msToTime(date.getMilliseconds(), "ago", "long");
      const myFiles = [...state.myFile];
      if (action.payload !== null) {
        myFiles.push({
          id: state.myFile.length + 1,
          name: `${action.payload.name}`,
          size: `${convertSize(action.payload.size)}`,
          modify: `${time}`,
          icon: "f-22 fa fa-file-text-o txt-info",
          folderClass: "f-44 fa fa-folder txt-warning",
          title: "Endless Admin",
          folderSize: "10 files",
          modifyFolder: "1 Day ago",
        });
        state.myFile = myFiles;
        toast.success("File Upload Successfully !");
      } else {
        toast.error("Please Select at least one file !");
      }
    },
  },
});

export const { setMyFile, setSearchTerm, onFileUpload ,getFile} = FileManagerSlice.actions;

export default FileManagerSlice.reducer;