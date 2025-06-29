import { AskOurCommunity, FaqContactUs, Href } from "@/Constant";
import { askQuestionData } from "@/Data/Miscellaneous/Faq/Faq";
import Link from "next/link";
import { Mail, MessageCircle } from "react-feather";
import { Badge } from "reactstrap";

const NavigationOption = () => {
  return (
    <div className="navigation-option">
      <ul>
        {askQuestionData.map((item, i) => (
          <li key={i}>
            <Link href={Href}>{item.icon}{item.title}</Link>
            {item.val && <Badge color="primary" className='pull-right' pill>{item.val}</Badge>}
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        <li><Link href={Href}><MessageCircle />{AskOurCommunity}</Link></li>
        <li><Link href={Href}><Mail />{FaqContactUs}</Link></li>
      </ul>
    </div>
  );
};

export default NavigationOption;