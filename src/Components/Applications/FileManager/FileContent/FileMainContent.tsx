import { CardBody } from "reactstrap";
import QuickAccess from "./QuickAccess";
import FileList from "./FileList";
import { useAppSelector } from "@/Redux/Hooks";
import { FileMainContentPropsType } from "@/Types/FileManager.type";
import FolderSection from "./FolderSection";
import { Files } from "@/Constant";

const FileMainContent: React.FC<FileMainContentPropsType> = ({ fileList }) => {
  const { searchTerm } = useAppSelector((state) => state.fileManager);

  return (
    <CardBody className="file-manager">
      {!searchTerm && (
        <>
          <QuickAccess />
          <FolderSection />
        </>
      )}
      <h5 className="mt-4 mb-2">{Files}</h5>
      <FileList myFile={fileList} />
    </CardBody>
  );
};

export default FileMainContent;