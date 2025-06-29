import { Href, ImagePath } from "@/Constant"
import { customList } from "@/Data/UiKits/Lists"
import Image from "next/image"
import { ListGroupItem } from "reactstrap"

const DynamicCustomContentList = () => {
  return (
    <>
      {customList.map(({ src, title, mail, days, text, smallText }, index) => (
        <ListGroupItem tag="a" href={Href} className="list-group-item-action list-hover-primary" key={index}>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="list-wrapper">
              <Image priority width={55} height={55} className="list-img" src={`${ImagePath}/${src}`} alt="profile" />
              <div className="list-content">
                <h6>{title}</h6>
                <p>{mail}</p>
              </div>
            </div>
            <small>{days}</small>
          </div>
          <p className="mb-1">{text}</p>
          <small className="txt-black">{smallText}</small>
        </ListGroupItem>
      ))}
    </>
  )
}

export default DynamicCustomContentList