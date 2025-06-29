import { ImagePath } from "@/Constant";
import { openInvoicesTableBodyData } from "@/Data/General/Dashboard/EcommerceDashboard";
import { RecentOrderBodyProps } from "@/Types/Dashboard.type";
import Link from "next/link";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { CommonDropdown } from "../../Common/CommonDropdown";
import Image from "next/image";

const OpenInvoicesTableBody: React.FC<RecentOrderBodyProps> = ({ filterText }) => {
  const filteredItems = openInvoicesTableBodyData.filter(
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
            <FormGroup check>
              <Input type="checkbox" />
              <Label check />
            </FormGroup>
          </td>
          <td>{data.invoiceNo}</td>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image src={`${ImagePath}/dashboard-2/user/${data.image}`} width={40} height={40} alt="" />
              </div>
              <div className="flex-grow-1 ms-3">
                <Link href={'/app/ecommerce/product_list'}>
                  <h6>{data.name}</h6>
                  <span>{data.email}</span>
                </Link>
              </div>
            </div>
          </td>
          <td>
            <Button color={data.color}>{data.status}</Button>
          </td>
          <td>{data.amount}</td>
          <td>{data.date}</td>
          <td>
            <CommonDropdown />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default OpenInvoicesTableBody;