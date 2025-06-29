import { Apps, SupportTicket, SupportTicketList } from "@/Constant";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import TicketList from "./TicketList/TicketList";
import TicketTable from "./TicketTable";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { supportData } from "@/Data/Miscellaneous/SupportTicket/SupportTicket";

const SupportTicketContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={SupportTicket} parent={Apps} title={SupportTicket} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title={SupportTicketList} span={supportData} headClass="pb-0" />
              <CardBody>
                <TicketList />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SupportTicketContainer;