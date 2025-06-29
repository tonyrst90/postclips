import { groupChatHeader } from "@/Data/Applications/Chat";
import ContactEdit from "../PrivateChat/UserChat/ContactEdit";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const RightGroupChatHeader = () => {
  return (
    <div className="right-sidebar-title">
      <div className="common-space">
        <div className="chat-time group-chat">
          <ul>
            {groupChatHeader.map((data, i) => (
              <li key={i}>
                <Image className="img-fluid rounded-circle" src={`${ImagePath}/${data}`} width={32} height={32} alt="user" />
              </li>
            ))}
            <li>
              <div className="custom-name profile-count light-background">
                <p className="f-w-500">{'9+'}</p>
              </div>
            </li>
          </ul>
          <div>
            <span>{'Meeting Department'}</span>
            <p>{'35 Members'}</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="contact-edit chat-alert"><i className="icon-info-alt" /></div>
          <ContactEdit dropClass="chat-alert" />
        </div>
      </div>
    </div>
  );
};
export default RightGroupChatHeader;