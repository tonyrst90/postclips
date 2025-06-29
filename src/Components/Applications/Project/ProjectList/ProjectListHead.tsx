import { Href } from '@/Constant'
import { projectListHeadData } from '@/Data/Applications/Project/ProjectList'
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks'
import { setActiveTab } from '@/Redux/Reducers/ProjectSlice'
import Link from 'next/link'
import { PlusSquare } from 'react-feather'
import { Card, Col, FormGroup, Nav, NavItem, NavLink, Row } from 'reactstrap'

const ProjectListHead = () => {
  const { activeTab } = useAppSelector((state) => state.project)
  const dispatch = useAppDispatch()
  return (
    <Card>
      <Row>
        <Col md={6} className='p-0'>
          <Nav tabs className="border-tab d-flex">
            {projectListHeadData.map((item) => (
              <NavItem key={item.id}>
                <NavLink className={activeTab === item.id ? "active" : ""} onClick={() => dispatch(setActiveTab(item.id))} href={Href}>
                  {item.icon} {item.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Col>
        <Col md={6} className='p-0'>
          <FormGroup className="mb-0 me-0" />
          <Link className="btn btn-primary" href={'project_create'} >
            <PlusSquare /> {'Create New Project'}
          </Link>
        </Col>
      </Row>
    </Card>
  )
}
export default ProjectListHead