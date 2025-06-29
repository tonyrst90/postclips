import { useCallback, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import IcoIconCard from "./IcoIconCard";
import IconMarkUp from "../Icon-markup";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { IcoIcon, Icons } from "@/Constant";
import { icoIconData } from "@/Data/Icons/Icons";

const IcoIconContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const callback = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="icofont icofont-' + tag + '"></i>',
    });
    setIcon({
      icon: "icofont icofont-" + tag + " fa-2x",
    });
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={IcoIcon} parent={Icons} title={IcoIcon} />
      <Container fluid>
        {icoIconData.map((item, i) => {
          return (
            <Row key={i}>
              <Col sm={12}>
                <IcoIconCard iconType={item.icons} title={item.title} parentCallback={callback} />
              </Col>
            </Row>
          );
        })}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </>
  );
};

export default IcoIconContainer;