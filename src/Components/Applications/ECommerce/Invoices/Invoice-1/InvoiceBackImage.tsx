import { ImagePath } from "@/Constant";
import Image from "next/image";

 
const InvoiceBackImage = () => {
  return (
    <td>
      <Image className="banner-image w-100" height={100} width={100} src={`${ImagePath}/email-template/invoice-1/1.png`} alt="background"/>
    </td>
  );
};

export default InvoiceBackImage;
