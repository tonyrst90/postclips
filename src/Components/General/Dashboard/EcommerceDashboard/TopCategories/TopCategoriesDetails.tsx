import { topCategoriesDetailsData } from "@/Data/General/Dashboard/EcommerceDashboard";

const TopCategoriesDetails = () => {
  return (
    <ul>
      {topCategoriesDetailsData.map((data, i) => (
        <li key={i}> 
          <div className="d-flex">
            <div className="flex-shrink-0 me-2">
              <span className={`bg-${data.color}`} />
            </div>
            <div className="flex-grow-1">
              <h4>{data.percentage}</h4>
              <h6>{data.title}</h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TopCategoriesDetails;