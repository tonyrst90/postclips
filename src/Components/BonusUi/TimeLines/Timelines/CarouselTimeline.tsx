import {  DesignerTitle, ImagePath } from "@/Constant";
import { CarouselDataList } from "@/Data/BonusUi/Timeline";
import { Badge } from "reactstrap";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const CarouselTimeline = () => {
  const CarouselSpanText: string = "Spend some time looking up current design trend.";

  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-picture bg-success bounce-in">
        <i className="icon-image" />
      </div>
      <div className="cd-timeline-content bounce-in">
        <div className="timeline-wrapper">
          <Badge color="info">{DesignerTitle}</Badge>
        </div>
        <h4 className="m-0 vertical-timeline-element-subtitle">Research about most recent design trends.</h4>
        <p className="mb-0">{CarouselSpanText}</p>
        <Swiper width={615} modules={[Pagination, Navigation]} navigation pagination={{ clickable: true }} loop={true} slidesPerView={"auto"}>
          {CarouselDataList.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={`${ImagePath}/${item.image}`} alt={`carousel-item-${index}`} className="d-block" width={615} height={313} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default CarouselTimeline;
