import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { MonthlySaleHeading } from '@/Constant'
import { monthlySalesChart } from '@/Data/General/Widgets/ChartWidgets'

const MonthlySales = () => {
  return (
    <Col xl={5} lg={12} className="xl-50 box-col-5">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader headClass='pb-0' title={MonthlySaleHeading} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs={12}>
                  <ReactApexChart options={monthlySalesChart} series={monthlySalesChart.series} type="radar" height={300} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  )
}

export default MonthlySales