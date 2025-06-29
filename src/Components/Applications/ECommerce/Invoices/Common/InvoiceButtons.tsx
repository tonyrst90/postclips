import { Href } from "@/Constant";
import { InvoicePrintType } from "@/Types/ECommerce.type";
import Link from "next/link";
import React from "react";

const InvoiceButtons: React.FC<InvoicePrintType> = ({ handlePrint }) => {
  return (
    <span style={{ display: "flex", justifyContent: "center", gap: 15 }} className='mb-3'>
      <Link onClick={handlePrint} style={{ background: "#003FDD", color: "rgba(255, 255, 255, 1)", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} href={Href}>
        {"PrintInvoice"}
        <i className='icon-arrow-right' style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }} />
      </Link>
      <Link style={{ background: "rgba(92, 97, 242, 0.1)", color: "#003FDD", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} href={Href} download>
        {"Cancel"}
        <i className='icon-arrow-right' style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }} />
      </Link>
    </span>
  );
};

export default InvoiceButtons;
