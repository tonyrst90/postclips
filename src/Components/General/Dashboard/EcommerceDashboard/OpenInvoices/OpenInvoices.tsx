import { Card, CardBody, Col, FormGroup, Input, Label, Table } from "reactstrap";
import OpenInvoicesTableBody from "./OpenInvoicesTableBody";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { OpenInvoicesHeading } from "@/Constant";
import { useState } from "react";
import { openInvoiceHead } from "@/Data/General/Dashboard/EcommerceDashboard";

const OpenInvoices = () => {
  const [filterText, setFilterText] = useState('');

  return (
    <Col xxl={7} xl={8} lg={8} className="box-col-8e">
      <Card>
        <DashboardCommonHeader cardClass="pb-0" title={OpenInvoicesHeading} />
        <CardBody className="pt-0 open-invoice">
          <div className="custom-scrollbar table-responsive">
            <div className="dataTables_wrapper no-footer">
              <div id="invoice_filter" className="dataTables_filter">
                <Label className='d-flex align-items-center'> Search:
                  <Input type="search" value={filterText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} />
                </Label>
              </div>
              <Table className="display dataTable no-footer" id="invoice" style={{ width: "100%" }} >
                <thead>
                  <tr role="row">
                    <th className="sorting_asc">
                      <FormGroup check>
                        <Input type="checkbox" />
                        <Label check />
                      </FormGroup>
                    </th>
                    {openInvoiceHead.map((item, index) => (
                      <th className="sorting" key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <OpenInvoicesTableBody filterText={filterText} />
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default OpenInvoices;