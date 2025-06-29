import { Badge } from "reactstrap";
import { DevelopmentTitle, Href } from "@/Constant";
import Link from "next/link";
import { developmentData } from "@/Data/Miscellaneous/Learning/Learning";

const DevelopmentCategories = () => {
  return (
    <div className="categories pt-0">
      <div className="learning-header">
        <span className="f-w-600">{DevelopmentTitle}</span>
      </div>
      <ul>
        {developmentData.map((data, index) => (
          <li key={index}>
            <Link href={Href}>{data.DevelopmentHeading}</Link>
            <Badge color="primary" className="pull-right">{data.badgeNumber}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevelopmentCategories;