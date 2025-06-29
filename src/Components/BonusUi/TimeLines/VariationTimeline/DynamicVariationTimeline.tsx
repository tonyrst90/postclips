import { ImagePath } from "@/Constant";
import { variationTimeLineDataList } from "@/Data/BonusUi/Timeline";
import Image from "next/image";

export const DynamicVariationTimeline = () => {
  return (
    <>
      {variationTimeLineDataList.map((data, index) => (
        <li className={`d-flex ${data.className}`} key={index}>
          <div className={`activity-dot-${data.color}`}></div>
          <div className="w-100 ms-3">
            <p className="d-flex justify-content-between">
              <span className="date-content light-background txt-dark">{data.date}</span>
              <span>{data.time}</span>
            </p>
            <h6>{data.title}<span className="dot-notification"></span></h6>
            <span className={data.subTitleClass ? data.subTitleClass : ""}>{data.subTitle}</span>
            {data.image && (
              <div className="recent-images mb-2">
                <ul>
                  {data.image.map((item, index) => (
                    <li key={index}>
                      <div className="recent-img-wrap">
                        <Image priority width={38} height={45} src={`${ImagePath}/dashboard-2/product/${item}`} className="me-0" alt="chair" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </li>
      ))}
    </>
  );
};