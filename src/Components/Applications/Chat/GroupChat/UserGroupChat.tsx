import { Card, Col } from 'reactstrap'
import RightGroupChatHeader from './RightGroupChatHeader'
import RightChatBody from '../PrivateChat/UserChat/RightChatBody'

const UserGroupChat = () => {
  return (
    <Col xxl={9} xl={8} md={7} className="box-col-7">
      <Card className="right-sidebar-chat">
        <RightGroupChatHeader />
        <RightChatBody />
      </Card>
    </Col>
  )
}

export default UserGroupChat