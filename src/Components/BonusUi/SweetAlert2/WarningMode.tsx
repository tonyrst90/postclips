import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AlertMode, WarningModes } from "@/Constant";
import { warningModeData } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const WarningMode = () => {
  const displayAlert = () => {
    SweetAlert.fire({ icon: "warning", title: "Good job!", text: "You clicked the button!", confirmButtonColor: "#003FDD" });
  };

  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className="height-equal">
        <CommonCardHeader title={WarningModes} span={warningModeData} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="sweet-6" onClick={displayAlert}>{AlertMode}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WarningMode;