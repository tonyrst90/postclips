import { Container, Row } from "reactstrap";
import { useEffect } from "react";
import UserProfileFirstStyle from "./UserProfileFirstStyle/UserProfileFirstStyle";
import UserProfileSecondStyle from "./UserProfileSecondStyle/UserProfileSecondStyle";
import UserProfileThirdStyle from "./UserProfileThirdStyle/UserProfileThirdStyle";
import UserProfileFourthStyle from "./UserProfileFourthStyle/UserProfileFourthStyle";
import UserProfileFifthStyle from "./UserProfileFifthStyle/UserProfileFifthStyle";
import { BonusUi, Tour } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";

const TourMain = () => {
  
  return (
    <>
      <Breadcrumbs mainTitle={Tour} parent={BonusUi} title={Tour} />
      <Container fluid>
        <div className="user-profile">
          <Row>
            <UserProfileFirstStyle />
            <UserProfileSecondStyle />
            <UserProfileThirdStyle />
            <UserProfileFourthStyle />
            <UserProfileFifthStyle />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TourMain;