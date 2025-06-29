import { Href, ImagePath } from "@/Constant";
import Image from "next/image";
import { Label, ListGroup, ListGroupItem } from "reactstrap";

export const InterviewHoveringTimeline = () => {
  return (
    <li className="timeline-event">
      <Label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <p className="timeline-thumbnail">March 2024 - Fresher Interview</p>
        <h5 className="f-w-500">{'Ofwrrior Company'}</h5>
        <div className="text-muted">
          {`A fresher's interview is to be conducted`}
          <ListGroup className="main-lists-content">
            <ListGroupItem tag="a" href={Href} className="list-group-item-action border-0 p-0 mb-4">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div className="list-wrapper">
                  <Image priority width={55} height={55} className="list-img" src={`${ImagePath}/user/1.jpg`} alt="profile" />
                  <div className="list-content">
                    <h6>{'Molly Boake'}</h6>
                    <p>MollyBoake@rhyta.com</p>
                  </div>
                </div>
                <div className="timeline-icon">
                  <i className="icon-facebook" />
                  <i className="icon-google"> </i>
                  <i className="icon-twitter-alt" />
                </div>
              </div>
              <p className="mb-1">Next step is to choose a tone of voice for your content type.</p>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </li>
  );
};
