import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DefaultList } from '@/Constant'
import { defaultData, defaultListData } from '@/Data/UiKits/Lists'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

const DefaultLists = () => {
  return (
    <Col xl={4} md={6}>
      <Card className='custom-list-group'>
        <CommonCardHeader title={DefaultList} span={defaultData} headClass='card-no-border' />
        <CardBody>
          <ListGroup>
            <ListGroupItem><i className="icofont icofont-arrow-right"></i>Logo Design</ListGroupItem>
            {defaultListData.map((item, index) => (
              <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DefaultLists