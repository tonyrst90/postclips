import { Col } from "reactstrap";

export const StaticRightRibbons = () => {
  const RibbonAndTagText: string = " frequently appear together because they have similar features that capture attention and make wonderful spaces for vital information.";
  const RibbonAndTag: string = "ribbon and tag";

  return (
    <Col sm={6} xl={4}>
      <div className="ribbon-wrapper border border-1 height-equal h-100">
        <div className="ribbon ribbon-dark ribbon-right">50% OFF</div>
        <p>
          The <em className="txt-danger">{RibbonAndTag}</em>
          {RibbonAndTagText}
        </p>
      </div>
    </Col>
  );
};
