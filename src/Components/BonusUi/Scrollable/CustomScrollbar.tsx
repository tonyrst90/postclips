import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomScrollbars, ImagePath } from "@/Constant";
import { customScroll } from "@/Data/BonusUi/Scrollable";
import Image from "next/image";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col } from "reactstrap";

const CustomScrollbar = () => { 
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={CustomScrollbars} span={customScroll} headClass="pb-0" />
        <CardBody>
          <ScrollBar style={{ width: "100%", height: "300px" }} className="vertical-scroll scroll-demo">
            <h3 className="pb-2">{CustomScrollbars}</h3>
            <p>{`I'm quite interested in learning more about `}<em className="txt-danger">custom scrollbars</em> because they are becoming more and more common.</p>
            <div className="scrollbar-images">
              <Image priority width={731}  height={485} className="img-fluid" src={`${ImagePath}/banner/1.jpg`} alt="banner" />
            </div>
            <p>{`There are various justifications for customizing a scrollbar. For instance, the default scrollbar can cause an app's user interface to look inconsistent across various operating systems. In this case, having a single style is helpful.`}</p>
            <p>{`I never had the opportunity to learn about CSS scrollbar customization, but I have always been interested in doing so. I'll take the chance to learn more about them and share my trip in this essay.`}</p>
            <p>One crucial point to remember is that, depending on the design, a scrollbar may operate either <em className="txt-danger">horizontally or vertically</em> . Additionally, it might alter when you work on a website that is global and operates in both left-to-right and right-to-left orientations.</p>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomScrollbar;
