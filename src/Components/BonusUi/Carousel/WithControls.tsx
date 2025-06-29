import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, WithControl } from "@/Constant";
import { withControlData, withControlDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const WithControls = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithControl} span={withControlData} />
        <CardBody>
          <Swiper modules={[Navigation, Autoplay]} navigation spaceBetween={30} slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
            {withControlDataList?.map((item, index) => (
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

export default WithControls;