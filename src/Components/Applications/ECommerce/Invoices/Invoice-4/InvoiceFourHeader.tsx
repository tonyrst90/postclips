import { Table } from "reactstrap";
import { Email, Invoice, InvoiceTo, PhoneNumber, Website } from "@/Constant";
import InvoiceRightLogo from "./InvoiceRightLogo";

const InvoiceFourHeader = () => {
  return (
    <td>
      <Table responsive style={{ width: "100%" }} borderless>
        <tbody>
          <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between" }} >
            <td>
              <h4 style={{ fontSize: 42, fontWeight: 600, color: "#003FDD", margin: 0 }} >
                {Invoice}
              </h4>
              <ul style={{ listStyle: "none", gap: 15, padding: 0, margin: "20px 0" }} className="simple-list flex-row">
                <li>
                  <span style={{ fontSize: 18, fontWeight: 600, opacity: "0.8" }} >
                    {InvoiceTo} :
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 600, fontSize: 18, color: "#003FDD",display: "block",marginBottom: 8 }}>
                    Brooklyn Simmons
                  </span>
                  <span style={{ width: "75%", display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400,opacity: "0.8" }} >
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </span>
                  <span style={{lineHeight: "1.9", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }} >
                    {PhoneNumber} : (219) 555-0114
                  </span>
                  <span style={{ lineHeight: "1.7", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }} >
                    {Email} : yourmail@themesforest.com
                  </span>
                  <span style={{ lineHeight: "1.7", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }} >
                    {Website}: www.websites.com
                  </span>
                </li>
              </ul>
            </td>
            <InvoiceRightLogo />
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceFourHeader;
