"use client"
import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { LeftSideBar } from "../PrivateChat/LeftSideBar";
import UserGroupChat from "./UserGroupChat";
import { fetchChatApiData, fetchChatMemberApiData } from "@/Redux/Reducers/ChatSlice";
import { useAppDispatch } from "@/Redux/Hooks";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { ChatTitle, GroupChatTitle } from "@/Constant";

const GroupChatContainer = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchChatMemberApiData());
    dispatch(fetchChatApiData());
  }, []);

  return (
    <>
      <Breadcrumbs title={GroupChatTitle} />
      <Container fluid>
        <Row className="g-0">
          <LeftSideBar />
          <UserGroupChat />
        </Row>
      </Container>
    </>
  );
};

export default GroupChatContainer;