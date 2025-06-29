import { orderProgressData } from "@/Data/General/Dashboard/EcommerceDashboard";
import { Progress } from "reactstrap";

const OrderProgress = () => {
  return (
    <>
      {orderProgressData.map((data, i) => (
        <div className="progress-value" key={i}>
          <p>
            {data.title}<span>{data.count}</span>
          </p>
          <Progress value={data.value} color={data.color} />
        </div>
      ))}
    </>
  );
};

export default OrderProgress;