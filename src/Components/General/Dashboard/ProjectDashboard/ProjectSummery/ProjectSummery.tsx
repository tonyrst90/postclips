import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { projectSummeryTableBodyData, projectSummeryTableHeaderData } from "@/Data/General/Dashboard/ProjectDashboard";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { ProjectSummeryHeading } from "@/Constant";
import { ProjectSummeryTableBodyType } from "@/Types/Dashboard.type";

const ProjectSummery = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: ProjectSummeryTableBodyType[] = projectSummeryTableBodyData.filter(
    (item: ProjectSummeryTableBodyType) => {
      return Object.values(item).some((value) =>
        value && value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    }
  );
  return (
    <Col xl={7}>
      <Card>
        <DashboardCommonHeader title={ProjectSummeryHeading} />
        <CardBody className="pt-0 project-summary">
          <Row className="align-items-center mb-3">
            <Col xs={"auto"}><Label>{'Search'}:</Label></Col>
            <Col xs={"auto"}>
              <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} placeholder="Search..." />
            </Col>
          </Row>
          <div className="table-responsive">
            <DataTable className="custom-scrollbar" data={filteredItems} columns={projectSummeryTableHeaderData} pagination paginationPerPage={4} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectSummery;