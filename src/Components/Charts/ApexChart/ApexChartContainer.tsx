import { Container, Row } from "reactstrap";
import { AreaSpalineChart } from "./AreaSpalineChart";
import { BarChart } from "./BarChart";
import { BasicAreaChart } from "./BasicAreaChart";
import { BubbleChart } from "./BubbleChart";
import { CandlestickChart } from "./CandlestickChart";
import { ColumnChart } from "./ColumnChart";
import { DonutChart } from "./DonutChart";
import { LineChart } from "./LineChart";
import { MixedChart } from "./MixedChart";
import { PieChart } from "./PieChart";
import { RadarChart } from "./RadarChart";
import { RadialBarChart } from "./RadialBarChart";
import { SteplineChart } from "./SteplineChart";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { ApexChartTitle, ChartsTitle } from "@/Constant";

export default function ApexChartContainer() {
  return (
    <>
      <Breadcrumbs mainTitle={ApexChartTitle} parent={ChartsTitle} title={ApexChartTitle} />
      <Container fluid>
        <Row>
          <BasicAreaChart />
          <AreaSpalineChart />
          <BarChart />
          <ColumnChart />
          <BubbleChart />
          <SteplineChart />
          <LineChart />
          <PieChart />
          <DonutChart />
          <MixedChart />
          <CandlestickChart />
          <RadarChart />
          <RadialBarChart />
        </Row>
      </Container>
    </>
  );
}