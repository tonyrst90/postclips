import { Badge } from "reactstrap";
import { DesignLearning, Href } from "@/Constant";
import Link from "next/link";
import { designerCategoryData } from "@/Data/Miscellaneous/Learning/Learning";

const DesignCategories = () => {
  return (
    <div className="categories">
      <div className="learning-header">
        <span className="f-w-600">{DesignLearning}</span>
      </div>
      <ul>
        {designerCategoryData.map((data, index) => (
          <li key={index}>
            <Link href={Href}>{data.learningHeading}</Link>
            <Badge color="primary" className="pull-right">{data.badgeNumber}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesignCategories;