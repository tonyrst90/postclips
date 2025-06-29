import { ImagePath } from "@/Constant";
import { topProductBodyData } from "@/Data/General/Dashboard/EcommerceDashboard";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "reactstrap";

const TopProductBody = () => {
  return (
    <div className="d-flex">
      {topProductBodyData.map((data, i) => (
        <div className="card-product" key={i}>
          <Link href={'/app/ecommerce/product'}>
            <span>
              <Image src={`${ImagePath}/dashboard-2/product/${data.image}`} width={144} height={222} alt="product" />
            </span>
            {data.status && <Badge color={data.color}>{data.status}</Badge>}
            {/* <div className="details-product">
              <h6>{data.productName}</h6>
              <div className="price-product">
                {data.amount}
                <del>{data.mainAmount}</del>
              </div>
            </div> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopProductBody;