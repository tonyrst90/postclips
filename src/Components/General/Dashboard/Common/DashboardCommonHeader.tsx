import { DashboardCommonHeaderType } from "@/Types/Dashboard.type";
import React from "react";
import { CardHeader } from "reactstrap";
import { CommonDropdown } from "./CommonDropdown";

const DashboardCommonHeader: React.FC<DashboardCommonHeaderType> = ({ title, tagClass, dropDownFalse, cardClass, children }) => {
  return (
    <CardHeader className={cardClass ? cardClass : ""}>
      <div className="header-top">
        <h5 className={tagClass ? tagClass : ""}>{title}</h5>
        {!dropDownFalse ? <CommonDropdown /> : null}
        {children}
      </div>
    </CardHeader>
  );
};

export default DashboardCommonHeader;