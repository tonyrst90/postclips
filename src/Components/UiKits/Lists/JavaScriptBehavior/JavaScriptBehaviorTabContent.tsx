import { ImagePath } from "@/Constant";
import React from "react";
import { Col, TabContent, TabContentProps, TabPane } from "reactstrap";

const JavaScriptBehaviorTabContent: React.FC<TabContentProps> = ({ basicTab }) => {

  return (
    <Col sm={8}>
      <TabContent activeTab={basicTab} id="nav-tabContent">
        <TabPane tabId="1">
          <div className="d-flex mb-xl-4 list-behavior-1">
            <div className="flex-shrink-0"><img className="tab-img img-fluid" src={`${ImagePath}/blog/img.png`} alt="home" /></div>
            <div className="flex-grow-1"><p className="mb-xl-0 mb-sm-4">{`We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively.`}</p></div>
          </div>
          <div className="d-xl-flex list-behavior-2">
            <div className="flex-grow-1"><p className="mb-0">{`When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors to select to stay on your website.Building trust, expressing value, and guiding visitors to the next step all depend on a page's design.`}</p></div>
            <div className="flex-shrink-0"><img className="tab-img img-fluid" src={`${ImagePath}/blog/blog.jpg`} alt="home" /></div>
          </div>
        </TabPane>
        <TabPane tabId="2" className="dark-list">
          <div className="flex-space align-items-center list-light-dark contact-profile"><img className="tab-img" src={`${ImagePath}/avtar/3.jpg`} alt="profile" />
            <ul className="d-flex flex-column gap-2">
              <li> <strong>Visit Us: </strong>	2600 Hollywood Blvd,Florida, United States-	33020</li>
              <li><strong>Mail Us:</strong>contact@us@gmail.com</li>
              <li><strong>Contact Number: </strong>(954) 357-7760</li>
            </ul>
          </div>
        </TabPane>
        <TabPane tabId="3">
          <ul className="d-flex flex-column gap-1">
            <li>{`Us Technology offers web &amp; mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them.`}</li>
            <li> <strong>Visit Us: </strong>	2600 Hollywood Blvd,Florida, United States-	33020</li>
            <li> <strong>Mail Us:</strong>contact@us@gmail.com</li>
            <li><strong>Contact Number: </strong>(954) 357-7760</li>
          </ul>
        </TabPane>
        <TabPane tabId="4">
          <ul className="d-flex flex-column gap-2">
            <li><strong>Available pages in Theme: </strong></li>
            <li>{`-->`} Typography: Typography is the art of arranging letters and text in a way that makes the copy legible, clear, and visually appealing to the reader.</li>
            <li>{`-->`} Tooltip: A tooltip is a brief, informative message that appears when a user interacts with an element in a graphical user interface (GUI). </li>
          </ul>
        </TabPane>
      </TabContent>
    </Col>
  );
};
export default JavaScriptBehaviorTabContent;