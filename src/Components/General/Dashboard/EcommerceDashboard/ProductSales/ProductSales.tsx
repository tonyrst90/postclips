import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { ProductSalesHeading } from "@/Constant";
import CommonProductSalesChart from "./CommonProductSalesChart";
import { CommonDropdown } from "../../Common/CommonDropdown";

const ProductSales = () => {
  return (
    <Col xl={4} lg={4} className="box-col-4">
      <Card className="product-chart">
        <CardHeader className="pb-0">
          <div className="header-top">
            <h5>{ProductSalesHeading}</h5>
            <CommonDropdown />
          </div>
          <div className="d-flex mt-3">
            <h2 className="me-2">{'$12,000'}</h2><span>{'(15,080 To Goal)'}</span>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <CommonProductSalesChart height={270} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductSales;