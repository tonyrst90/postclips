import { socialData } from "@/Data/BonusUi/Tour";
import { CommonTourSocialMediaProp } from "@/Types/BonusUi.type";
import Link from "next/link";
import { List, ListInlineItem } from "reactstrap";

const CommonTourSocialMedia: React.FC<CommonTourSocialMediaProp> = ({ time, className }) => {
  return (
    <div className={`social-media ${time ? "social-tour" : ""} ${className ? className : ""}`}>
      <List type="inline" className="align-items-center">
        {socialData.map(({ href, icon }, index) => (
          <ListInlineItem key={index}>
            <Link href={href} target="_blank">
              <i className={`fa fa-${icon}`}></i>
            </Link>
          </ListInlineItem>
        ))}
        {time && (
          <div className="float-sm-end">
            <small>{time}</small>
          </div>
        )}
      </List>
    </div>
  );
};

export default CommonTourSocialMedia;