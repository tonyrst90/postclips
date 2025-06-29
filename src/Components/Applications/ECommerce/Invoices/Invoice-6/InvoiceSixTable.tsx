import { Table } from "reactstrap";
import InvoiceSixTableHeader from "./InvoiceSixTableHeader";
import InvoiceTotal from "./InvoiceTotal";
import InvoiceSixTableBody from "./InvoiceSixTableBody";
import InvoiceFooter from "./InvoiceFooter";

const InvoiceSixTable = () => {
  return (
    <>
      <div className="invoice-table custom-scrollbar" id="table">
        <Table bordered striped responsive>
          <tbody>
            <tr>
              <InvoiceSixTableHeader />
            </tr>
            <InvoiceSixTableBody />
            <tr>
              <InvoiceTotal />
            </tr>
          </tbody>
        </Table>
      </div>
      <InvoiceFooter />
    </>
  );
};

export default InvoiceSixTable;
