import { useCallback, useState } from "react";
import { Container, Row } from "reactstrap";
import ThemifyIconCard from "./ThemifyIconCard";
import IconMarkUp from "../Icon-markup";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { Icons, ThemifyIcon } from "@/Constant";
import { themifyIconData } from "@/Data/Icons/Icons";

const ThemifyIconContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const callback = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="' + tag + '"></i>',
    });
    setIcon({
      icon: "" + tag + " fa-2x",
    });
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={ThemifyIcon} parent={Icons} title={ThemifyIcon} />
      <Container fluid>
        {themifyIconData.map((item, i) => {
          return (
            <Row key={i}>
              <ThemifyIconCard iconType={item.data} title={item.title} parentCallback={callback} />
            </Row>
          );
        })}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </>
  );
};

export default ThemifyIconContainer;