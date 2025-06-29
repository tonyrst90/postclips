"use client";
import { Container, Table } from "reactstrap";
import InvoiceFourHeader from "./InvoiceFourHeader";
import InvoiceFourDetail from "./InvoiceFourDetail";
import InvoiceFourTable from "./InvoiceFourTable";
import InvoiceTotal from "./InvoiceTotal"; 
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { Invoice, InvoiceFour } from "@/Constant";
import InvoiceButtons from "@/Components/Applications/ECommerce/Invoices/Common/InvoiceButtons";
import InvoiceFiveSign from "../Invoice-5/InvoiceFiveSign";
 

const InvoiceFourContainer = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  return (
    <>
      <Breadcrumbs title="" />
      <Container className="invoice-4">
        <div ref={contentRef}>
          <Table borderless style={{ width: 1160, margin: "0 auto" }}>
            <tbody>
              <tr>
                <InvoiceFourHeader />
              </tr>
              <tr>
                <InvoiceFourDetail />
              </tr>
              <tr>
                <InvoiceFourTable />
              </tr>
              <tr>
                <td style={{ height: 3, width: "100%", background: "linear-gradient(90deg, #003FDD 20.61%, #FF9766 103.6%)", display: "block", padding: "0px" }} />
              </tr>
              <tr>
                <InvoiceTotal />
              </tr>
              <InvoiceFiveSign />
            </tbody>
          </Table>
        </div>
        <InvoiceButtons handlePrint={handlePrint} />
      </Container>
    </>
  );
};

export default InvoiceFourContainer;
