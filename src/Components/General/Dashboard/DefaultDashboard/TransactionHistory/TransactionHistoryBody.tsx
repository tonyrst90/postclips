import SVG from "@/CommonComponent/SVG";
import { transactionHistoryBodyData } from "@/Data/General/Dashboard/DefaultDashboard";
import Link from "next/link";

const TransactionHistoryBody = () => {
  return (
    <>
      {transactionHistoryBodyData.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex">
              <span className={`bg-light-${data.color} history`}>
                <SVG iconId={data.icon} />
              </span>
              <div className="flex-grow-1 ms-2">
                <Link href={'/app/ecommerce/product_list'}>
                  <span>{data.title}</span>
                  <h5>{data.date}</h5>
                </Link>
              </div>
            </div>
          </td>
          <td>{data.status}</td>
          <td>{data.amount}</td>
        </tr>
      ))}
    </>
  );
};
export default TransactionHistoryBody;