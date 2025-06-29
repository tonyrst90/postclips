import { Table } from "reactstrap";
import { ClientDetails,  PhoneNumber, ShippingAddress } from "@/Constant";

const InvoiceClientDetail = () => {
  return (
    <td>
      <Table responsive style={{ width: "100%" }} borderless>
        <tbody>
          <tr style={{ padding: "28px 0", display: "flex", justifyContent: "space-between" }} >
            <td>
              <span style={{ fontSize: 16, fontWeight: 500, opacity: "0.8" }}>
                {ClientDetails}
              </span>
              <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 18, color: "#003FDD"}} >
                Brooklyn Simmons
              </h4>
              <span style={{ width: "54%", display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8"}}>
                2118 Thornridge Cir. Syracuse, Connecticut 35624, United State
              </span>
              <span style={{ lineHeight: 2, fontSize: 18, fontWeight: 400, opacity: "0.8"}}>
                {PhoneNumber} : (239) 555-0108
              </span>
            </td>
            <td>
              <span style={{ fontSize: 16, fontWeight: 500, opacity: "0.8" }} >
                {ShippingAddress}
              </span>
              <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 18, color: "#003FDD" }}>
                Brooklyn Simmons
              </h4>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8"}} >
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </span>
              <span style={{ lineHeight: 2, fontSize: 18, fontWeight: 400, opacity: "0.8" }} >
                {PhoneNumber} : (219) 555-0114
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceClientDetail;
