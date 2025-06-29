import DashboardCommonHeader from "@/Components/General/Dashboard/Common/DashboardCommonHeader";
import TransactionHistoryBody from "@/Components/General/Dashboard/DefaultDashboard/TransactionHistory/TransactionHistoryBody";
import { TransactionHistoryHeading } from "@/Constant";
import { Card, CardBody, Col, Table } from "reactstrap";

const TransactionHistory = () => {
  return (
    <Col lg='4' sm='6'>
      <Card className='transaction-history'>
        <DashboardCommonHeader title={TransactionHistoryHeading} />
        <CardBody>
          <div className='custom-scrollbar'>
            <Table responsive className='display' style={{ width: "100%" }}>
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
