import SVG from "@/CommonComponent/SVG";
import { stockReportData } from "@/Data/General/Dashboard/EcommerceDashboard";

const StockReportDetails = () => {
  return (
    <div className="stock-report mt-4 p-3 pb-0 pt-0">
      <ul>
        {stockReportData.map((data, i) => (
          <li key={i}>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <h4>{data.amount}</h4>
                <SVG className="ms-1" iconId={data.svgIcon} />
                <h6 className={`font-${data.color}`}>{data.percentage}</h6>
              </div>
            </div>
            <span>{data.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockReportDetails;