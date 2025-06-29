import { Card, CardBody, Col, FormGroup, Input, Label, Table } from "reactstrap";
import RecentOrderBody from "./RecentOrderBody";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { RecentOrders } from "@/Constant";
import { useState } from "react";
import { recentOrderHead } from "@/Data/General/Dashboard/DefaultDashboard";

const RecentOrder = () => {
  const [filterText, setFilterText] = useState('');

  return (
    <Col xl={7} lg={7} className="box-col-7">
      <Card>
        <DashboardCommonHeader cardClass="pb-0" title={RecentOrders} />
        <CardBody className="pt-0 recent">
          <div className="custom-scrollbar table-responsive">
            <div className="dataTables_wrapper no-footer">
              <div id="recent-order_filter" className="dataTables_filter">
                <Label className='d-flex align-items-center'> Search:
                  <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} />
                </Label>
              </div>
              <Table className="display dataTable no-footer" style={{ width: "100%" }} >
                <thead>
                  <tr>
                    <th>
                      <FormGroup check>
                        <Input type="checkbox" />
                        <Label check />
                      </FormGroup>
                    </th>
                    {recentOrderHead.map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <RecentOrderBody filterText={filterText} />
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default RecentOrder;