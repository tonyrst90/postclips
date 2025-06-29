import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CustomContentList, Href, ImagePath, MollyBoake } from '@/Constant'
import { customData } from '@/Data/UiKits/Lists'
import Image from 'next/image'
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'
import DynamicCustomContentList from './DynamicCustomContentList'

const CustomContentLists = () => {
  return (
    <Col md={12}>
      <Card className='custom-list-group'>
        <CommonCardHeader title={CustomContentList} span={customData} headClass='card-no-border' />
        <CardBody>
          <ListGroup className="main-lists-content">
            <ListGroupItem tag="a" href={Href} className="list-group-item-action active bg-primary">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div className="list-wrapper">
                  <Image priority width={55} height={55} className="list-img" src={`${ImagePath}/user/1.jpg`} alt="profile" />
                  <div className="list-content">
                    <h6 className="text-light">{MollyBoake}</h6>
                    <p>MollyBoake@rhyta.com</p>
                  </div>
                </div>
                <small>5 days ago</small>
              </div>
              <p className="mb-1">Next step is to choose a tone of voice for your content type. From casual to convincing, pick one from 20+ tones in the dropdown.Why did we say “snag eyeballs” instead of “get attention?” Why do we say “brick-and-mortar words” instead of “concrete words?” Because, in your email subject lines, it’s better to use words that people can picture.</p>
              <small className="text-light">20K Followers</small>
            </ListGroupItem>
            <DynamicCustomContentList />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomContentLists