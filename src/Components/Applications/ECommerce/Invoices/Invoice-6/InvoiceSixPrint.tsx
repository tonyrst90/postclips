import { Button, Col } from "reactstrap";
import { Cancel, Print } from "@/Constant";

const InvoiceSixPrint = ({ handlePrint }: { handlePrint:any }) => {

  return (
    <Col sm="12" className="text-center mb-3">
      <Button color="primary" className="me-2" onClick={() => handlePrint()}>
        {Print}
      </Button>
      <Button color="secondary">{Cancel}</Button>
    </Col>
  );
};

export default InvoiceSixPrint;
