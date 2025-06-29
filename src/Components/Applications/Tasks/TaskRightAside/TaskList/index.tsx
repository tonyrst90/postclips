import React, { useRef } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { useReactToPrint } from "react-to-print";
import { Printer } from "react-feather";
import { Href } from "@/Constant";
import CreatedByMeTable from "./CreatedByMeTable";

const TaskList = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  return (
    <Card className="mb-0">
      <CardHeader className="d-flex pb-0">
        <h4 className="mb-0">{"Created by me"}</h4>
        <a href={Href}>
          <Printer className="me-2" onClick={() => handlePrint()} /> {"Print"}
        </a>
      </CardHeader>
      <CardBody className="p-0">
        <CreatedByMeTable componentRef={contentRef} />
      </CardBody>
    </Card>
  );
};
export default TaskList;
