//@ts-nocheck
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { MultipleCollapseAccordions, ToggleBothElement, ToggleFirstElement, ToggleSecondElement } from '@/Constant';
import { multipleData } from '@/Data/UiKits/Accordion';
import { useState } from 'react'
import { Button, Card, CardBody, Col, Collapse, Row } from 'reactstrap';

const MultipleCollapseAccordion = () => {
  const [openFirst, setOpenFirst] = useState<boolean>(false);
  const [openSecond, setOpenSecond] = useState<boolean>(false);
  const toggleFirst = () => setOpenFirst(!openFirst);
  const toggleSecond = () => setOpenSecond(!openSecond);
  const toggleBoth = () => { setOpenFirst(!openFirst); setOpenSecond(!openSecond); };

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={MultipleCollapseAccordions} span={multipleData} />
        <CardBody>
          <div className="common-flex">
            <Button color="primary" onClick={toggleFirst}>{ToggleFirstElement}</Button>
            <Button color="warning" onClick={toggleSecond}>{ToggleSecondElement}</Button>
            <Button color="success" onClick={toggleBoth}>{ToggleBothElement}</Button>
          </div>
          <Row className="d-flex">
            <Col xl={6}>
              <Collapse isOpen={openFirst} className="multi-collapse dark-accordion">
                <Card color="light-primary" className="mt-3 mb-0 collapse-wrapper">
                  <CardBody>The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the height from it's current value to 0. Given how CSS handles animations, you cannot use padding on a .collapse element. Instead, use the class as an independent wrapping element.</CardBody>
                </Card>
              </Collapse>
            </Col>
            <Col xl={6}>
              <Collapse isOpen={openSecond} className="multi-collapse dark-accordion">
                <Card color="light-warning" className="mt-3 mb-0 collapse-wrapper">
                  <CardBody>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}
export default MultipleCollapseAccordion