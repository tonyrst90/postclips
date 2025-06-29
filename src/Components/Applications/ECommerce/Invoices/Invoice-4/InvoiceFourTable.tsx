import { Description } from "@/Constant";
import { invoiceTableHeader } from "@/Data/Applications/ECommerce/Invoice";
import { Table } from "reactstrap";
import InvoiceTableBody from "./InvoiceTableBody";

const InvoiceFourTable = () => {
  return (
    <td>
      <Table responsive style={{ width: "100%", borderSpacing: 0 }}>
        <thead>
          <tr style={{ background: "#003FDD" }}>
            {invoiceTableHeader.map((data, i) => (
              <th style={{ padding: "18px 15px", textAlign: data === Description ? "left" : "center", position: data === Description ? "relative" : undefined, borderTopLeftRadius: data === Description ? 10 : 0 }} key={i}>
                <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>{data}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <InvoiceTableBody />
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceFourTable;
