import { invoiceSixTable } from "@/Data/Applications/ECommerce/Invoice";

const InvoiceSixTableHeader = () => {
  return (
    <>
      {invoiceSixTable.map((data, i) => (
        <td className='item' key={i}>
          <h3 className='p-2 mb-0'>{data}</h3>
        </td>
      ))}
    </>
  );
};

export default InvoiceSixTableHeader;
