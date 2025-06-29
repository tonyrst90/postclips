import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Alignment, WarningTop } from "@/Constant";
import { alignmentData, alignmentList } from "@/Data/UiKits/Dropdown";
import { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CommonAlignment from "./CommonAlignment";

const Alignments = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);

  return (
    <Col lg={6}>
      <Card className="custom-with-input">
        <CommonCardHeader title={Alignment} span={alignmentData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle} direction="up">
                <DropdownToggle caret color="warning" className="text-white">{WarningTop}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem>Be careful </DropdownItem>
                  <DropdownItem>Notifications</DropdownItem>
                  <DropdownItem>Beware</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {alignmentList.map((data, index) => (
              <CommonAlignment key={index} value={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Alignments;