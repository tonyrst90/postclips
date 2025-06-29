import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { AutoPlayVariants, ImagePath } from "@/Constant";
import { autoPlayData, autoPlayDataList } from "@/Data/BonusUi/OwlCarousel";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AutoPlayVariant = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={AutoPlayVariants} span={autoPlayData} />
        <CardBody>
          <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper swiper-h">
            {autoPlayDataList.map((item, index) => (
              <SwiperSlide key={index}>
                <RatioImage src={`${ImagePath}/${item.image}`} className="d-block w-100" alt="Vertical_Slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoPlayVariant;
