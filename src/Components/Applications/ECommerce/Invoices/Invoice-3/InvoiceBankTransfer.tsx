import { Table } from "reactstrap";
import { AllTaxesIncluded, BankTransfer, BankAccount, Code, TotalAmount } from "@/Constant";
 

const InvoiceBankTransfer = () => {
  return (
    <td>
      <Table style={{ width: "100%" }} borderless responsive>
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", margin: "28px 0", alignItems: "center" }} >
            <td>
              <span style={{ fontSize: 16, fontWeight: 600, opacity: "0.8" }} >
                {BankTransfer}
              </span>
              <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 18, color: "#003FDD" }}>
                Leslie Alexander
              </h4>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400 }} >
                {BankAccount} : 0981234098765
              </span>
              <span style={{ lineHeight: "1.6", fontSize: 18, fontWeight: 400 }} >
                {Code} : LEF098756
              </span>
            </td>
            <td>
              <span style={{ fontSize: 16, fontWeight: 600, opacity: "0.8" }} >
                {TotalAmount}
              </span>
              <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 26,  color: "#003FDD" }} >
                $175.00
              </h4>
              <span style={{ fontSize: 16, fontWeight: 400, lineHeight: "1.5" }}>
                {AllTaxesIncluded}
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceBankTransfer;
