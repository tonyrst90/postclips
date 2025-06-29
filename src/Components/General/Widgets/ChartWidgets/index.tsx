"use client"
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { ChartTitle, WidgetsTitle } from "@/Constant";
import { Container, Row } from "reactstrap"
import TotalSaleWidgets from "./TotalSaleWidgets/TotalSaleWidgets";
import ProjectCreated from "./ProjectCreated/ProjectCreated";
import SalesOverview from "./SalesOverview/SalesOverview";
import MonthlyHistory from "./MonthlyHistory/MonthlyHistory";
import LiveProducts from "./LiveProducts/LiveProducts";
import StockMarket from "./StockMarket/StockMarket";
import Turnover from "./Turnover/Turnover";
import CryptoCurrencyPrices from "./CryptoCurrencyPrices/CryptocurrencyPrices";
import CryptoAnnotations from "./CryptoAnnotations/CryptoAnnotations";
import Finance from "./Finance/Finance";
import OrderStatus from "./OrderStatus/OrderStatus";
import MonthlySales from "./MonthlySales/MonthlySales";
import UsesWidgets from "./Uses/UsesWidgets";

const ChartWidgetsContainer = () => {
    return (
        <>
            <Breadcrumbs mainTitle={ChartTitle} parent={WidgetsTitle} title={ChartTitle} />
            <Container fluid>
                <Row>
                    <TotalSaleWidgets />
                </Row>
                <Row>
                    <ProjectCreated />
                    <SalesOverview />
                    <MonthlyHistory />
                </Row>
                <Row>
                    <LiveProducts />
                    <Turnover />
                    <CryptoCurrencyPrices />
                    <CryptoAnnotations />
                </Row>
                <Row>
                    <StockMarket />
                    <Finance />
                    <OrderStatus />
                    <MonthlySales />
                    <UsesWidgets />
                </Row>
            </Container>
        </>
    )
}
export default ChartWidgetsContainer;