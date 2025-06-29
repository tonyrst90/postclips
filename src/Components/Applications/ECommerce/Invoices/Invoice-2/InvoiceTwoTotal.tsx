import { ShippingRate, SubTotal, TotalAmount, Vat } from "@/Constant";
import { Table } from "reactstrap";

const InvoiceTwoTotal = () => {
  return (
    <td>
      <Table borderless responsive style={{float: "right"}}>
        <tfoot>
          <tr>
            <td style={{ padding: "5px 24px 5px 0", paddingTop: 15, textAlign : "end" }}>
              <span style={{ fontSize: 18, fontWeight: 400 }}>{SubTotal} :</span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 15 }}>
              <span style={{fontSize: 18}}>$26,400.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "5px 24px 5px 0",textAlign : "end" }}>
              <span style={{ fontSize: 18, fontWeight: 400 }}>{Vat} (0%) :</span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 0}} >
              <span style={{fontSize: 18}}>$0.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "5px 24px 5px 0", textAlign : "end" }}>
              <span style={{ fontSize: 18, fontWeight: 400 }}> {ShippingRate} : </span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 0 }} >
              <span style={{fontSize: 18}}>$10.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "12px 24px 22px 0", textAlign: "end"}}>
              <span style={{ fontWeight: 600, fontSize: 20}}>
                {TotalAmount} :
              </span>
            </td>
            <td style={{ padding: "12px 24px 22px 0", textAlign: "right" }} >
              <span style={{ fontWeight: 500, fontSize: 20, color: "#003FDD" }} >
                $26,410.00
              </span>
            </td>
          </tr>
        </tfoot>
      </Table>
    </td>
  );
};

export default InvoiceTwoTotal;
