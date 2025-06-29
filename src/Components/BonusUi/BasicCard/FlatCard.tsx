import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FlatCards } from "@/Constant";
import { flatCardData } from "@/Data/BonusUi/BasicCard";
import { Card, CardBody, Col } from "reactstrap";

const FlatCard = () => {
  const FlatCardText1: string = "A navigation bar is a particularly important feature because it allows visitors to quickly and easily find";
  const FlatCardTextEm: string = " important pages on your website";
  const FlatCardText2: string = " , like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.";

  return (
    <Col sm={12} xl={6}>
      <Card className="b-r-0">
        <CommonCardHeader title={FlatCards} span={flatCardData} />
        <CardBody>
          <p className="mb-0">
            {FlatCardText1}<em className="txt-danger">{FlatCardTextEm}</em>{FlatCardText2}
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlatCard;