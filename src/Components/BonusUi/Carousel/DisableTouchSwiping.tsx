import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DisableTouchSwipingTitle, ImagePath } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RatioImage from "@/CommonComponent/RatioImage";
import { disableTouchData, disableTouchDataList } from "@/Data/BonusUi/OwlCarousel";
const DisableTouchSwiping = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={DisableTouchSwipingTitle} span={disableTouchData} />
        <CardBody>
          <Swiper modules={[Navigation]} navigation loop slidesPerView={1} simulateTouch={false}>
            {disableTouchDataList?.map((item, index) => (
              <SwiperSlide key={index}>
                <RatioImage className="d-block w-100" src={`${ImagePath}/${item.image}`} alt="drawing-room" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisableTouchSwiping;
