import { infoColorHeaderData } from "@/Data/BonusUi/BasicCard";
import CommonCard from "./Common/CommonCard";

const InfoColorHeader = () => {
  return (
    <>
      {infoColorHeaderData.map((item, index) => (
        <CommonCard key={index} data={item} />
      ))}
    </>
  );
};

export default InfoColorHeader;