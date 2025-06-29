import { FileListPropsType } from "@/Types/FileManager.type";

const FileList: React.FC<FileListPropsType> = ({ myFile }) => {
  return (
    <ul className="d-flex flex-row files-content">
      {myFile.map((data, i) => (
        <li key={i} className="folder-box d-flex align-items-center">
          <div className="d-flex align-items-center files-list">
            <div className="flex-shrink-0 file-left"><i className={data.icon} /></div>
            <div className="flex-grow-1 ms-3">
              <h6>{data.name}</h6>
              <p>{data.modify} {data.size}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FileList;