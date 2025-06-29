import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { CryptoCurrencyPriceHeading } from '@/Constant'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { cryptoCurrencyPrice } from '@/Data/General/Widgets/ChartWidgets'

const CryptoCurrencyPrices = () => {
  return (
    <Col xl={6} lg={12} className="xl-50">
      <Card>
        <CommonCardHeader title={CryptoCurrencyPriceHeading} />
        <CardBody>
          <div className="chart-container crypto-chart">
            <Row>
              <Col xs={12}>
                <ReactApexChart options={cryptoCurrencyPrice} series={cryptoCurrencyPrice.series} type="area" height={400} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
export default CryptoCurrencyPrices