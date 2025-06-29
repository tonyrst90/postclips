import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { ToastContainer } from "react-toastify";
import { Card, CardHeader } from "reactstrap";
import SearchBar from "../SearchBar";
import FileMainContent from "./FileMainContent";
import Image from "next/image";
import FileContentButtonActions from "./FileContentButtonActions";

const FileContent = () => {
  const { myFile, searchTerm } = useAppSelector((state) => state.fileManager);

  const fileList = myFile.filter((data) => {
    if (searchTerm == null) return data;
    if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) return data
  });

  return (
    <Card>
      <CardHeader>
        <div className="d-md-flex d-sm-block">
          <SearchBar />
          <FileContentButtonActions />
        </div>
      </CardHeader>
      {fileList.length ? <FileMainContent fileList={fileList} /> : <Image className="img-fluid mx-auto my-4" src={`${ImagePath}/search-not-found.png`} width={200} height={137} alt="image" />}
      <ToastContainer />
    </Card>
  );
};

export default FileContent;