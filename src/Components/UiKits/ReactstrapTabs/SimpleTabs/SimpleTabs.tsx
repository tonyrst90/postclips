import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, SimpleTab } from "@/Constant";
import { tabsData } from "@/Data/UiKits/ReactstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import SimpleTabContent from "./SimpleTabContent";

const SimpleTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("2");
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={SimpleTab} span={tabsData} headClass="card-no-border pb-0" />
        <CardBody>
          <Nav tabs className="simple-wrapper">
            <NavItem>
              <NavLink href={Href} className={`txt-primary ${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>
                {'Home'}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={`txt-primary ${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>
                {'Profile'}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={`txt-primary ${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>
                {'Contact'}
              </NavLink>
            </NavItem>
          </Nav>
          <SimpleTabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleTabs;