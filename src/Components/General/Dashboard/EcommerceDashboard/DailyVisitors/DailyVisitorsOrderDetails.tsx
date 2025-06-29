import { Col } from "reactstrap";
import OrderProgress from "./OrderProgress";
import { dailyVisitorsOrderData } from "@/Data/General/Dashboard/EcommerceDashboard";

const DailyVisitorsOrderDetails = () => {
  return (
    <Col md={4} xl={4} className="ecommerce-chart daily-visitors">
      <div className="d-flex">
        {dailyVisitorsOrderData.map((data, i) => (
          <div className={`flex-shrink-0 bg-light-${data.color} ${data.class ? data.class : ''}`} key={i}>
            <div className="deals">
              <h4>{data.count}</h4>
              <span>{data.title}</span>
            </div>
          </div>
        ))}
      </div>
      <OrderProgress />
    </Col>
  );
};

export default DailyVisitorsOrderDetails;