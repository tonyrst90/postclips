import { Card, CardBody, Col, Table } from "reactstrap";
import TopSellingProductBody from "./TopSellingProductBody";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { TopSellingProductHeading } from "@/Constant";

const TopSellingProduct = () => {
  return (
    <Col xl={4} md={7} className="col-xl-40 box-col-5e">
      <Card className="selling-product">
        <DashboardCommonHeader cardClass="pb-0" title={TopSellingProductHeading} />
        <CardBody>
          <div className="custom-scrollbar table-responsive">
            <Table className="display" style={{ width: "100%" }}>
              <tbody>
                <TopSellingProductBody />
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopSellingProduct;