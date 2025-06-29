import { Href, ImagePath, JobCancelButton, JobEndlessTelecomTechnologies, JobPersonalDetails, JobSubmitButton, JobUIDesigner, JobUploadYourFiles, JobYourEducation, JobYourExperience } from "@/Constant";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import EducationClass from "./Education";
import ExperienceClass from "./Experience";
import PersonalDetail from "./PersonalDetail";
import UploadFileClass from "./UploadFile";
import Image from "next/image";

const JobApply = () => {
  return (
    <Card>
      <div className="job-search">
        <CardBody className="pb-0">
          <div className="d-flex">
            <Image priority width={40} height={40} className="img-40 img-fluid m-r-20" src={`${ImagePath}/job-search/1.jpg`} alt="" />
            <div className="flex-grow-1">
              <h3 className="f-w-600">
                <Link href={Href}>{JobUIDesigner}</Link>
                <span className="pull-right">
                  <Button color="primary"><span><i className="fa fa-check text-white" /></span> Save this job</Button>
                </span>
              </h3>
              <p>{JobEndlessTelecomTechnologies} <Rating className="ms-1" fillColor="#FFAE1A" initialValue={Math.random() * 5} size={15} /></p>
            </div>
          </div>
          <div className="job-description">
            <h3 className="mb-0">{JobPersonalDetails}</h3>
            <PersonalDetail />
            <h3 className='mb-0'>{JobYourEducation}</h3>
            <EducationClass />
            <h3 className='mb-0' >{JobYourExperience}</h3>
            <ExperienceClass />
            <h3 className='mb-0'>{JobUploadYourFiles}</h3>
            <UploadFileClass />
          </div>
        </CardBody>
        <CardFooter>
          <Button color="primary" className="me-2">{JobSubmitButton}</Button>
          <Button color="light">{JobCancelButton}</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default JobApply;