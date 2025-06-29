"use client"
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { ProjectListTitle, ProjectTitle } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import ProjectListHead from "./ProjectListHead";
import ProjectListTabContent from "./ProjectListTabContent";

const ProjectListContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={ProjectListTitle} parent={ProjectTitle} title={ProjectListTitle} />
            <Container fluid>
                <Row className="project-cards">
                    <Col md={12} className="project-list">
                        <ProjectListHead />
                    </Col>
                    <Col sm={12}>
                        <ProjectListTabContent />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProjectListContainer;