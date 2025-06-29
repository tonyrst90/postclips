import { Card, CardBody, Col } from "reactstrap";
import CountriesMap from "./CountriesMap";
import DashboardCommonHeader from "../../Common/DashboardCommonHeader";
import { UserByCountryHeading } from "@/Constant";
import SVG from "@/CommonComponent/SVG";

const UserByCountry = () => {
  return (
    <Col xl={4} lg={6} md={6}>
      <Card className="user-country">
        <DashboardCommonHeader cardClass="pb-0" title={UserByCountryHeading} />
        <CardBody>
          <div className="d-flex">
            <h2 className="me-2">216.459</h2>
            <span className="bg-light-success">
              <SVG iconId="up-arrow" />
            </span>
            <h6 className="font-success">+ 5.09%</h6>
          </div>
          <span>Increase than last month</span>
          <CountriesMap />
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserByCountry;