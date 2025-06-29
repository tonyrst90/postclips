import { Card, CardBody, Col } from "reactstrap";
import ClientBudget from "./ClientBudget";
import UserDetails from "./UserDetails";
import { mobileAppData } from "@/Data/General/Dashboard/ProjectDashboard";
import SVG from "@/CommonComponent/SVG";

const MobileApp = () => {
  return (
    <>
      {mobileAppData.map((data, i) => (
        <Col xl={2} md={4} lg={4} className={i !== 2 ? "col-xl-25 col-sm-6" : "finance"} key={i}>
          <Card className="mobile-app">
            <CardBody className={`${data.class}`}>
              <div className="app-design">
                <div className="d-flex">
                  <div className={`flex-shrink-0 bg-light-${data.color} me-2`}>
                    <SVG iconId={data.svgIcon} />
                  </div>
                  <div className="flex-grow-1">
                    <h6>{data.title}</h6>
                    <span>{data.email}</span>
                  </div>
                </div>
              </div>
              <ClientBudget data={data} />
              <UserDetails data={data} />
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default MobileApp;