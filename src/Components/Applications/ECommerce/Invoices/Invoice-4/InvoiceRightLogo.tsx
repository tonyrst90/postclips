import { Email, ImagePath, PhoneNumber, Website } from "@/Constant";

 

const InvoiceRightLogo = () => {
  return (
    <td>
      <img className="for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" style={{height:50, marginBottom: 14 }} />
      <img className="for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo" style={{height:50, marginBottom: 14 }} />
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }} >
        2118 Thornridge Cir. Syracuse, Connecticut 35624, United State
      </span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }} >
        {PhoneNumber} : (239) 555-0108
      </span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }} >
        {Email} : PostClips@themesforest.com
      </span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8"}}>
        {Website}: www.crocsthemes.com
      </span>
    </td>
  );
};

export default InvoiceRightLogo;
