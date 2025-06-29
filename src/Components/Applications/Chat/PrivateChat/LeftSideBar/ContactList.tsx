import { ImagePath } from "@/Constant";
import { contactWrapperData } from "@/Data/Applications/Chat";
import Image from "next/image";
import { Fragment } from "react";
import ContactEdit from "../UserChat/ContactEdit";

export const ContactList = () => {
  return (
    <div className="contact-wrapper">
      <>
        {contactWrapperData.map((data, index) => (
          <Fragment key={index}>
            <p>{data.mainLetter}</p>
            {data.contactData.map((item, i) => (
              <ul className="border-0" key={i}>
                <li className="common-space">
                  <div className="chat-time">
                    {item.image && <Image className="img-fluid rounded-circle" src={`${ImagePath}/${item.image}`} width={42} height={42} alt="user" />}
                    {item.imageUser && (
                      <div className={`custom-name bg-light-${item.color}`}> <p className={`txt-${item.color} f-w-500`}>{item.imageUser}</p></div>
                    )}
                    <div>
                      <span>{item.name}</span>
                      <p>{item.phoneNumber}</p>
                    </div>
                  </div>
                  <ContactEdit />
                </li>
              </ul>
            ))}
          </Fragment>
        ))}
      </>
    </div>
  );
};