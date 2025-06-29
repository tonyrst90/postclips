import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, PaginationWithIcon } from "@/Constant";
import { iconPaginationData } from "@/Data/BonusUi/Pagination";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationWithIcons = () => {
  const NextData: string[] = ["1", "2", "3", "...", "20"];

  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonCardHeader title={PaginationWithIcon} span={iconPaginationData} />
        <CardBody>
          <Pagination className="pagination-secondary pagin-border-secondary mb-3" aria-label="Page navigation example">
            <PaginationItem ><PaginationLink href={Href} first ></PaginationLink></PaginationItem>
            {NextData.map((item, index) => (<PaginationItem key={index}><PaginationLink href={Href}>{item}</PaginationLink></PaginationItem>))}
            <PaginationItem><PaginationLink href={Href} last></PaginationLink></PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  )
}

export default PaginationWithIcons