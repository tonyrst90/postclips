import { infoColorFooterData } from "@/Data/BonusUi/BasicCard"
import CommonCard from "./Common/CommonCard"

const InfoColorFooters = () => {
  return (
    <>
      {infoColorFooterData.map((item, index) => (
        <CommonCard key={index} data={item} />
      ))}
    </>
  )
}

export default InfoColorFooters