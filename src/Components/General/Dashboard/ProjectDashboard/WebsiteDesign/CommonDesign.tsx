import SVG from "@/CommonComponent/SVG";
import { CommonDesignProps } from "@/Types/Dashboard.type";
import { Card, CardBody, Col, Progress } from "reactstrap";

const CommonDesign: React.FC<CommonDesignProps> = ({ color, title, completeValue, progressValue, userName, date, svgIcon }) => {
  return (
    <Col xl={12} lg={12} md={12} sm={6}>
      <Card className="project-task">
        <CardBody>
          <div className="website-design">
            <div className="d-flex">
              <h4 className={`font-${color}`}>{title}</h4>
              <span>Running</span>
            </div>
            <div className="progress-value">
              <h5>Task Completed: {completeValue}/10</h5>
              <Progress value={progressValue} color={color} />
            </div>
            <div className="client">
              <div className="flex-grow-1">
                <h6>Client: {userName}</h6>
                <span>Deadline: {date}</span>
              </div>
              <div className="flex-shrink-0">
                <div className={`design-card bg-light-${color}`}>
                  <SVG iconId={svgIcon} />
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CommonDesign;