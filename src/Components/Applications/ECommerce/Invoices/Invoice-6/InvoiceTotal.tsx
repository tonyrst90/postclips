import { TotalAmount } from "@/Constant";

const InvoiceTotal = () => {
  return (
    <>
      <td />
      <td />
      <td className='Rate'>
        <h3 className='mb-0 p-2'>{TotalAmount}</h3>
      </td>
      <td className='payment'>
        <h3 className='mb-0 p-2'>$3,644.25</h3>
      </td>
    </>
  );
};

export default InvoiceTotal;
