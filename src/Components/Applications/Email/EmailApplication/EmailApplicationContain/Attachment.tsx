import { Href, ImagePath } from "@/Constant";
import { actionWrapperList, attachmentImage } from "@/Data/Applications/Email";
import Image from "next/image";

const Attachment = () => {
  return (
    <>
      <div className="attachment">
        <ul className="list-inline justify-content-start">
          {attachmentImage.map((item, index) => (
            <li className="list-inline-item" key={index}>
              <Image className="img-fluid" src={`${ImagePath}/email/${item}`} width={80} height={80} alt="image" />
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="action-wrapper">
        <ul className="actions">
          {actionWrapperList.map((item, index) => (
            <li key={index}>
              <a className="text-muted" href={Href}>
                <i className={`fa fa-${item.icon} me-2`} />{item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Attachment;