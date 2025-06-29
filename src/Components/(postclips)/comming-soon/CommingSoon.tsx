/* eslint-disable @next/next/no-img-element */
import { ImagePath, WeAreComingSoon } from "@/Constant";
import { Container } from "reactstrap";
import CountdownData from "./CountdownData";
import Link from "next/link";

const CommingSoon = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="p-0">
        <div className="comingsoon auth-bg-video">
          <video className="bgvideo-comingsoon" id="bgvid" poster={`${ImagePath}/other-images/coming-soon-bg.jpg`} playsInline autoPlay muted loop>
            <source src={"/assets/video/auth-bg.mp4"} type="video/mp4" />
          </video>
          <div className="comingsoon-inner text-center">
            <img src={`${ImagePath}/logo/logo-1.png`} alt="" style={{ width: "50%" }} />
            <h5>{WeAreComingSoon}</h5>
            <div className="countdown">
              <CountdownData />
            </div>
            <div className="mt-4">
              <Link href="/contact-us" className="btn btn-primary" style={{fontSize: 22}}>
                Want to Contact Us?
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommingSoon;