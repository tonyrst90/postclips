import { AgencyExperience, JobDescriptionHeading, Perks, Qualifications, SaveThisJob, Share } from "@/Constant";
import { agencyExpData, pearksData, qualificationData } from "@/Data/Miscellaneous/JobSearch/JobSearch";
import { Button } from "reactstrap";

const JobDescription = () => {
  const JobDetail: string = "PostClips is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final assets for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team.";

  return (
    <>
      <div className="job-description">
        <h3>{JobDescriptionHeading}</h3>
        <p>{JobDetail}</p>
      </div>
      <div className="job-description">
        <h3>{Qualifications}</h3>
        <ul>
          {qualificationData.map((data, index) => (<li key={index}>{data}</li>))}
        </ul>
      </div>
      <div className="job-description">
        <h3>{AgencyExperience}</h3>
        <ul>
          {agencyExpData.map((data, index) => (<li key={index}>{data}</li>))}
        </ul>
      </div>
      <div className="job-description">
        <h3>{Perks}</h3>
        <ul>
          {pearksData.map((data, index) => (<li key={index}>{data}</li>))}
        </ul>
      </div>
      <div className="job-description">
        <Button color="primary" className="mb-2"><span><i className="fa fa-check"></i></span>{SaveThisJob}</Button>
        <Button color="primary" className="ms-2 mb-2"><span><i className="fa fa-share-alt"></i></span>&nbsp;{Share}</Button>
      </div>
    </>
  );
};

export default JobDescription;