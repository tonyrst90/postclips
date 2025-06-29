import { ImagePath } from "@/Constant";
import Image from "next/image";
import Link from "next/link";

const TrackOrderPlace = () => {
  return (
    <div className="order-place">
      <div className="d-flex">
        <div className="flex-shrink-0">
          <Image src={`${ImagePath}/dashboard-2/product/headphone.png`} width={42} height={42} alt="product" />
        </div>
        <div className="flex-grow-1">
          <Link href={'/app/ecommerce/product'}>
            <h6 className="f-w-500">Wired Headphones with Mic (Black)</h6>
            <h5 className="font-primary f-w-600 mt-1">$27.93</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPlace;