import DashboardCommonHeader from '@/Components/General/Dashboard/Common/DashboardCommonHeader'
import CommonCardEarning from '@/Components/General/Dashboard/DefaultDashboard/CommonCardEarning/CommonCardEarning'
import { TotalEarningsHeading } from '@/Constant'
import { earningsChartData } from '@/Data/General/Dashboard/DefaultDashboard'
import { Card, Col } from 'reactstrap'
 

const TotalEarnings = () => {
  return (
    <Col xl="2" md="4" sm="6" className="col-xl-25 box-col-3">
      <Card className="earning-card">
        <DashboardCommonHeader title={TotalEarningsHeading}  />
        <CommonCardEarning chart={earningsChartData} amount={"$ 12,463"} percentage={"+ 20.08%"} icon={"down-arrow"}/>
      </Card>
    </Col>
  )
}

export default TotalEarnings