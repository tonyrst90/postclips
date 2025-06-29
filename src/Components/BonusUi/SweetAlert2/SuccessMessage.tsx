import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LoginSuccessfully, SuccessMessages } from "@/Constant";
import { successMassageData } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const SuccessMessage = () => {
  const displayAlert = () => {
    SweetAlert.fire({ icon: "success", title: "Good job!", text: "You clicked the button!", confirmButtonColor: "#003FDD" });
  };

  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className="height-equal">
        <CommonCardHeader title={SuccessMessages} span={successMassageData} />
        <CardBody className="btn-showcase">
          <Button color="success" className="sweet-8" onClick={displayAlert}>{LoginSuccessfully}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SuccessMessage;