import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Icons, WhetherIcon, whetherIconsWithAnimations } from "@/Constant";
import { weatherIconList } from "@/Data/Icons/Icons";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const WeatherIconContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={WhetherIcon} parent={Icons} title={WhetherIcon} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title={whetherIconsWithAnimations} />
              <CardBody>
                <Row className="icon-lists whether-icon">
                  {weatherIconList.map((icon, i) => (
                    <Col lg={2} xs={3} key={i}>
                      {icon.icon}
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WeatherIconContainer;