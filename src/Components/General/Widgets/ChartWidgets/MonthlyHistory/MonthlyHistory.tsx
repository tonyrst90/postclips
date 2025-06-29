import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { MonthlyHistoryHeading } from '@/Constant'
import { monthlyHistoryChart } from '@/Data/General/Widgets/ChartWidgets'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'

const MonthlyHistory = () => {
  return (
    <>
      <Col md={12} className="box-col-12">
        <Card className="o-hidden">
          <CommonCardHeader title={MonthlyHistoryHeading} />
          <div className="bar-chart-widget">
            <CardBody className="bottom-content">
              <Row>
                <Col xs={12}>
                  <ReactApexChart options={monthlyHistoryChart} series={monthlyHistoryChart.series} type="bar" height={380} />
                </Col>
              </Row>
            </CardBody>
          </div>
        </Card>
      </Col>
    </>
  )
}

export default MonthlyHistory