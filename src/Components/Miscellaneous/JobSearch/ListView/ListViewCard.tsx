import { Href, ImagePath } from "@/Constant";
import { jobData } from "@/Data/Miscellaneous/JobSearch/JobSearch";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Badge, Card, CardBody } from "reactstrap";

const ListViewCard = () => {
  return (
    <>
      {jobData.slice(0, 8).map((item) => (
        <Card key={item.id} className={`${item.ribbons ? "ribbon-vertical-left-wrapper" : ""}`}>
          {item.ribbons ? (
            <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!item.ribbons && "d-none"}`}>
              <i className="icofont icofont-love" />
            </div>
          ) : ("")}
          <div className="job-search">
            <CardBody>
              <div className="d-flex">
                <Image priority width={40} height={40} className="img-40 img-fluid m-r-20" src={`${ImagePath}/job-search/${item.logo}`} alt="job logo" />
                <div className="flex-grow-1">
                  <h6 className="f-w-600">
                    <Link href={Href}>{item.job_name}</Link>
                    {item.type === "new" ? (<Badge color="primary" className="pull-right">{item.badgeValue}</Badge>) : (<span className="pull-right">{item.type}</span>)}
                  </h6>
                  <p>
                    {item.job_area}, {item.job_city}
                    <Rating className="ms-1" fillColor="#FFAE1A" initialValue={Math.random() * 5} size={14} />
                  </p>
                </div>
              </div>
              <p>{item.Job_description}</p>
            </CardBody>
          </div>
        </Card>
      ))}
    </>
  );
};
export default ListViewCard;