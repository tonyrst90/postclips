import { Href } from "@/Constant";
import { Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
const CardsPagination = () => {
  return (
    <Col sm={12}>
      <div className="job-pagination">
        <Pagination aria-label="Page navigation example" className="pagination-primary">
          <PaginationItem disabled>
            <PaginationLink href={Href}>{'Previous'}</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href={Href}>{"1"}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={Href}>{"2"}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={Href}>{"3"}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={Href}>{'Next'}</PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    </Col>
  );
};

export default CardsPagination;
