import { CommonCreativeCardHeaderProp } from "@/Types/BonusUi.type";
import React, { Fragment } from "react";
import { CardHeader } from "reactstrap";

const CommonCreativeCardHeader: React.FC<CommonCreativeCardHeaderProp> = ({ headerClass, titleClass, title, span }) => {
  return (
    <CardHeader className={headerClass}>
      <h3 className={titleClass}>{title}</h3>
      {span && (
        <p className="mt-1 f-m-light">
          {span.map((data, index) => (
            <Fragment key={index}>
              {data?.text} {data.code && <code>{data.code}</code>}
            </Fragment>
          ))}
        </p>
      )}
    </CardHeader>
  );
};

export default CommonCreativeCardHeader;