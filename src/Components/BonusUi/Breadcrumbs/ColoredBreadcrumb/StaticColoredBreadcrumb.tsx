import { BreadcrumbBonusUi, BreadcrumbHome, BreadcrumbsTag, Href } from "@/Constant";
import { BreadcrumbItem } from "reactstrap";

export const StaticColoredBreadcrumb = () => {
  return (
    <ol className="breadcrumb breadcrumb-colored m-b-30 bg-primary">
      <BreadcrumbItem><a className="fw-bold" href={Href}>{BreadcrumbHome}</a></BreadcrumbItem>
      <BreadcrumbItem><a className="fw-bold" href={Href}>{BreadcrumbBonusUi}</a></BreadcrumbItem>
      <BreadcrumbItem active className="fw-bold">{BreadcrumbsTag}</BreadcrumbItem>
    </ol>
  );
};