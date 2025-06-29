import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { FlushList } from '@/Constant'
import { flushData, flushListData } from '@/Data/UiKits/Lists'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

const FlushLists = () => {
  return (
    <Col xl={4} md={12}>
      <Card className='custom-list-group'>
        <CommonCardHeader title={FlushList} span={flushData} headClass='card-no-border' />
        <CardBody>
          <ListGroup flush>
            <ListGroupItem><i className="icofont icofont-arrow-right"></i>PRODUCT</ListGroupItem>
            {flushListData.map((item, index) => (
              <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FlushLists