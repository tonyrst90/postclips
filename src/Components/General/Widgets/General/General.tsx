"use client";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { Widgets, WidgetsTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import MobileApp from "./MobileApp/MobileApp";
import DailyVisitors from "./DailyVisitors/DailyVisitors";
import TotalEarnings from "./TotalEarnings/TotalEarnings";
import TotalExpenses from "./TotalExpenses/TotalExpenses";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import ProductSales from "./ProductSales/ProductSales";
import TotalRevenue from "./TotalRevenue/TotalRevenue";
import StockReport from "./StockReport/StockReport";
import TrackOrder from "./TrackOrder/TrackOrder";
import ProjectDeliveries from "./ProjectDeliveries/ProjectDeliveries";

const ContainerGeneral = () => {
  return (
    <>
      <Breadcrumbs mainTitle={WidgetsTitle} parent={Widgets} title='' />
      <Container fluid className='general-widget'>
        <Row>
          <MobileApp/>
          <DailyVisitors/>
          <TotalEarnings/>
          <TotalExpenses/>
          <TransactionHistory/>
          <ProductSales/>
          <TotalRevenue/>
          <StockReport/>
          <TrackOrder/>
          <ProjectDeliveries/>
        </Row>
      </Container>
    </>
  );
};

export default ContainerGeneral;
