import { Table } from "reactstrap";
import { Date, InvoiceNo, PaymentStatus, TotalAmount } from "@/Constant";

const InvoiceTwoDetails = () => {
  return (
    <td>
      <Table style={{ width: "100%" }} borderless>
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(82, 82, 108, 0.3)", borderBottom: "1px solid rgba(82, 82, 108, 0.3)", padding: "25px 0" }}>
            <td style={{ display: "flex", alignItems: "center", gap: 6}}>
              <span style={{ opacity: "0.8", fontSize: 18, fontWeight: 500 }} >
                {InvoiceNo}
              </span>
              <h4 style ={{ margin: 0, fontWeight: 400, fontSize: 18 }}>
                #VL25000365
              </h4>
            </td>
            <td style={{ display: "flex", alignItems: "center", gap: 6}}>
              <span style={{ opacity: "0.8", fontSize: 18, fontWeight: 500 }} >
                {Date} :
              </span>
              <h4 style={{ margin: 0, fontWeight: 400, fontSize: 18 }}>
                09/03/2024
              </h4>
            </td>
            <td style={{ display: "flex", alignItems: "center", gap: 6 }} >
              <span style={{ opacity: "0.8", fontSize: 18, fontWeight: 500 }}>
                {PaymentStatus} :
              </span>
              <h4 style={{ margin: 0, fontWeight: 400, fontSize: 18, padding: "6px 18px", backgroundColor: "rgba(84, 186, 74, 0.1)", color: "#54BA4A", borderRadius: 5 }} >
                Paid
              </h4>
            </td>
            <td style={{ display: "flex", alignItems: "center", gap: 6}}>
              <span style={{ opacity: "0.8", fontSize: 16, fontWeight: 500, minWidth: 136 }} >
                {TotalAmount} :
              </span>
              <h4 style={{ margin: 0, fontWeight: 400, fontSize: 18 }}>
                $26,410.00
              </h4>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceTwoDetails;
