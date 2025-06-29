import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import TodayTaskTabContent from "./TodayTaskTabContent";
import { useState } from "react";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { Href, TodayTaskHeading } from "@/Constant";
import { todayTaskNav } from "@/Data/General/Dashboard/ProjectDashboard";

const TodayTask = () => {
  const [tabId, setTabId] = useState(1)

  return (
    <Col xl={5} lg={7} md={7}>
      <Card className="today-task">
        <DashboardCommonHeader cardClass="pb-0" title={TodayTaskHeading} />
        <CardBody>
          <div className="d-flex header-tab">
            <Nav tabs className="border-tab mb-0" id="bottom-tab">
              {todayTaskNav.map((item) => (
                <NavItem key={item.id}>
                  <NavLink active={tabId === item.id ? true : false} className={`nav-border tab-primary ${item.id === 1 ? 'pt-0' : ''}`} href={Href} onClick={() => setTabId(item.id)}>
                    {item.title}{item.id === 1 && <span className="ms-2 bg-primary">5</span>}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
          <TodayTaskTabContent tabId={tabId} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TodayTask;