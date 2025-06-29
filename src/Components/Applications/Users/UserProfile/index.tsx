'use client'
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { UserProfileTitle, UsersTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import UserFirstProfile from "./UserFirstProfile";
import UserProfile2Style from "./UserProfile2Style";
import UserProfile3Style from "./UserProfile3Style";
import UserProfile4Style from "./UserProfile4Style";
import UserProfile5Style from "./UserProfile5Style";

const UsersProfileContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={UserProfileTitle} parent={UsersTitle} title={UserProfileTitle} />
            <Container fluid>
                <div className="user-profile">
                    <Row>
                        <UserFirstProfile />
                        <UserProfile2Style />
                        <UserProfile3Style />
                        <UserProfile4Style />
                        <UserProfile5Style />
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default UsersProfileContainer;