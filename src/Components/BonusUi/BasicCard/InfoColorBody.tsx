import { infoColorBodyData } from "@/Data/BonusUi/BasicCard"
import CommonCard from "./Common/CommonCard"

const InfoColorBody = () => {
  return (
    <>
      {infoColorBodyData.map((item, index) => (
        <CommonCard key={index} data={item} />
      ))}
    </>
  )
}

export default InfoColorBody