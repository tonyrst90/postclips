import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { saleChartData } from "@/Data/General/Widgets/ChartWidgets";

const TotalSaleWidgets = () => {
  return (
    <Row>
      {saleChartData.map((data, index) => (
        <Col xl={4} md={12} className="box-col-4" key={index}>
          <Card className="o-hidden">
            <div className="chart-widget-top">
              <CardBody className="pb-0 m-0">
                <Row>
                  <Col xl={9} lg={8} xs={9} className="p-0">
                    <h3 className="mb-2">{data.title}</h3>
                    <h4>{data.amount}</h4>
                    <span>{data.description}</span>
                  </Col>
                  <Col xl={3} lg={4} xs={3} className="text-end p-0">
                    <h6 className="txt-success">{data.percentage}</h6>
                  </Col>
                </Row>
              </CardBody>
              <div>
                <div className={index !== 0 ? "flot-chart-placeholder" : ""}>
                  <ReactApexChart options={data.chart} series={data.chart.series} type={data.chart.chart?.type} height={data.chart.chart?.height} />
                </div>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TotalSaleWidgets;