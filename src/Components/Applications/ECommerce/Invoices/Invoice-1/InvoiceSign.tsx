import { AuthorizedSign, ImagePath } from "@/Constant";
import Image from "next/image";

 

const InvoiceSign = () => {
  return (
    <tr
      style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: 12 }}>
      <td>
        <Image src={`${ImagePath}/email-template/invoice-1/sign.png`} alt="sign" height={50} width={100}/>
        <span
          style={{
            display: "block",
            background: "rgba(82, 82, 108, 0.3)",
            height: 1,
            width: 200,
            marginBottom: 10,
          }}
        />
        <span style={{ color: "rgba(82, 82, 108, 0.8)" }}>{AuthorizedSign}</span>
      </td>
    </tr>
  );
};

export default InvoiceSign;
