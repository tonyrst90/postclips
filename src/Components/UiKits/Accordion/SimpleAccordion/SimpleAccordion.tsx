//@ts-nocheck
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { SimpleAccordions } from '@/Constant';
import { accordionData, accordionList } from '@/Data/UiKits/Accordion';
import { useState } from 'react'
import { Accordion, Card, CardBody, Col } from 'reactstrap';
import StaticAccordion from './StaticAccordion';
import CommonAccordionItem from '../Common/CommonAccordionItem';

const SimpleAccordion = () => {
  const [open, setOpen] = useState<string>("1");
  const toggle = (id) => (open === id ? setOpen('') : setOpen(id));

  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={SimpleAccordions} span={accordionData} />
        <CardBody>
          <Accordion open={open} toggle={toggle} className="dark-accordion">
            <StaticAccordion />
            {accordionList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SimpleAccordion