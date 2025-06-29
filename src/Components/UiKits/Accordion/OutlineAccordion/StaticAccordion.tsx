import { ChevronDown } from 'react-feather'
import { AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const StaticAccordion = () => {
  return (
    <AccordionItem className="accordion-wrapper">
      <AccordionHeader targetId="1" className="bg-light-primary txt-primary">
        <span className="txt-primary">What do web designers do ?</span>
        <ChevronDown className="svg-color txt-primary" />
      </AccordionHeader>
      <AccordionBody accordionId="1">
        <p>
          Web design <em className="txt-danger">identifies the goals</em> of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements.
        </p>
      </AccordionBody>
    </AccordionItem>
  )
}

export default StaticAccordion