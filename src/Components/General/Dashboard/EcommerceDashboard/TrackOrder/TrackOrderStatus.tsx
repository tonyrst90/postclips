import { ImagePath } from "@/Constant";
import { trackOrderStatusData } from "@/Data/General/Dashboard/EcommerceDashboard";
import Link from "next/link";

const TrackOrderStatus = () => {
  return (
    <ul className="track-order">
      {trackOrderStatusData.map((data, i) => (
        <li key={i}>
          <div className="d-flex">
            <div className={`flex-shrink-0 bg-${data.color}`}>
              <img src={`${ImagePath}/dashboard-2/product/${data.image}`}  alt="product" />
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between">
                <Link href={'/app/ecommerce/product'}>
                  <h6>{data.title}</h6>
                  <p className="text-truncate">{data.detail}</p>
                </Link>
                <span className={`font-${data.color} f-w-500`}>{data.date}</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TrackOrderStatus;