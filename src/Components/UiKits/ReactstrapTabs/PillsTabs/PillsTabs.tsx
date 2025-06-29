import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, PillsTab } from "@/Constant";
import { pillsTabData } from "@/Data/UiKits/ReactstrapTabs";
import PillsTabContent from "./PillsTabContent";

const PillsTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("3");

  return (
    <Col sm={12} xxl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={PillsTab} span={pillsTabData} headClass="card-no-border pb-0" />
        <CardBody>
          <Nav pills className="nav-primary">
            <NavItem>
              <NavLink href={Href} className={basicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>
                {'About us'}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={basicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>
                {'Contact us'}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={basicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>
                {'Blog'}
              </NavLink>
            </NavItem>
          </Nav>
          <PillsTabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default PillsTabs;