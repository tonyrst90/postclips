import { Href } from "@/Constant";
import { coloredBreadcrumbDataList } from "@/Data/BonusUi/Breadcrumb";
import { Fragment } from "react";
import { BreadcrumbItem } from "reactstrap";

export const DynamicColoredBreadcrumb = () => {
  return (
    <>
      {coloredBreadcrumbDataList.map(({ className, span }, index) => (
        <ol className={`breadcrumb breadcrumb-colored ${className}`} key={index}>
          {span.map(({ title, activeTitle }, index) => (
            <Fragment key={index}>
              {title && (
                <BreadcrumbItem><a className="fw-bold" href={Href}>{title}</a></BreadcrumbItem>
              )}
              {activeTitle && <BreadcrumbItem active className="fw-bold bg-transparent">{activeTitle}</BreadcrumbItem>}
            </Fragment>
          ))}
        </ol>
      ))}
    </>
  );
};