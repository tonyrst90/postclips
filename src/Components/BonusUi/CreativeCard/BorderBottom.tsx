import { Card, CardBody, Col } from "reactstrap";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";
import { BottomBorder } from "@/Constant";
import { borderBottomData } from "@/Data/BonusUi/CreativeCard";

const BorderBottom = () => {
  const BorderBottomText1: string = "A navigation bar is a particularly important feature because it allows visitors to quickly and easily find";
  const BorderBottomTextEm: string = " important pages on your website";
  const BorderBottomText2: string = " , like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.";

  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonCreativeCardHeader headerClass="border-b-info" title={BottomBorder} span={borderBottomData} />
        <CardBody>
          <p className="mb-0">{BorderBottomText1}<em className="txt-danger">{BorderBottomTextEm}</em>{BorderBottomText2}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderBottom;