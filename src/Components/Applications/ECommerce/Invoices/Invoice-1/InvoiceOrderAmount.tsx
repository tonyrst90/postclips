import { Dollar } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { ProductDataTypes } from "@/Types/ECommerce.type";

 

const InvoiceOrderAmount = () => {
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
      <td style={{ padding: "10px 0" }}>
        <span style={{ fontWeight: 600 }}>Amount Due (USD)</span>
      </td>
      <td style={{ padding: "10px 0", textAlign: "right" }}>
        <span style={{ fontWeight: 600 }}>{Dollar}
        {cartData.reduce((total, item) => total + getCartTotal(item), 0)}</span>
      </td>
    </>
  );
};

export default InvoiceOrderAmount;
