import { Archive, FileText, ArrowRight } from "react-feather";
import { Badge, CardBody, Col, Row } from "reactstrap";
import Link from "next/link";
import { knowledgeBaseData } from "@/Data/Miscellaneous/Knowledgebase/Knowledgebase";

export const CategoryDataCardBody = () => {
  return (
    <CardBody>
      <Row className="browse g-sm-4 g-3">
        {knowledgeBaseData.map((data) => (
          <Col xl={4} md={6} key={data.id} className="box-col-33">
            <div className="browse-articles">
              <h4><span><Archive /></span>{data.title}</h4>
              <ul>
                {data.knowledgeList &&
                  data.knowledgeList.map((item, index2) => {
                    const isLastItemSeeMore =
                      index2 === data.knowledgeList.length - 1 && item.text.startsWith("See More");
                    return (
                      <li key={index2}>
                        <Link href="/learning/detail_course" className={isLastItemSeeMore ? "f-w-600 font-primary" : ""}>
                          {item.fileTextIcon ? (<span><FileText /></span>) : (<span><ArrowRight /></span>)}
                          <span>{item.text}</span>
                          {item.badge ? <Badge color="primary" className="pull-right">{item.badge}</Badge> : " "}
                        </Link>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </CardBody>
  );
};