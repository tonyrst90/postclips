import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import Link from "next/link";
import { BreadcrumbsProps } from "@/Types/CommonComponent.type";
import SVG from "../SVG";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ title, mainTitle, parent }) => {
  return (
    <Container fluid>
      <div className="page-title">
        <Row>
          <h5 className="f-w-400">{title}</h5>
        </Row>
      </div>
    </Container>
  );
};
export default Breadcrumbs;