import { Description, LineTotal, Qty, Rate } from "@/Constant";

const InvoiceOrderHeader = () => {
  return (
    <tr
      style={{
        background: "#003FDD",
        borderRadius: "5.47059px",
        overflow: "hidden",
        boxShadow:
          "0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671)",
      }}
    >
      <th
        style={{
          padding: "18px 15px",
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
          textAlign: "left",
        }}
      >
        <span style={{ color: "#fff" }}>{Description}</span>
      </th>
      <th style={{ padding: "18px 15px", textAlign: "left" }}>
        <span style={{ color: "#fff" }}>{Rate}</span>
      </th>
      <th style={{ padding: "18px 15px", textAlign: "left" }}>
        <span style={{ color: "#fff" }}>{Qty}</span>
      </th>
      <th
        style={{
          padding: "18px 15px",
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          textAlign: "right",
        }}
      >
        <span style={{ color: "#fff" }}>{LineTotal}</span>
      </th>
    </tr>
  );
};

export default InvoiceOrderHeader;
