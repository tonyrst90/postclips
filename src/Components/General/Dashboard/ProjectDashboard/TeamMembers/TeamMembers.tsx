import { Card, CardBody, Col, Input, Label, Table } from "reactstrap";
import TeamMembersBody from "./TeamMembersBody";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { TeamMembersHeading } from "@/Constant";
import { useState } from "react";

const TeamMembers = () => {
  const [filterText, setFilterText] = useState('');

  return (
    <Col xl={4} lg={6} md={6}>
      <Card>
        <DashboardCommonHeader cardClass="pb-0" title={TeamMembersHeading} />
        <CardBody className="pt-0 team-members">
          <div className="table-responsive custom-scrollbar">
            <div className="dataTables_wrapper no-footer">
              <div id="team-members_filter" className="dataTables_filter">
                <Label className='d-flex align-items-center'> Search:
                  <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} />
                </Label>
              </div>
              <Table className="table display" id="team-members" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>Team Name</th>
                    <th>Designation</th>
                    <th>Hours</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <TeamMembersBody filterText={filterText} />
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TeamMembers;