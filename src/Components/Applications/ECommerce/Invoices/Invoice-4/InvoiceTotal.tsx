import { Table } from "reactstrap";
import InvoiceSubTotal from "./InvoiceSubTotal";
import { PaymentTeams } from "@/Constant";

const InvoiceTotal = () => {
  return (
    <td>
      <Table style={{ width: "100%" }} borderless>
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", margin: "16px 0 24px 0", alignItems: "end" }} >
            <td style={{ display: "flex", gap: 10 }}>
              <span style={{ color: "#003FDD", fontSize: 16, fontWeight: 600}}>
                {PaymentTeams} :
              </span>
              <span style={{ display: "block",lineHeight: "1.5", fontSize: 16, fontWeight: 400, width: "55%" }} >
                {"This denotes a payment credit for a full month's supply."}
              </span>
            </td>
            <td>
              <InvoiceSubTotal />
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceTotal;
