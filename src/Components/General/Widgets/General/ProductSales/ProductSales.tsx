import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "@/Components/General/Dashboard/Common/DashboardCommonHeader";
import { ProductSalesHeading } from "@/Constant";
import CommonProductSalesChart from "./CommonProductSalesChart";

const ProductSales = () => {
  return (
    <Col lg='4' md='12' sm='6' className='col-xl-5a box-col-6'>
      <Card className='product-chart'>
        <DashboardCommonHeader title={ProductSalesHeading} />
        <CardBody className='p-0'>
          <div className='d-flex mt-3 px-3'>
            <h2 className='me-2'>$12,000</h2>
            <span>(15,080 To Goal)</span>
          </div>
          <div>
            <CommonProductSalesChart height={220} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductSales;
