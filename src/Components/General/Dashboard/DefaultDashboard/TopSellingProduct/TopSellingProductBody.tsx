import { ImagePath } from "@/Constant";
import { topSellingProductBodyData } from "@/Data/General/Dashboard/DefaultDashboard";
import Image from "next/image";
import Link from "next/link";

const TopSellingProductBody = () => {
  return (
    <>
      {topSellingProductBodyData.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex">
              <span className={`bg-light-${data.color}`}>
                <Image src={`${ImagePath}/dashboard/product/${data.image}`} width={32} height={32} alt="product" />
              </span>
              <div className="flex-grow-1 ms-2">
                <Link href={'/app/ecommerce/product_list'}>
                  <span>{data.productName}</span>
                  <h5>{data.id}</h5>
                </Link>
              </div>
            </div>
          </td>
          <td>
            <span>Coupon code</span>
            <h5>{data.couponCode}</h5>
          </td>
          <td>
            <Image src={`${ImagePath}/dashboard/flag/${data.image}`} width={18} height={15} alt="product" />
          </td>
          <td>
            <span>{data.percentage}%</span>
            <h5>${data.amount}</h5>
          </td>
        </tr>
      ))}
    </>
  );
};
export default TopSellingProductBody;