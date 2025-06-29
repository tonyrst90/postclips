import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { CommonTotalRevenueCardType } from "@/Types/Dashboard.type";
import SVG from "@/CommonComponent/SVG";

const CommonTotalRevenueCard: React.FC<CommonTotalRevenueCardType> = ({ icon, amount, title, arrowIcon, percentage, chart, chartClass, divClass }) => {
  return (
    <Col sm={6} xl={6} lg={6} md={6}>
      <Card className="total-sales">
        <CardBody>
          <Row>
            <Col xl={8} md={8} sm={12} className="xl-12 col box-col-12">
              <div className={`d-flex ${divClass ? divClass : ''}`}>
                <span>
                  <SVG iconId={icon} />
                </span>
                <div className="flex-shrink-0">
                  <h4>{amount}</h4>
                  <h6>{title} </h6>
                  <div className="arrow-chart">
                    <SVG iconId={arrowIcon} />
                    <h5 className={`font-${arrowIcon === "arrow-chart-up" ? "success" : "danger"}`}>{percentage}</h5>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} xs={4} className="p-0 ecommerce-chart">
              <div className={`${chartClass}-chart`}>
                <ReactApexChart options={chart} series={chart.series} height={chart.chart.height} type={chart.chart.type} />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CommonTotalRevenueCard;