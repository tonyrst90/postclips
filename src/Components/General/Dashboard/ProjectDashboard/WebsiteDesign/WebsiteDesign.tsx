import { Col, Row } from "reactstrap";
import CommonDesign from "./CommonDesign";
import { Fragment } from "react";
import { websiteDesignData } from "@/Data/General/Dashboard/ProjectDashboard";

const WebsiteDesign = () => {
  return (
    <Col xl={3} lg={3} md={4}>
      <Row>
        {websiteDesignData.map((data, i) => (
          <Fragment key={i}>
            <CommonDesign color={data.color} title={data.title} completeValue={data.completeValue}
              progressValue={data.progressValue} userName={data.userName} date={data.date} svgIcon={data.svgIcon} />
          </Fragment>
        ))}
      </Row>
    </Col>
  );
};

export default WebsiteDesign;