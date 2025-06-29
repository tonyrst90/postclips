import { Button, FormGroup, Input, Label } from "reactstrap";
import Link from "next/link";
import { ImagePath } from "@/Constant";
import { manageOrderTableBodyData } from "@/Data/General/Dashboard/EcommerceDashboard";
import { RecentOrderBodyProps } from "@/Types/Dashboard.type";
import Image from "next/image";

const ManageOrderTableBody: React.FC<RecentOrderBodyProps> = ({ filterText }) => {
  const filteredItems = manageOrderTableBodyData.filter(
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
          <td>
            <FormGroup check>
              <Input type="checkbox" />
              <Label check />
            </FormGroup>
          </td>
          <td className="sorting_1">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image src={`${ImagePath}/dashboard-2/product/${data.image}`} width={42} height={42} alt="product" />
              </div>
              <div className="flex-grow-1 ms-3">
                <Link href={'/app/ecommerce/product_list'}>
                  <h6>{data.productName}</h6>
                </Link>
              </div>
            </div>
          </td>
          <td>#{data.id}</td>
          <td>{data.date}</td>
          <td>${data.price}</td>
          <td>
            <Button color={data.color}>{data.status}</Button>
          </td>
          <td>{data.quantity} PCS</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ManageOrderTableBody;