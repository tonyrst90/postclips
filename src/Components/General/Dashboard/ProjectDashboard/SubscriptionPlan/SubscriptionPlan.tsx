import { ImagePath } from "@/Constant";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const SubscriptionPlan = () => {
  return (
    <Col xl={3} lg={5} md={5}>
      <Card className="upgrade-card">
        <CardBody>
          <div className="d-flex">
            <div className="flex-grow-1">
              <h4>{'Upgrade Your Subscription Plan'}</h4>
              <p>{'The goal of this message is to welcome you to our app.'}</p>
              <Link className="btn btn-primary" href={"/app/ecommerce/product_list"}>
                {'Go Premium'}
              </Link>
            </div>
            <div className="flex-shrink-0">
              <Image src={`${ImagePath}/dashboard-3/upgrade.png`} width={200} height={214} alt="user" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SubscriptionPlan;