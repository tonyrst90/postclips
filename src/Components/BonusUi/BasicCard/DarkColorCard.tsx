import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DarkColorCards, FooterCard, ImagePath } from "@/Constant";
import { darkColorData } from "@/Data/BonusUi/BasicCard";
import Image from "next/image";
import { Card, CardBody, CardFooter, Col } from "reactstrap";

const DarkColorCard = () => {
  const DarkColorText1: string = " — also called smart earbuds or hearable — are high-tech in-ear devices that do more than transmit audio. These headphones are usually wireless, and they can sync up with your phone, tablet, computer or other Bluetooth-enabled device. The main appeal of hearables is convenience, as they allow you to complete common tasks without directly accessing your phone or computer. Smart wireless headphones sync up to other devices using Bluetooth technology, and many of their features rely on data from your smartphone or computer.";

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={DarkColorCards} span={darkColorData} headClass="bg-dark" tagClass="text-white" />
        <CardBody className="bg-dark">
          <div className="d-flex align-items-center gap-3 pills-blogger">
            <div className="blog-wrapper"><Image priority width={100} height={100} className="blog-img" src={`${ImagePath}/dashboard-2/headphones.png`} alt="head-phone" /></div>
            <div className="blog-content">
              <p><em className="txt-danger fw-bold">{'Smart headphones'}</em>{DarkColorText1}</p>
            </div>
          </div>
        </CardBody>
        <CardFooter className="bg-dark"><h6 className="text-white mb-0">{FooterCard}</h6></CardFooter>
      </Card>
    </Col>
  );
};

export default DarkColorCard;