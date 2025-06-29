import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { DisabledList, Href, ImagePath } from '@/Constant'
import { disableList, disableListData } from '@/Data/UiKits/Lists'
import Image from 'next/image'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

const DisabledLists = () => {

  return (
    <Col xxl={4} md={6}>
      <Card className='custom-list-group'>
        <CommonCardHeader title={DisabledList} span={disableListData} />
        <CardBody>
          <ListGroup>
            <ListGroupItem tag="a" className="list-group-item-action list-hover-primary active" href={Href}>
              <Image priority width={40} height={40} className="rounded-circle" src={`${ImagePath}/user/1.jpg`} alt="user" />Teresa J. Mosteller
            </ListGroupItem>
            {disableList.map(({ text, className, src }, index) => (
              <ListGroupItem tag="a" className={`list-group-item-action ${className ? className : ""}`} key={index} href={Href}>
                <Image priority width={40} height={40} className="rounded-circle" src={`${ImagePath}/${src}`} alt="user" />{text}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DisabledLists