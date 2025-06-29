"use client";
import { Container, Table } from "reactstrap";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceBackImage from "./InvoiceBackImage";
import InvoiceContent from "./InvoiceContent";
import InvoiceOrder from "./InvoiceOrder";
import InvoiceSign from "./InvoiceSign";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
 
import InvoiceButtons from "../Common/InvoiceButtons";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { Invoice, InvoiceOne } from "@/Constant";

const InvoiceOneContainer = () => {
 const contentRef = useRef<HTMLDivElement | null>(null);

 const handlePrint = useReactToPrint({
   contentRef,
 });
  return (
    <>
      <Breadcrumbs title="" />
      <Container className="invoice-1">
        <div ref={contentRef}>
          <Table className="table-wrapper" borderless>
            <tbody>
              <tr>
                <InvoiceHeader />
              </tr>
              <tr>
                <InvoiceBackImage />
              </tr>
              <tr>
                <InvoiceContent />
              </tr>
              <tr>
                <InvoiceOrder />
              </tr>
            </tbody>
            <tfoot>
              <InvoiceSign />
            </tfoot>
          </Table>
        </div>
        <InvoiceButtons handlePrint={handlePrint} />
      </Container>
    </>
  );
};

export default InvoiceOneContainer;
