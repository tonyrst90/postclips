import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DangerAlerts, DangerMode } from "@/Constant";
import { dangerMessageData } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const DangerAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ icon: "error", title: "It's danger", text: "Something went wrong!", confirmButtonColor: "#003FDD" });
  };

  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className="height-equal">
        <CommonCardHeader title={DangerAlerts} span={dangerMessageData} />
        <CardBody className="btn-showcase">
          <Button color="danger" className="sweet-7" onClick={displayAlert}>{DangerMode}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DangerAlert;