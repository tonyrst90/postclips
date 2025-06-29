import { Card, CardBody, Col, Table } from "reactstrap";
import TransactionHistoryBody from "./TransactionHistoryBody";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { TransactionHistoryHeading } from "@/Constant";

const TransactionHistory = () => {
  return (
    <Col lg={4} xl={4} md={5}>
      <Card className="transaction-history">
        <DashboardCommonHeader cardClass="pb-0" title={TransactionHistoryHeading} />
        <CardBody>
          <div className="custom-scrollbar">
            <Table responsive className="display" style={{ width: "100%" }}>
              <tbody>
                <TransactionHistoryBody />
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default TransactionHistory;