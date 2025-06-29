import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { HelperCards } from '@/Constant'
import { helperData } from '@/Data/UiKits/Dropdown'
import { Card, CardBody, Col } from 'reactstrap'
import HelperCart from './HelperCart'
import WarningCard from './WarningCard'
import AlertCard from './AlertCard'

const HelperCard = () => {
  return (
    <Col xl={6}>
      <Card className="custom-with-input">
        <CommonCardHeader title={HelperCards} span={helperData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <HelperCart />
            <WarningCard />
            <AlertCard />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
export default HelperCard