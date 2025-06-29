import { Href } from "@/Constant";
import Attachment from "./Attachment";

const EmailContentBody = () => {
  return (
    <div className="email-wrapper">
      <p>{"Hello"}</p>
      <p>{"Dear Sir Good Morning,"}</p>
      <h3>{"Inquiry about our theme pages design."}</h3>
      <p className="m-b-20">{"PostClips Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework, HTML5, CSS and JQuery.It has a huge collection of reusable UI components and integrated with latest jQuery plugins."}</p>
      <p>{"It can be used for all type of Web applications like custom admin panel, app backend, CMS or CRM. UI components and integrated with latest jQuery plugins. PostClips Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework."}</p>
      <hr />
      <div className="d-inline-block">
        <h4 className="text-muted">
          <i className="icofont icofont-clip" /> {'ATTACHMENTS'}
        </h4>
        <a className="text-muted text-end right-download" href={Href}>
          <i className="fa fa-long-arrow-down me-2" />
          {'Download All'}
        </a>
        <div className="clearfix" />
      </div>
      <Attachment />
    </div>
  );
};

export default EmailContentBody;