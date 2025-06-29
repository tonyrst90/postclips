import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { DarkVariants, ImagePath } from "@/Constant";
import { darkVariantData, darkVariantDataList } from "@/Data/BonusUi/OwlCarousel";
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DarkVariant = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Col xl="6" sm="12">
      <Card>
        <CommonCardHeader title={DarkVariants} span={darkVariantData} />
        <CardBody>
          <div className="carousel-dark">
            <Swiper modules={[Navigation, Autoplay, Pagination]} navigation pagination={{ clickable: true }} loop slidesPerView={1} autoplay={{ delay: 2000 }} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
              {darkVariantDataList?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                    <RatioImage className="d-block w-100" src={`${ImagePath}/${slide.image}`} alt="drawing-room" />
                    <div className="carousel-caption d-none d-md-block carousel-opacity">
                      <h3>{slide.captionHeader}</h3>
                      <p>{slide.captionText}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkVariant;
