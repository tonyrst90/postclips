import { ImagePath } from "@/Constant";
import { blogDataList } from "@/Data/Miscellaneous/Blog/Blog";
import Image from "next/image";
import { Card, Col } from "reactstrap";

const BlogWithoutDetails = () => {
  return (
    <>
      {blogDataList.map((data, index) => (
        <Col sm={6} xl={3} className="box-col-3" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center">
              <Image priority width={375} height={234} className="img-fluid top-radius-blog" src={`${ImagePath}/blog/${data.src}`} alt="blog" />
              <div className="blog-details-main">
                <ul className="blog-social">
                  <li>{data.date} April 2024</li>
                  <li>by: Admin</li>
                  <li>0 Hits</li>
                </ul>
                <hr />
                <h4 className="blog-bottom-details">{data.text}</h4>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BlogWithoutDetails;