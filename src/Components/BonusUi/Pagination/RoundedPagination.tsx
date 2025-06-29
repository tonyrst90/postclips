import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, RoundedPaginationTitle } from "@/Constant";
import { roundedPaginationData } from "@/Data/BonusUi/Pagination";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const RoundedPagination = () => {
  const NextData: string[] = ["1", "2", "...", "20"];

  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonCardHeader title={RoundedPaginationTitle} span={roundedPaginationData} />
        <CardBody>
          <Pagination className="pagination pagination-dark pagin-border-dark" aria-label="Page navigation example">
            <PaginationItem ><PaginationLink className="rounded-circle me-2" href={Href} first ></PaginationLink></PaginationItem>
            {NextData.map((item, index) => (<PaginationItem key={index}><PaginationLink className="rounded-circle me-2" href={Href}>{item}</PaginationLink></PaginationItem>))}
            <PaginationItem><PaginationLink className="rounded-circle me-2" href={Href} last></PaginationLink></PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RoundedPagination