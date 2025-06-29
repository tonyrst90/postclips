import { Card, CardBody, Row, TabContent, TabPane } from 'reactstrap'
import ProjectCommon from './Common/ProjectCommon'
import { useAppSelector } from '@/Redux/Hooks'

const ProjectListTabContent = () => {
  const { activeTab, createdFormData } = useAppSelector((state) => state.project)
  return (
    <Card>
      <CardBody>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              {createdFormData.map((item, i) => (<ProjectCommon item={item} key={i} />))}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {createdFormData.map((item, i) =>
                item.badge === "Doing" ? (<ProjectCommon item={item} key={i} />) : (" ")
              )}
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              {createdFormData.map((item, i) =>
                item.badge === "Done" ? (<ProjectCommon item={item} key={i} />) : (" ")
              )}
            </Row>
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  )
}
export default ProjectListTabContent