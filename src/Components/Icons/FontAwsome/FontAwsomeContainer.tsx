import React, { useCallback, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import IconMarkUp from "../Icon-markup";
import FontAwsomeCard from "./FontAwsomeCard";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { FontAwesomeIcons, Icons } from "@/Constant";
import { fontAwesomeData } from "@/Data/Icons/Icons";

const FontAwsomeContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");
  const callback = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="fa fa-' + tag + '"></i>',
    });
    setIcon({
      icon: "fa fa-" + tag + " fa-2x",
    });
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={FontAwesomeIcons} parent={Icons} title={FontAwesomeIcons} />
      <Container fluid>
        {fontAwesomeData.map((icons, index) => {
          return (
            <Row key={index}>
              <Col sm={12}>
                <FontAwsomeCard iconType={icons.data} title={icons.title} parentCallback={callback} />
              </Col>
            </Row>
          );
        })}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </>
  );
};

export default FontAwsomeContainer;