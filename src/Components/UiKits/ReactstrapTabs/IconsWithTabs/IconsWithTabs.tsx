import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, IconsWithTab } from "@/Constant";
import { iconTabData } from "@/Data/UiKits/ReactstrapTabs";
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import IconTabContent from "./IconTabContent";

const IconsWithTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("1");

  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={IconsWithTab} span={iconTabData} headClass="card-no-border pb-0" />
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink href={Href} className={`txt-secondary ${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>
                <i className="icofont icofont-ui-home"></i> {'Home'}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={`txt-secondary ${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>
                <i className="icofont icofont-man-in-glasses"></i> {'Profile'}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={`txt-secondary ${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>
                <i className="icofont icofont-contacts"></i> {'Contact'}
              </NavLink>
            </NavItem>
          </Nav>
          <IconTabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconsWithTabs;