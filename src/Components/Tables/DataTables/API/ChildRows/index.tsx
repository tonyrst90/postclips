//@ts-nocheck
import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import { StateSavingTableType } from "@/Types/Tables.type";
import { ChildRowColumn, childRowsTableColumns, stateSavingTableData } from "@/Data/Tables/DataTables/BasicInit";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ChildRowsTitle } from "@/Constant";
import { childrenRowsSubTitle } from "@/Data/Tables/DataTables/API";
import FilterComponent from "../../Common/FilterComponent";
import CustomExpandableComponent from "./CustomExpandableComponent";

const ChildRows = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: StateSavingTableType[] = stateSavingTableData.filter((item: StateSavingTableType) => {
    return Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase()));
  });
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader headClass='pb-0 card-no-border' title={ChildRowsTitle} span={childrenRowsSubTitle} />
        <CardBody>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <div className='table-responsive custom-scrollbar mt-3'>
            <DataTable data={filteredItems} columns={ChildRowColumn} pagination expandableRows expandableRowsComponent={CustomExpandableComponent} striped highlightOnHover className='display theme-scrollbar' />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ChildRows;
