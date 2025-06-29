import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { messageData } from "@/Data/Layout/Header";
import Image from "next/image";
import Link from "next/link";
import { X } from "react-feather";
import { Badge } from "reactstrap";

const HeaderMessage = () => {
  return (
    <li className="onhover-dropdown">
      <div className="message">
        <SVG iconId="fill-message" />
        <Badge pill color="secondary">{'4'}</Badge>
      </div>
      <div className="onhover-show-div message-dropdown">
        <h6 className="f-18 mb-0 dropdown-title">{'Messages'}</h6>
        <ul>
          {messageData.map((item, index) => (
            <li key={index}>
              <div className="d-flex align-items-start">
                <div className="message-img bg-light-primary">
                  <Image src={`${ImagePath}/user/${item.image}`} width={40} height={40} alt="" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-1">
                    <Link href={`/app/email/letter_box`}>{item.userName}</Link>
                  </h5>
                  <p>{item.statusClass}</p>
                </div>
                <div className="notification-right"><X /></div>
              </div>
            </li>
          ))}
          <li><Link className="f-w-700" href={`/chat/private_chat`}>{'Check all'}</Link></li>
        </ul>
      </div>
    </li>
  );
};
export default HeaderMessage;