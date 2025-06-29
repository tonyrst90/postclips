import { ImagePath } from "@/Constant";
import { upcomingDeadlinesBodyData } from "@/Data/General/Dashboard/ProjectDashboard";
import { RecentOrderBodyProps } from "@/Types/Dashboard.type";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "reactstrap";

const UpcomingDeadlinesBody: React.FC<RecentOrderBodyProps> = ({ filterText }) => {
  const filteredItems = upcomingDeadlinesBodyData.filter(
    (item) => {
      return Object.values(item).some((value) =>
        value && value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    }
  );
  return (
    <tbody>
      {filteredItems.map((data, i) => (
        <tr role="row" key={i}>
          <td className="sorting_1">
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
          <td>
            <span>{data.task}</span>
          </td>
          <td>{data.deadLine}</td>
          <td>
            <Progress value={data.value} color={data.color} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default UpcomingDeadlinesBody;