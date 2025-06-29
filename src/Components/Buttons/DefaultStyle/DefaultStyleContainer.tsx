"use client";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { ActiveButtonsTitle, BoldBorderOutlineButtonsTitle, ButtonsTitle, DefaultButtonTitle, DefaultStyleTitle, DisabledButtonsTitle, FlatButtonTitle, GradienButtonsTitle, OutlineButtonsTitle, RaisedButtonTitle, SizingButtonsTitle } from "@/Constant";
import { CommonButtons } from "../Common/CommonButtons";
import { activeButtonsData, activeButtonSubTitle, boldBorderOutlineButtonsData, boldBorderOutlineButtonSubTitle, defaultButtonsData, defaultButtonText, disableButtonsData, disabledButtonSubTitle, flatButtonSubTitle, gradienButtonsSubTitle, gradientButtonsData, outlineButtonsData, outlineButtonSubTitle, raisedButtonSubTitle, sizingButtonsData, sizingButtonSubTitle } from "@/Data/Buttons/DefaultStyle";

export const DefaultStyleContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DefaultStyleTitle} parent={ButtonsTitle} title={DefaultStyleTitle} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <CommonButtons commonButtonsData={defaultButtonsData} title={DefaultButtonTitle} subTitle={defaultButtonText} />
            <CommonButtons className="btn-square" commonButtonsData={defaultButtonsData} title={FlatButtonTitle} subTitle={flatButtonSubTitle} />
            <CommonButtons raised className="btn-pill" commonButtonsData={defaultButtonsData} title={RaisedButtonTitle} subTitle={raisedButtonSubTitle} />
            <CommonButtons commonButtonsData={sizingButtonsData} title={SizingButtonsTitle} subTitle={sizingButtonSubTitle} />
            <CommonButtons commonButtonsData={activeButtonsData} title={ActiveButtonsTitle} subTitle={activeButtonSubTitle} />
            <CommonButtons commonButtonsData={disableButtonsData} title={DisabledButtonsTitle} subTitle={disabledButtonSubTitle} />
            <CommonButtons commonButtonsData={outlineButtonsData} title={OutlineButtonsTitle} subTitle={outlineButtonSubTitle} />
            <CommonButtons commonButtonsData={boldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsTitle} subTitle={boldBorderOutlineButtonSubTitle} />
            <CommonButtons commonButtonsData={gradientButtonsData} title={GradienButtonsTitle} subTitle={gradienButtonsSubTitle} />
          </Col>
        </Row>
      </Container>
    </>
  );
};