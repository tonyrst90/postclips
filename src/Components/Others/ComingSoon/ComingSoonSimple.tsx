/* eslint-disable @next/next/no-img-element */
import { ImagePath, WeAreComingSoon } from "@/Constant";
import { Container } from "reactstrap";
import CountdownData from "./CountdownData";

const ComingSoonSimpleContainer = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="p-0">
        <div className="comingsoon">
          <div className="comingsoon-inner text-center">
            <img src={`${ImagePath}/logo/logo-1.png`} alt="coming soon" />
            <h5>{WeAreComingSoon}</h5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonSimpleContainer;