import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, VerticalTab } from "@/Constant";
import { verticalTabData } from "@/Data/UiKits/ReactstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavLink, Row } from "reactstrap";
import VerticalTabContent from "./VerticalTabContent";

const VerticalTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("2");
  return (
    <Col sm={12} xxl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={VerticalTab} span={verticalTabData} headClass="card-no-border pb-0" />
        <CardBody>
          <Row>
            <Col md={4} xs={12}>
              <Nav pills className="flex-column nav-success">
                <NavLink href={Href} className={basicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>
                  {'Home'}
                </NavLink>
                <NavLink hre={Href} className={basicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>
                  {'Components'}
                </NavLink>
                <NavLink hre={Href} className={basicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>
                  {'Page'}
                </NavLink>
                <NavLink hre={Href} className={basicTab === "4" ? "active" : ""} onClick={() => setBasicTab("4")}>
                  {'Settings'}
                </NavLink>
              </Nav>
            </Col>
            <VerticalTabContent basicTab={basicTab} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalTabs;