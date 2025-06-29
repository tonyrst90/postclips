"use client";
import { Container, Table } from "reactstrap";
import InvoiceThreeHeader from "./InvoiceThreeHeader";
import InvoiceClientDetail from "./InvoiceClientDetail";
import InvoiceThreeTable from "./InvoiceThreeTable";
import InvoiceBankTransfer from "./InvoiceBankTransfer";
import  InvoiceButtons  from "../Common/InvoiceButtons";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { Invoice, InvoiceThree } from "@/Constant";
 

const InvoiceThreeContainer = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });
  return (
    <>
      <Breadcrumbs title="" />
      <Container className="invoice-3">
        <div ref={contentRef}>
          <Table style={{ width: 1160, margin: "0 auto" }} borderless>
            <tbody>
              <tr>
                <InvoiceThreeHeader />
              </tr>
              <tr>
                <InvoiceClientDetail />
              </tr>
              <tr>
                <td>
                  <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 20 }}></span>
                </td>
              </tr>
              <tr>
                <InvoiceThreeTable />
              </tr>
              <tr>
                <InvoiceBankTransfer />
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

export default InvoiceThreeContainer;
