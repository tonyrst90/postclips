import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, JustifyTab } from "@/Constant";
import { justifyTabsData } from "@/Data/UiKits/ReactstrapTabs";
import { useState } from "react";
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink } from "reactstrap";
import JustifyTabContent from "./JustifyTabContent";

const JustifyTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("2");
  return (
    <Col xxl={6}>
      <Card>
        <CommonCardHeader title={JustifyTab} span={justifyTabsData} headClass="card-no-border pb-0" />
        <CardBody>
          <CardHeader className="d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0">
            <p>
              <em className="txt-danger">{"PostClips Profiles For New Employees:"}</em>
            </p>
            <Nav pills className="nav-warning">
              <NavItem>
                <NavLink href={Href} className={basicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>
                  {'Web designer'}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={Href} className={basicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>
                  {'UX designer'}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={Href} className={basicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>
                  {'IOT developer'}
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>
          <JustifyTabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default JustifyTabs;