import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CryptoAnnotationHeading } from '@/Constant'
import { cryptoAnnotationChart } from '@/Data/General/Widgets/ChartWidgets'

const CryptoAnnotations = () => {
  return (
    <Col xl={6} lg={12} className="xl-50">
      <Card>
        <CommonCardHeader title={CryptoAnnotationHeading} />
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col xs={12}>
                <ReactApexChart options={cryptoAnnotationChart} series={cryptoAnnotationChart.series} type="line" height={400} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CryptoAnnotations