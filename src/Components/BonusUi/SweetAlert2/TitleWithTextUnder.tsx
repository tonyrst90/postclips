import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Surprise, TitleWithATextUnder } from "@/Constant";
import { titleSweetAlert } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const TitleWithTextUnder = () => {
  const displayAlert = () => {
    SweetAlert.fire({ title: "It's Magic!", text: "Thank you for visiting PostClips theme", confirmButtonColor: "#003FDD" });
  };

  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className="height-equal">
        <CommonCardHeader title={TitleWithATextUnder} span={titleSweetAlert} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="sweet-2" onClick={displayAlert}>{Surprise}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TitleWithTextUnder;