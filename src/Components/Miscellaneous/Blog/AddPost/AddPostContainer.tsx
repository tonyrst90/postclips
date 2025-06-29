import { Blog, BlogDiscardButton, BlogPostButton, PostEdit, AddPost } from "@/Constant";
import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import { FormPost } from "./FormPost";
import DropzoneClass from "./DropzoneClass";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const AddPostContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AddPost} parent={Blog} title={AddPost} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title={PostEdit} headClass="pb-0" />
              <CardBody className="add-post">
                <FormPost />
                <DropzoneClass />
                <div className="btn-showcase text-end mt-4">
                  <Button color="primary">{BlogPostButton}</Button>
                  <Button color="light" type="reset">{BlogDiscardButton}</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddPostContainer;