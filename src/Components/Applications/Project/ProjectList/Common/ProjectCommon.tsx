import { Badge, Col, Progress } from 'reactstrap'
import ProjectDetails from './ProjectDetails'
import ProjectCustomers from './ProjectCustomers'
import { ProjectCommonType } from '@/Types/Project.type'
import Image from 'next/image'
import { ImagePath } from '@/Constant'

const ProjectCommon: React.FC<ProjectCommonType> = ({ item }) => {
  return (
    <Col xxl={4} md={6} lg={4} className='box-col-33'>
      <div className='project-box'>
        <Badge color={item.color}>{item.badge}</Badge>
        <h3>{item.title}</h3>
        <div className='d-flex'>
          <Image className='img-20 me-1 rounded-circle' src={`${ImagePath}/user/${item.image}`} width={20} height={20} alt='images' />
          <div className="flex-grow-1">
            <p className="mb-0">{item.sites}</p>
          </div>
        </div>
        <p>{item.description}</p>
        <ProjectDetails item={item} />
        <ProjectCustomers item={item} />
        <div className='project-status mt-4'>
          <div className='d-flex mb-0'>
            <p>{item.progress}% </p>
            <div className="flex-grow-1 text-end"><span>{'Done'}</span></div>
          </div>
          <Progress animated={item.progress !== 100 ? true : false} color={item.color} value={item.progress} style={{ height: '5px' }} />
        </div>
      </div>
    </Col>
  )
}

export default ProjectCommon