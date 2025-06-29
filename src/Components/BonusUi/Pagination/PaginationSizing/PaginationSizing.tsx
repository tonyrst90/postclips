import { Card, CardBody, Col } from "reactstrap";
import { DynamicPaginationSizing } from "./DynamicPaginationSizing";
import { StaticPaginationSizing } from "./StaticPaginationSizing";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PaginationSizings } from "@/Constant";
import { sizingPaginationData } from "@/Data/BonusUi/Pagination";

const PaginationSizing = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={PaginationSizings} span={sizingPaginationData} />
        <CardBody className="pb-4">
          <StaticPaginationSizing />
          <DynamicPaginationSizing />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSizing;