import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, SlideOnly } from "@/Constant";
import { slidesOnlyData, slidesOnlyDataList } from "@/Data/BonusUi/OwlCarousel";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const SlidesOnly = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={SlideOnly} span={slidesOnlyData} />
        <CardBody>
          <Swiper modules={[Autoplay]} spaceBetween={10} slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
            {slidesOnlyDataList?.map((item, index) => (
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

export default SlidesOnly;
