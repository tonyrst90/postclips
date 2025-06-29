import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { OrdersStatusHeading } from '@/Constant'
import { orderStatusChart } from '@/Data/General/Widgets/ChartWidgets'

const OrderStatus = () => {
  return (
    <Col xl={7} lg={12} className="box-col-7">
      <Card>
        <CommonCardHeader title={OrdersStatusHeading} />
        <CardBody>
          <div className="chart-container">
            <ReactApexChart options={orderStatusChart} series={orderStatusChart.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
export default OrderStatus