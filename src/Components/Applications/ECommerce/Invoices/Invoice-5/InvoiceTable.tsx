import { Table } from "reactstrap";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableBody from "./InvoiceTableBody";
import InvoiceTableTotal from "./InvoiceTableTotal";

const InvoiceTable = () => {
  return (
    <td>
      <Table responsive borderless style={{ width: "100%", borderSpacing:4, marginBottom:20}} >
        <thead>
          <InvoiceTableHeader />
        </thead>
        <tbody>
          <InvoiceTableBody />
          <InvoiceTableTotal />
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceTable;
