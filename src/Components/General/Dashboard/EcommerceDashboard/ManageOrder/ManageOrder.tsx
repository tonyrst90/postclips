import { useState } from "react";
import { Card, CardBody, Col, FormGroup, Input, Label, Table } from "reactstrap";
import ManageOrderTableBody from "./ManageOrderTableBody";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { ManageOrderHeading } from "@/Constant";
import { manageOrderHead } from "@/Data/General/Dashboard/EcommerceDashboard";

const ManageOrder = () => {
  const [filterText, setFilterText] = useState('');

  return (
    <Col xl={7} lg={7} className="box-col-7">
      <Card>
        <DashboardCommonHeader cardClass="pb-0" title={ManageOrderHeading} />
        <CardBody className="pt-0 report">
          <div className="custom-scrollbar table-responsive">
            <div className="dataTables_wrapper no-footer">
              <div id="report_filter" className="dataTables_filter">
                <Label className='d-flex align-items-center'> Search:
                  <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} />
                </Label>
              </div>
              <Table className="display dataTable no-footer" id="report" style={{ width: "100%" }} >
                <thead>
                  <tr role="row">
                    <th className="sorting">
                      <FormGroup check>
                        <Input type="checkbox" />
                        <Label check />
                      </FormGroup>
                    </th>
                    {manageOrderHead.map((item, index) => (
                      <th className="sorting" key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <ManageOrderTableBody filterText={filterText} />
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ManageOrder;