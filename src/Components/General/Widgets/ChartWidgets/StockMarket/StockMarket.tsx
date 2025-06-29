import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import ReactApexChart from 'react-apexcharts'
import { StockMarketHeading } from '@/Constant'
import { stockMarketChart } from '@/Data/General/Widgets/ChartWidgets'

const StockMarket = () => {
  return (
    <Row>
      <Col sm={12} className="box-col-12">
        <div className="donut-chart-widget">
          <Card>
            <CommonCardHeader headClass='pb-0' title={StockMarketHeading} />
            <CardBody>
              <ReactApexChart options={stockMarketChart} series={stockMarketChart.series} type="line" height={450} />
            </CardBody>
          </Card>
        </div>
      </Col>

    </Row>
  )
}
export default StockMarket