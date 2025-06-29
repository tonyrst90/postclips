/* eslint-disable @next/next/no-img-element */
import { ImagePath, WeAreComingSoon } from "@/Constant";
import { Container } from "reactstrap";
import CountdownData from "./CountdownData";

const ComingSoonBgVideoContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="p-0">
        <div className="comingsoon auth-bg-video">
          <video className="bgvideo-comingsoon" id="bgvid" poster={`${ImagePath}/other-images/coming-soon-bg.jpg`} playsInline autoPlay muted loop>
            <source src={"/assets/video/auth-bg.mp4"} type="video/mp4" />
          </video>
          <div className="comingsoon-inner text-center">
            <img src={`${ImagePath}/logo/logo-1.png`} alt="" />
            <h5>{WeAreComingSoon}</h5>
            <div className="countdown">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonBgVideoContainer;