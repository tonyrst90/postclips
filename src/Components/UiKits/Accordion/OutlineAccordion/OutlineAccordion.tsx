//@ts-nocheck
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { OutlineAccordions } from '@/Constant'
import { outlineData, outlineList } from '@/Data/UiKits/Accordion'
import { Card, CardBody, Col, UncontrolledAccordion } from 'reactstrap'
import StaticAccordion from './StaticAccordion'
import CommonAccordionItem from '../Common/CommonAccordionItem'

const OutlineAccordion = () => {
  return (
    <Col xl={6} sm={12}>
      <Card>
        <CommonCardHeader title={OutlineAccordions} span={outlineData} />
        <CardBody>
          <UncontrolledAccordion stayOpen className="dark-accordion">
            <StaticAccordion />
            {outlineList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </UncontrolledAccordion>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineAccordion