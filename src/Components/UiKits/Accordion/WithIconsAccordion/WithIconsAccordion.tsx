//@ts-nocheck
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { WithIconsAccordions } from '@/Constant'
import { accordionIconData, accordionIconList } from '@/Data/UiKits/Accordion'
import { Card, CardBody, Col, UncontrolledAccordion } from 'reactstrap'
import StaticAccordion from './StaticAccordion'
import CommonAccordionItem from '../Common/CommonAccordionItem'

const WithIconsAccordion = () => {
  return (
    <Col xl={6} sm={12}>
      <Card>
        <CommonCardHeader title={WithIconsAccordions} span={accordionIconData} />
        <CardBody className="accordion-border icons-accordion  ">
          <UncontrolledAccordion stayOpen className="dark-accordion">
            <StaticAccordion />
            {accordionIconList.map((data, index) => (
              <CommonAccordionItem key={index} item={data} />
            ))}
          </UncontrolledAccordion>
        </CardBody>
      </Card>
    </Col>
  )
}

export default WithIconsAccordion