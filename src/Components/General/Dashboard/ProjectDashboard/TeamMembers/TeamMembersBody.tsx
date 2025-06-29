import { ImagePath } from "@/Constant";
import { teamMembersBodyData } from "@/Data/General/Dashboard/ProjectDashboard";
import { RecentOrderBodyProps } from "@/Types/Dashboard.type";
import Image from "next/image";
import Link from "next/link";
import ReactApexChart from "react-apexcharts";

const TeamMembersBody: React.FC<RecentOrderBodyProps> = ({ filterText }) => {
  const filteredItems = teamMembersBodyData.filter(
    (item) => {
      return Object.values(item).some((value) =>
        value && value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    }
  );
  return (
    <tbody>
      {filteredItems.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image src={`${ImagePath}/dashboard-3/user/${data.image}`} width={42} height={42} alt="user" />
              </div>
              <div className="flex-grow-1 ms-2">
                <Link href={'/app/users/user_profile'}>
                  <h6>{data.name}</h6>
                </Link>
              </div>
            </div>
          </td>
          <td>{data.designation}</td>
          <td>{data.hours}</td>
          <td>
            <div className="member-chart">
              <ReactApexChart options={data.chart} series={data.chart.series} height={60} type="donut" />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TeamMembersBody;