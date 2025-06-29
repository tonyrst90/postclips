/* eslint-disable @next/next/no-img-element */
import { Comments, Hits, ImagePath } from "@/Constant";
import { Card, Col } from "reactstrap";

const MarkJencoBlog = () => {
  const MarkJecnoBlog: string = "People just dont do it anymore. We have to change that. Sometimes the simplest things are the most profound.";

  return (
    <Col xxl={6} className="box-col-40 xl-40">
      <Card>
        <div className="blog-box blog-shadow">
          <img className="img-fluid" src={`${ImagePath}/blog/blog.jpg`} alt="blog image" />
          <div className="blog-details">
            <p>25 July 2024</p>
            <h4>{MarkJecnoBlog}</h4>
            <ul className="blog-social">
              <li><i className="icofont icofont-user"></i>Mark Jecno</li>
              <li><i className="icofont icofont-thumbs-up"></i>02 {Hits}</li>
              <li><i className="icofont icofont-ui-chat"></i>598 {Comments}</li>
            </ul>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default MarkJencoBlog;