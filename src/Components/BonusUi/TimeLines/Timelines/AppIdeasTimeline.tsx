import { AppIdeas, ViewItOnGithub } from "@/Constant";

const AppIdeasTimeline = () => {
  const AppIdeaText: string = "developers who are just beginning their learning process. those who often concentrate on developing programmes with a user interface.";

  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-picture bg-primary">
        <i className="icon-pencil-alt" />
      </div>
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <div className="badge bg-warning">{AppIdeas}</div>
        </div>
        <h5 className="f-w-500 m-0">Established new the app-ideas repository.</h5>
        <p className="mb-0">{AppIdeaText}</p>
        <div className="time-content pt-2">
          <i className="icon-github" />
          <h6>{ViewItOnGithub}</h6>
        </div>
        <span className="cd-date">February 02 2022</span>
      </div>
    </div>
  );
};

export default AppIdeasTimeline;
