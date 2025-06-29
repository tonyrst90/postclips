import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { TurnOverHeading } from '@/Constant'
import { turnOverChart } from '@/Data/General/Widgets/ChartWidgets'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'

const Turnover = () => {
  return (
    <Col xl={5} lg={12} className="xl-50">
      <Card>
        <CommonCardHeader headClass='pb-0' title={TurnOverHeading} />
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col xs={12}>
                <ReactApexChart options={turnOverChart} series={turnOverChart.series} type="area" height={300} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
export default Turnover