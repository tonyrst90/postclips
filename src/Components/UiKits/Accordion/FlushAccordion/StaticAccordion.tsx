import { AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const StaticAccordion = () => {
  return (
    <AccordionItem>
      <AccordionHeader targetId="1" className="bg-light-success txt-success">
        <span className="txt-success">What is bootstrap?</span>
      </AccordionHeader>
      <AccordionBody accordionId="1">
        <p>
          {`-->`} Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website.
          <br />
          {`--> `}It is absolutely free to download and use.
        </p>
      </AccordionBody>
    </AccordionItem>
  )
}

export default StaticAccordion