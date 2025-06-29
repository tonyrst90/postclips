import { ImagePath } from "@/Constant";
import { meetupHoveringList } from "@/Data/BonusUi/Timeline";

export const MeetupHoveringTimeline = () => {
  return (
    <li className="timeline-event">
      <label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <p className="timeline-thumbnail">December 2024 - Meetup</p>
        <h5 className="f-w-500">{'US Meeting'}</h5>
        <div className="text-muted">
          2209 Leverton Cove RoadSpringfield, MA 01109
          <div className="designer-details">
            {meetupHoveringList.map(({ image, name, number }, index) => (
              <div className="designer-profile" key={index}>
                <div className="designer-wrap">
                  <picture><img className="designer-img" src={`${ImagePath}/${image}`} alt="profile" /></picture>
                  <div className="designer-content">
                    <h6>{name}</h6>
                    <p>{number}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};