import { Table } from "reactstrap";
import InvoiceOrderHeader from "./InvoiceOrderHeader";
import InvoiceOrderBody from "./InvoiceOrderBody";

const InvoiceOrder = () => {
  return (
    <td>
      <Table className="order-details" style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 10px" }} borderless>
        <thead>
          <InvoiceOrderHeader />
        </thead>
        <tbody>
          <InvoiceOrderBody />
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceOrder;
