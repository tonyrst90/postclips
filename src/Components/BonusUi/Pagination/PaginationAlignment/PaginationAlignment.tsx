import { Card, CardBody, Col } from "reactstrap";
import { StaticPaginationAlignment } from "./StaticPaginationAlignment";
import { DynamicPaginationAlignment } from "./DynamicPaginationAlignment";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PaginationAlignments } from "@/Constant";
import { alignmentPaginationData } from "@/Data/BonusUi/Pagination";

const PaginationAlignment = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={PaginationAlignments} span={alignmentPaginationData} />
        <CardBody>
          <StaticPaginationAlignment />
          <DynamicPaginationAlignment />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationAlignment;