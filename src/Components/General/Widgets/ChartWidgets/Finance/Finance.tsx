import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { FinanceHeading } from '@/Constant'
import { financeChart } from '@/Data/General/Widgets/ChartWidgets'

const Finance = () => {
  return (
    <Col xl={5} lg={12} className="box-col-5">
      <Card>
        <CommonCardHeader title={FinanceHeading} />
        <CardBody>
          <div className="chart-container column-container">
            <ReactApexChart options={financeChart} series={financeChart.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
export default Finance