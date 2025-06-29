import { Table } from "reactstrap";
import TableHeader from "./TableHeader";
import InvoiceTwoData from "./InvoiceTwoData";

const InvoiceTwoContent = () => {
  return (
    <td>
      <Table responsive style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, border: "1px solid rgba(82, 82, 108, 0.1)"}}>
        <thead>
          <tr style={{ background: "#003FDD", borderRadius: "8px", overflow: "hidden", boxShadow: "0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671)" }} >
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          <InvoiceTwoData />
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceTwoContent;
