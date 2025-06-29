import { Fragment } from "react";
import { useAppSelector } from "@/Redux/Hooks";
import { Folders } from "@/Constant";

const FolderSection = () => {
  const { myFile } = useAppSelector((state) => state.fileManager);

  return (
    <>
      <h5 className="mt-4 mb-2">{Folders}</h5>
      <ul className="folder">
        {myFile.map((item, index) => (
          <Fragment key={index}>
            {item.title && (
              <li className="folder-box" key={index}>
                <div className="d-block">
                  <i className={item.folderClass} />
                  <i className="fa fa-ellipsis-v me-0 f-14 ellips" />
                  <div className="mt-3">
                    <h6>{item.title}</h6>
                    <p>
                      {item.folderSize}
                      <span className="pull-right">
                        <i className="fa fa-clock-o" />
                        {item.modify}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </>
  );
};
export default FolderSection;