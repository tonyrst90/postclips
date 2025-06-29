import { Row, Col, CardBody } from "reactstrap";
import { useState } from "react";
import IconMarkUp from "@/Components/Icons/Icon-markup";
import { featherIconsData } from "@/Data/Icons/Icons";

export const FeatherIconCardBody = () => {
  const featherIcons = require("feather-icons");
  const [iTag, setiTag] = useState<string | object>("");
  const [featherIcon, setFeatherIcon] = useState<string | object>("");

  const getItag = (tag: string) => {
    setiTag({ iTag: '<i data-feather="' + tag + '"></i>' });
    setFeatherIcon({ featherIcon: tag });
  };

  return (
    <CardBody>
      <Row className="icon-lists feather-icons">
        {featherIconsData.map((singleIcon: string, index) => (
          <Col xs={12} sm={6} xl={4} key={index} onClick={(e) => getItag(singleIcon)}>
            <div className="d-flex">
              <div
                dangerouslySetInnerHTML={{
                  __html: featherIcons.icons[singleIcon].toSvg(singleIcon),
                }}
              />
              <div className="flex-grow-1 align-self-center">
                <h6 className="mt-0">{singleIcon}</h6>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <IconMarkUp itag={iTag} icons={featherIcon} />
    </CardBody>
  );
};