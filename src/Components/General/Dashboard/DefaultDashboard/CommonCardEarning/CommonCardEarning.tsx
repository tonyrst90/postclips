import SVG from "@/CommonComponent/SVG";
import { CommonCardEarningProps } from "@/Types/Dashboard.type";
import ReactApexChart from "react-apexcharts";
import { CardBody } from "reactstrap";

const CommonCardEarning: React.FC<CommonCardEarningProps> = ({ chart, amount, percentage, icon }) => {
  return (
    <CardBody className="p-0">
      <ReactApexChart options={chart} series={chart.series} height={chart.chart.height} type={chart.chart.type} />
      <div className="d-flex p-3 pt-0">
        <h2 className="me-2">{amount}</h2>
        <span className={`bg-light-${icon === "down-arrow" ? "danger" : "success"}`}>
          <SVG iconId={icon} />
        </span>
        <h6 className={`font-${icon === "down-arrow" ? "danger" : "success"}`}>{percentage}</h6>
      </div>
    </CardBody>
  );
};

export default CommonCardEarning;