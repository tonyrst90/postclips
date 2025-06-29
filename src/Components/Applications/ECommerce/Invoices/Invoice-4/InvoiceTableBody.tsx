import { invoiceFourData } from "@/Data/Applications/ECommerce/Invoice";

const InvoiceTableBody = () => {
  return (
    <>
      {invoiceFourData.map((data, i) => (
        <tr key={i}>
          <td style={{ padding: 30, border: 0 }}>
            <h4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "#003FDD" }}>{data.title}</h4>
            <span style={{ opacity: "0.8", fontSize: 18 }}>{data.detail}</span>
          </td>
          <td style={{ width: "12%", textAlign: "center", border: 0 }}>
            <span style={{ opacity: "0.8" }}>${data.price}.00</span>
          </td>
          <td style={{ width: "12%", textAlign: "center", border: 0 }}>
            <span style={{ opacity: "0.8" }}>{data.quantity}</span>
          </td>
          <td style={{ width: "12%", textAlign: "center", border: 0 }}>
            <span style={{ color: "#003FDD", fontWeight: 600, opacity: "0.9" }}>${data.total}.00</span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default InvoiceTableBody;
