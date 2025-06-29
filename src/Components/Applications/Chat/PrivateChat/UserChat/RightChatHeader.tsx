import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import ContactEdit from "./ContactEdit";

const RightChatHeader = () => {
  const {selectedUser} = useAppSelector((state)=> state.chat)
  
  return (
    <div className="right-sidebar-title">
      <div className="common-space">
        <div className="chat-time">
          <div className="active-profile">
            <Image className="img-fluid rounded-circle" src={`${ImagePath}/${selectedUser?.image ? `${selectedUser?.image}` : "blog/comment.jpg"}`} width={42} height={42} alt="user"/>
            <div className="status bg-success" />
          </div>
          <div>
            <span>{selectedUser?.name ? selectedUser?.name : "Darrell Steward"}</span>
            <p>Online</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="contact-edit chat-alert">
            <i className="icon-info-alt" />
          </div>
          <ContactEdit dropClass="chat-alert"  />
        </div>
      </div>
    </div>
  );
};

export default RightChatHeader;