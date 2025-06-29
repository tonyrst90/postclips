import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AutoCloseTimerTitle, Timer } from "@/Constant";
import { autoCloseData } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const AutoCloseTimer = () => {
  const displayAlert = () => {
    SweetAlert.fire({ timer: 3000, showConfirmButton: false, title: "Auto close alert!", text: "just a wait! I will close in 3 second!", confirmButtonColor: "#003FDD" });
  };

  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className="height-equal">
        <CommonCardHeader title={AutoCloseTimerTitle} span={autoCloseData} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="sweet-14" onClick={displayAlert}>{Timer}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoCloseTimer;