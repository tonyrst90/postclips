import { Card, CardBody, CardHeader, Col } from "reactstrap";
import StockReportDetails from "./StockReportDetails";
import CommonStockReportChart from "./CommonStockReportChart";
import { StockReportHeading } from "@/Constant";
import { CommonDropdown } from "../../Common/CommonDropdown";

const StockReport = () => {
  return (
    <Col xl={5} lg={5} className="box-col-5">
      <Card>
        <CardHeader className="pb-0">
          <div className="header-top">
            <h5>{StockReportHeading}</h5>
            <CommonDropdown/>
          </div>
          <StockReportDetails />
        </CardHeader>
        <CardBody className="p-0">
          <CommonStockReportChart height={285} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default StockReport;