"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import InvoiceSixPrint from "./InvoiceSixPrint";
import InvoiceSixHeader from "./InvoiceSixHeader";
import UserDetails from "./UserDetails";
import InvoiceSixTable from "./InvoiceSixTable"; 
import { useRef } from "react";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { Invoice, InvoiceSix } from "@/Constant";
import { useReactToPrint } from "react-to-print";

const InvoiceSixContainer = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });
  return (
    <>
      <Breadcrumbs mainTitle={InvoiceSix} parent={Invoice} title="" />
      <Container>
        <div ref={contentRef}>
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <div className="invoice">
                    <div>
                      <InvoiceSixHeader />
                      <hr />
                      <UserDetails />
                      <InvoiceSixTable />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <InvoiceSixPrint handlePrint={handlePrint} />
      </Container>
    </>
  );
};

export default InvoiceSixContainer;
