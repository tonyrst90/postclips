import { useAppSelector } from "@/Redux/Hooks";
import InvoiceOrderAmount from "./InvoiceOrderAmount";
import InvoiceOrderTotal from "./InvoiceOrderTotal";

const InvoiceOrderBody = () => {
    const { cartData } = useAppSelector((state) => state.product);
  return (
    <>
        {cartData.map((data,i)=>(
            <tr style={{ boxShadow: "0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671)", borderRadius: "5.47059px" }} key={i}>
                <td style={{ padding: "18px 15px", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ minWidth: 7, height: 7, border: "4px solid #003FDD", background: "#fff", borderRadius: "100%", display: "inline-block" }} />
                    <span>{data.name}</span>
                </td>
                <td style={{ padding: "18px 15px" }}>
                    <span>${data.price}</span>
                </td>
                <td style={{ padding: "18px 15px" }}>
                    <span>{data.quantity}</span>
                </td>
                <td style={{ padding: "18px 15px", textAlign: "right" }}>
                    <span>${data.price * data.total}</span>
                </td>
            </tr>
        ))}
        <tr>
            <InvoiceOrderTotal />
        </tr>        
        <tr>
            <InvoiceOrderAmount/>
        </tr>
    </>
  );
};

export default InvoiceOrderBody;
