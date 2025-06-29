import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { LiveProductHeading } from '@/Constant'
import { liveProductChart } from '@/Data/General/Widgets/ChartWidgets'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'

const LiveProducts = () => {
  return (
    <Col xl={7} lg={12} className="xl-50">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader headClass='pb-0' title={LiveProductHeading} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs={12}>
                  <ReactApexChart options={liveProductChart} series={liveProductChart.series} type="area" height={320} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  )
}
export default LiveProducts