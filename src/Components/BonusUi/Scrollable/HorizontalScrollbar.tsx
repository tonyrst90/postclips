import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HorizontalScrollbars, ImagePath } from "@/Constant";
import { horizontalScrollData, horizontalScrollDataList } from "@/Data/BonusUi/Scrollable";
import Image from "next/image";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, Row } from "reactstrap";

const HorizontalScrollbar = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={HorizontalScrollbars} span={horizontalScrollData} />
        <CardBody>
          <ScrollBar className="horizontal-scroll scroll-demo" style={{ width: "100%", height: "300px" }}>
            <div className="horz-scroll-content" style={{width: "1600px"}}>
              <Row>
                <Col sm={2}>
                  <div className="horizontal-img"><Image priority width={240} height={360} className="img-fluid" src={`${ImagePath}/scrollbar/fashion1.jpg`} alt="girl" /></div>
                </Col>
                {horizontalScrollDataList.map((src, index) => (
                  <Col sm={2} key={index}>
                    <div className="horizontal-img"><Image priority width={240} height={360} className="img-fluid" src={`${ImagePath}/${src}`} alt="girl" /></div>
                  </Col>
                ))}
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalScrollbar;