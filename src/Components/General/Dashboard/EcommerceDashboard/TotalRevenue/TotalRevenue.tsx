import { Col, Row } from "reactstrap";
import CommonTotalRevenueCard from "./CommonTotalRevenueCard";
import { Fragment } from "react";
import { totalRevenueData } from "@/Data/General/Dashboard/EcommerceDashboard";

const TotalRevenue = () => {
  return (
    <Col xxl={6} lg={7} xl={7} className="box-col-7">
      <Row>
        {totalRevenueData.map((data, i) => (
          <Fragment key={i}>
            <CommonTotalRevenueCard icon={data.icon} amount={data.amount} title={data.title}
              arrowIcon={data.arrowIcon} percentage={data.percentage} chart={data.chart}
              divClass={data.divClass} chartClass={data.chartClass}
            />
          </Fragment>
        ))}
      </Row>
    </Col>
  );
};
export default TotalRevenue;