import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Table } from "reactstrap";
 

const InvoiceHeader = () => {
  return (
    <td>
      <Table className="logo-wrappper w-100" borderless>
        <tbody>
          <tr>
            <td>
              <img className="for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" />
              <img className="for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo"/>
              <span style={{ opacity: "0.8", display: "block", marginTop: 10 }} >
                202-555-0258
              </span>
            </td>
            <td className="address" style={{ textAlign: "right", opacity: "0.8", width: "16%"}} >
              <span>1982 Harvest Lane New York, NY12   State</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceHeader;
