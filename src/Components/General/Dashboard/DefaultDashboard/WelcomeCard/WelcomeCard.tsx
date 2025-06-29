import { ImagePath } from "@/Constant";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";
import ClockBox from "./ClockBox";
import Image from "next/image";

const WelcomeCard = () => {
  return (
    <Col lg={4} xl={4} md={7} className="box-col-4">
      <Card className="welcome-card">
        <CardBody>
          <div className="d-flex">
            <div className="flex-grow-1">
              <h1>Hello,Anna Miller.</h1>
              <p>
                Welcome to the Admin clan! We appreciate your interest in our dashboard.
              </p>
              <Link className="btn" href={`/app/ecommerce/product_list`}>{'Go Premium'}</Link>
            </div>
            <div className="flex-shrink-0">
              <Image src={`${ImagePath}/dashboard/welcome.png`} alt="welcomeCard" width={341} height={290} />
            </div>
            <ClockBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WelcomeCard;