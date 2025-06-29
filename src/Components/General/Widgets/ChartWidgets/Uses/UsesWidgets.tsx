import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { UsesHeading } from '@/Constant'
import { usesChart } from '@/Data/General/Widgets/ChartWidgets'

const UsesWidgets = () => {
  return (
    <Col xl={7} lg={12} className="xl-50 box-col-7">
      <div className="small-chart-widget">
        <Card>
          <CommonCardHeader headClass='pb-0' title={UsesHeading} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs={12}>
                  <ReactApexChart options={usesChart} series={usesChart.series} type="bubble" height={320} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  )
}
export default UsesWidgets