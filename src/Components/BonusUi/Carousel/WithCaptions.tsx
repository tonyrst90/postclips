import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, WithCaption } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import RatioImage from "@/CommonComponent/RatioImage";
import { useState } from "react";
 import { withCaptionData, withCaptionDataList } from "@/Data/BonusUi/OwlCarousel";
const WithCaptions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithCaption} span={withCaptionData} />
        <CardBody className="mt-2 mb-3">
          <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop slidesPerView={1} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
            {withCaptionDataList?.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <RatioImage className="d-block w-100" src={`${ImagePath}/${slide.image}`} alt="drawing-room" />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>{slide.captionHeader}</h3>
                    <p>{slide.captionText}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithCaptions;
