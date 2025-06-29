"use client";
import { Container, Row } from "reactstrap";
import DefaultPagination from "./DefaultPagination";
import PaginationActiveAndDisabled from "./PaginationActiveAndDisabled";
import PaginationWithIcons from "./PaginationWithIcons";
import RoundedPagination from "./RoundedPagination";
import PaginationAlignment from "./PaginationAlignment/PaginationAlignment";
import PaginationSizing from "./PaginationSizing/PaginationSizing";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { BonusUi, Pagination } from "@/Constant";

const PaginationContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Pagination} parent={BonusUi} title={Pagination} />
      <Container fluid>
        <Row>
          <DefaultPagination />
          <PaginationActiveAndDisabled />
          <PaginationWithIcons />
          <RoundedPagination />
          <PaginationAlignment />
          <PaginationSizing />
        </Row>
      </Container>
    </>
  );
};

export default PaginationContainer;
