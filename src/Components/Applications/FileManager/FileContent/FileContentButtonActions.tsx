import { Button, Form, Input } from "reactstrap";
import { PlusSquare, Upload } from "react-feather";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "@/Redux/Hooks";
import { getFile, onFileUpload } from "@/Redux/Reducers/FileManagerSlice";

const FileContentButtonActions = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) setSelectedFile(files[0]);
  };

  return (
    <div className="flex-grow-1 text-end">
      <Form className="d-inline-flex">
        <Button color="primary" onClick={() => dispatch(getFile())}><PlusSquare />{'Add New'}</Button>
      </Form>
      <Button outline color="primary" className="ms-2" onClick={() => dispatch(onFileUpload(selectedFile))}><Upload />{'Upload'}</Button>
    </div>
  );
};
export default FileContentButtonActions;