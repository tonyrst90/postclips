import { ImagePath } from "@/Constant";
import { ClientBudgetPropsType } from "@/Types/Dashboard.type";
import Image from "next/image";
import { Button } from "reactstrap";

const UserDetails: React.FC<ClientBudgetPropsType> = ({ data }) => {
  return (
    <div className="user-details customers">
      <ul>
        {data.userDetail.map((item, i) => (
          <li className="d-inline-block" key={i}>
            <Image src={`${ImagePath}/dashboard-3/user/${item}`} width={30} height={30} alt="user" />
          </li>
        ))}
      </ul>
      <Button color={data.btnColor}>{data.buttonName}</Button>
    </div>
  );
};

export default UserDetails;
