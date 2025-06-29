import { useState } from "react";
import { Card, CardBody, Collapse, Col, Button } from "reactstrap";
import LocationCheckBox from "./LocationCheckBox";
import HeaderWithIcon from "../HeaderWithIcon";
import { AllLocations, LocationHeading } from "@/Constant";

const Location = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Card>
      <HeaderWithIcon heading={LocationHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <CardBody className="animate-chk">
          <LocationCheckBox />
        </CardBody>
        <Button block className="text-center" color="primary">{AllLocations}</Button>
      </Collapse>
    </Card>
  );
};

export default Location;