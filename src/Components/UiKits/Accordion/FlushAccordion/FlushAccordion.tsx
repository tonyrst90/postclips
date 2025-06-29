//@ts-nocheck
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { FlushAccordions } from '@/Constant';
import { flushData, flushList } from '@/Data/UiKits/Accordion';
import { useState } from 'react'
import { Accordion, Card, CardBody, Col } from 'reactstrap';
import StaticAccordion from './StaticAccordion';
import CommonAccordionItem from '../Common/CommonAccordionItem';

const FlushAccordion = () => {
  const [open, setOpen] = useState<string>("1");
  const toggle = (id) => (open === id ? setOpen('') : setOpen(id));

  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={FlushAccordions} span={flushData} />
        <CardBody>
          <Accordion flush open={open} toggle={toggle} className="dark-accordion">
            <StaticAccordion />
            {flushList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  )
}
export default FlushAccordion