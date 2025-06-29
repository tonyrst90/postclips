import React from "react";
import { Button, Progress } from "reactstrap";
import { Database } from "react-feather";
import { Storage } from "@/Constant";

const StorageSection = () => {
  return (
    <>
      <ul>
        <li>
          <Button outline color="primary"><Database />{Storage}</Button>
          <div className="m-t-15">
            <Progress color="primary" value="25" className="sm-progress-bar mb-3" />
            <h6 className="f-w-500">{'25 GB of 100 GB used'}</h6>
          </div>
        </li>
      </ul>
      <hr />
    </>
  );
};
export default StorageSection;