import { Dollar, SubTotal } from "@/Constant";
import { getallCardTotal } from "@/Helper/Ecommerce.service";
import { useAppSelector } from "@/Redux/Hooks";
import { ProductDataTypes } from "@/Types/ECommerce.type";
 

const InvoiceOrderTotal = () => {
  const { cartData } = useAppSelector((state) => state.product);
  const getCartTotal = (item: ProductDataTypes) => {
    if (item.quantity) {
      return item.quantity * item.price;
    }
    return 0;
  };
  return (
    <>
      <td> </td>
      <td> </td>
      <td style={{ padding: "5px 0", paddingTop: 15 }}>
        <span>{SubTotal}</span>
      </td>
      <td style={{padding: "5px 0", textAlign: "right", paddingTop: 15 }} >
        <span> {Dollar} {cartData.reduce((total, item) => total + getCartTotal(item), 0)}</span>
      </td>
    </>
  );
};

export default InvoiceOrderTotal;
