import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { InfoAlerts, Informational } from "@/Constant";
import { infoSweetAlert } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const InfoAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ text: "Please Click on this button it's big surprise for you.", confirmButtonColor: "#003FDD" }).then((result) => {
      if (result.isConfirmed) {
        SweetAlert.fire({ text: "Thank you for visit PostClips theme : true", confirmButtonColor: "#003FDD" });
      } else {
        SweetAlert.fire({ text: "Thank you for visit PostClips theme : null", confirmButtonColor: "#003FDD" });
      }
    });
  };

  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className="height-equal">
        <CommonCardHeader title={InfoAlerts} span={infoSweetAlert} />
        <CardBody className="btn-showcase">
          <Button color="info" className="sweet-4" onClick={displayAlert}>{Informational}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InfoAlert;