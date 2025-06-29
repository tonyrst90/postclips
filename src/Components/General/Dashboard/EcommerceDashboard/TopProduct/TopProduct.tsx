import { Card, CardBody, Col } from "reactstrap";
import TopProductBody from "./TopProductBody";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { TopProductHeading } from "@/Constant";

const TopProduct = () => {
  return (
    <Col xxl={5} xl={4} lg={4} className="box-col-4">
      <Card className="product-card">
        <DashboardCommonHeader cardClass="pb-0" title={"Best Performing Videos"} />
        <CardBody>
          <p>According to overall views, the top 4 this week</p>
          <TopProductBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopProduct;