import { useState } from "react";
import Filter from "./Filter/Filter";
import Location from "./Location/Location";
import JobTitleClass from "./JobTitle/JobTitleClass";
import Industry from "./Industry/Industry";
import SkillClass from "./Skill/SkillClass";
import { Button } from "reactstrap";
import { JobFilterData } from "@/Constant";

const Sidebar = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const toggle = () => setFilterToggle(!filterToggle);

  return (
    <>
      <Button color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={toggle}>{JobFilterData}</Button>
      <div className={`md-sidebar-aside job-sidebar ${filterToggle ? "open" : ""}`}>
        <div className="default-according style-1 faq-accordion job-accordion">
          <div className="accordion" id="accordionExample">
            <Filter />
            <Location />
            <JobTitleClass />
            <Industry />
            <SkillClass />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;