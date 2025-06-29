import React, { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import PricingPlans from "./PricingPlans";
import { FileFilter } from "@/Constant";
import { fileSideButton } from "@/Data/Applications/FileManager";
import StorageSection from "./StorageSection";

const FileSideBar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <Col xl={3} className="box-col-30">
      <div className="md-sidebar job-sidebar">
        <Button color="primary" className="md-sidebar-toggle" onClick={OnHandelClick}>{FileFilter}</Button>
        <div className={`md-sidebar-aside custom-scrollbar ${IsOpen ? "open" : ""}`}>
          <div className="file-sidebar">
            <Card>
              <CardBody>
                <ul>
                  {fileSideButton.map((item, index) => (
                    <li key={index} className="border-0">
                      <Button color={item.className}>{item.icon}{item.title}</Button>
                    </li>
                  ))}
                </ul>
                <hr />
                <StorageSection />
                <PricingPlans />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default FileSideBar;