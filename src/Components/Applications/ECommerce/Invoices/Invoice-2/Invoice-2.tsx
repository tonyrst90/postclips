"use client";
import { Container, Table } from "reactstrap";
import InvoiceTwoHeader from "./InvoiceTwoHeader";
import InvoiceTwoDetails from "./InvoiceTwoDetails";
import InvoiceTwoBilling from "./InvoiceTwoBilling";
import InvoiceTwoContent from "./InvoiceTwoContent";
import InvoiceTwoTotal from "./InvoiceTwoTotal";
import  InvoiceButtons  from "../Common/InvoiceButtons";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { Invoice, InvoiceTwo } from "@/Constant";
 

const InvoiceTwoContainer = () => {
   const contentRef = useRef<HTMLDivElement | null>(null);

   const handlePrint = useReactToPrint({
     contentRef,
   });
  return (
    <>
      <Breadcrumbs title="" />
      <Container className="invoice-2">
        <div ref={contentRef}>
          <Table style={{ width: 1160, margin: 0 }} borderless>
            <tbody>
              <tr>
                <InvoiceTwoHeader />
              </tr>
              <tr>
                <InvoiceTwoDetails />
              </tr>
              <tr>
                <InvoiceTwoBilling />
              </tr>
              <tr>
                <InvoiceTwoContent />
              </tr>
              <tr>
                <InvoiceTwoTotal />
              </tr>
              <tr>
                <td>
                  <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 24 }} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <InvoiceButtons handlePrint={handlePrint} />
      </Container>
    </>
  );
};

export default InvoiceTwoContainer;
