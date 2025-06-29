import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ButtonWithDataBsTarget, CollapseAccordions, LinkWithHref } from '@/Constant';
import { accordionCollapse } from '@/Data/UiKits/Accordion';
import { useState } from 'react'
import { Button, Card, CardBody, Col, Collapse } from 'reactstrap';

const CollapseAccordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <Col md={6} sm={12}>
      <Card>
        <CommonCardHeader title={CollapseAccordions} span={accordionCollapse} />
        <CardBody>
          <p className="common-flex">
            <Button color="dark" onClick={toggle}>{LinkWithHref}</Button>
            <Button color="dark" onClick={toggle}>{ButtonWithDataBsTarget}</Button>
          </p>
          <Collapse isOpen={isOpen}>
            <Card color="dark" className="mb-0 dark-accordion">
              <CardBody>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CollapseAccordion