"use client"
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CreateNewProjectForm from './CreateNewProjectForm'
import { ProjectCreateTitle, ProjectTitle } from '@/Constant'
import Breadcrumbs from '@/CommonComponent/BreadCrumbs'

const ProjectCreateContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectCreateTitle} parent={ProjectTitle} title={ProjectCreateTitle} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <CreateNewProjectForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProjectCreateContainer