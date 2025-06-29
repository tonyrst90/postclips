import { Table } from "reactstrap";
import { BillingAddress, PhoneNumber, ShippingAddress } from "@/Constant"; 

const InvoiceTwoBilling = () => {
  return (
    <td>
      <Table responsive style={{ width: "100%" }} borderless>
        <tbody>
          <tr style={{ padding: "28px 0", display: "block" }}>
            <td style={{ width: "63%" }}>
              <span style={{ opacity: "0.8", fontSize: 16, fontWeight: 500 }}>
                {BillingAddress}
              </span>
              <h4 style={{ fontWeight: 400, margin: "12px 0 6px 0", fontSize: 18 }} >
                Brooklyn Simmons
              </h4>
              <span style={{ width: "54%", display: "block", lineHeight: "1.5", opacity: "0.8", fontSize: 18, fontWeight: 400 }} >
                2118 Thornridge Cir. Syracuse, Connecticut 35624, United State
              </span>
              <span style={{ lineHeight: "2.6", opacity: "0.8", fontSize: 18, fontWeight: 400 }} >
                {PhoneNumber} : (239) 555-0108
              </span>
            </td>
            <td>
              <span style={{ opacity: "0.8", fontSize: 16, fontWeight: 500 }} >
                {ShippingAddress}
              </span>
              <h4 style={{ fontWeight: 400, margin: "12px 0 6px 0", fontSize: 18}} >
                Cameron Williamson
              </h4>
              <span style={{ width: "95%", display: "block", lineHeight: "1.5", opacity: "0.8", fontSize: 18, fontWeight: 400 }}>
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </span>
              <span style={{ lineHeight: "2.6", opacity: "0.8", fontSize: 18, fontWeight: 400 }}>
                {PhoneNumber} : (219) 555-0114
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceTwoBilling;
