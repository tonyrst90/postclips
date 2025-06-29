import { AmountDus, BilledTo, Dollar, InvoiceDate, InvoiceNumber } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { ProductDataTypes } from "@/Types/ECommerce.type";
import { Table } from "reactstrap";

const InvoiceContent = () => {
  const { cartData } = useAppSelector((state) => state.product);
  const getCartTotal = (item: ProductDataTypes) => {
    if (item.quantity) {
      return item.quantity * item.price;
    }
    return 0;
  };
  return (
    <td>
      <Table className='bill-content w-100'>
        <tbody>
          <tr>
            <td style={{ width: "36%" }}>
              <span style={{ opacity: "0.8" }}>{BilledTo}</span>
              <h6 style={{ width: "46%" }}>PostClips Matchett Vandelay Group LTD</h6>
            </td>
            <td style={{ width: "21%" }}>
              <span style={{ opacity: "0.8" }}>{InvoiceDate}</span>
              <h6>09/03/2024</h6>
            </td>
            <td>
              <span style={{ opacity: "0.8" }}>{InvoiceNumber}</span>
              <h6>#VL25000365</h6>
            </td>
            <td style={{ textAlign: "right" }}>
              <span style={{ opacity: "0.8" }}>{AmountDus}</span>
              <h2>
                {Dollar}
                {cartData.reduce((total, item) => total + getCartTotal(item), 0)}
              </h2>
            </td>
          </tr>
          <tr>
            <td style={{ width: "36%" }}>
              <h6 style={{ width: "63%", paddingTop: 20 }}>{"2118 Thornridge Cir. Syracuse, Connecticut 35624, United State"}</h6>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceContent;
