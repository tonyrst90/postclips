import { ImagePath } from "@/Constant";
import { recentOrderBodyData } from "@/Data/General/Dashboard/DefaultDashboard";
import { RecentOrderBodyProps } from "@/Types/Dashboard.type";
import Image from "next/image";
import Link from "next/link";
import { Button, FormGroup, Input, Label } from "reactstrap";

const RecentOrderBody: React.FC<RecentOrderBodyProps> = ({ filterText }) => {
  const filteredItems = recentOrderBodyData.filter(
    (item) => {
      return Object.values(item).some((value) =>
        value && value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    }
  );
  return (
    <>
      {filteredItems.map((data, i) => (
        <tr key={i}>
          <td>
            <FormGroup check>
              <Input type="checkbox" />
              <Label check />
            </FormGroup>
          </td>
          <td>{data.no}</td>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image src={`${ImagePath}/dashboard/user/${data.image}`} width={42} height={42} alt="product" />
              </div>
              <div className="flex-grow-1 ms-3">
                <Link href={'/app/users/user_profile'}>
                  <h6>{data.customerName}</h6>
                </Link>
              </div>
            </div>
          </td>
          <td>#{data.id}</td>
          <td>{data.date}</td>
          <td>{data.city}</td>
          <td>
            <Button color={data.color}>{data.status}</Button>
          </td>
          <td>${data.amount}</td>
        </tr>
      ))}
    </>
  );
};
export default RecentOrderBody;