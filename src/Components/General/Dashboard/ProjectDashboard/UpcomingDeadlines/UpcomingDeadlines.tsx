import { Card, CardBody, Col, Input, Label, Table } from "reactstrap";
import UpcomingDeadlinesBody from "./UpcomingDeadlinesBody";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { UpcomingDeadlinesHeading } from "@/Constant";
import { useState } from "react";

const UpcomingDeadlines = () => {
  const [filterText, setFilterText] = useState('');

  return (
    <Col xl={4} lg={6} md={6} className="proorder-xl-1">
      <Card>
        <DashboardCommonHeader cardClass="pb-0" title={UpcomingDeadlinesHeading} />
        <CardBody className="pt-0 upcoming">
          <div className="table-responsive custom-scrollbar">
            <div className="dataTables_wrapper no-footer">
              <div id="upcoming-deadlines_filter" className="dataTables_filter">
                <Label className='d-flex align-items-center'> Search:
                  <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} />
                </Label>
              </div>
              <Table className="display dataTable no-footer" id="upcoming-deadlines" style={{ width: "100%" }} >
                <thead>
                  <tr role="row">
                    <th className="sorting_asc">Employee</th>
                    <th className="sorting">Task</th>
                    <th className="sorting">Deadline</th>
                    <th className="sorting">Progress</th>
                  </tr>
                </thead>
                <UpcomingDeadlinesBody filterText={filterText} />
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default UpcomingDeadlines;