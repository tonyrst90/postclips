import { Card, CardBody, Col, TabContent } from "reactstrap";
import NotificationsTab from "./NotificationsTab";
import { useState } from "react";
import NotificationsFirstTabContent from "./NotificationsFirstTabContent";
import NotificationsTwoTabContent from "./NotificationsTwoTabContent";
import NotificationsThreeTabContent from "./NotificationsThreeTabContent";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { NotificationsHeading } from "@/Constant";

const Notifications = () => {
  const [navId, setNavId] = useState(1)
  return (
    <Col xl={4} lg={6} md={6}>
      <Card className="notifications-tabs">
        <DashboardCommonHeader cardClass="pb-0" title={NotificationsHeading} />
        <CardBody>
          <NotificationsTab setNavId={setNavId} navId={navId} />
          <NotificationsFirstTabContent navId={navId} />
          <NotificationsTwoTabContent navId={navId} />  
          <NotificationsThreeTabContent navId={navId} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Notifications;