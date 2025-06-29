import { Card, CardBody, Col } from "reactstrap";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";
import { TopBorder } from "@/Constant";
import { borderTopData } from "@/Data/BonusUi/CreativeCard";

const BorderTop = () => {
  const BorderTopText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BorderTopTextEm: string = "“module tabs”";
  const BorderTopText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  return (
    <Col sm={12} md={6}>
      <Card className="b-t-0">
        <CommonCreativeCardHeader headerClass="border-t-danger" title={TopBorder} span={borderTopData} />
        <CardBody>
          <p className="mb-0">{BorderTopText1}<em className="txt-danger">{BorderTopTextEm}</em>{BorderTopText2}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderTop;