import { invoiceHeaderData } from "@/Data/Applications/ECommerce/Invoice";

const TableHeader = () => {
  return (
    <>
      {invoiceHeaderData.map((data,i)=>(
        <th style={{ padding: "18px 15px", textAlign: "left" }} key={i}>
          <span style={{ color: "#fff", fontSize: 18 }}>{data}</span>
        </th>
      ))}
    </>
  );
};

export default TableHeader;
