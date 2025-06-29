import { Card, Col, Container, Row } from "reactstrap";
import { FeatherIconCardBody } from "./FeatherIconCardBody";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { FeatherIcons, Icons } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const FeatherIconContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FeatherIcons} parent={Icons} title={FeatherIcons} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title={FeatherIcons} />
              <FeatherIconCardBody />
            </Card>
          </Col>
        </Row>
      </Container>
    </>

  );
};

export default FeatherIconContainer;