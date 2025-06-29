import { FacebookIcon, LinkedInIcon, TwitterIcon } from "@/Constant";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { Button } from "reactstrap";

export const OtherWay = () => {
  return (
    <div className="social mt-4">
      <div className="btn-showcase">
        <Button
          color="light"
          tag="a"
          href="https://www.linkedin.com/login"
          target="_blank"
        >
          <Linkedin className="txt-linkedin" /> {LinkedInIcon}
        </Button>
        <Button
          color="light"
          href="https://twitter.com/login?lang=en"
          target="_blank"
        >
          <Twitter className="txt-twitter" /> {TwitterIcon}
        </Button>
        <Button color="light" href="https://www.facebook.com/" target="_blank">
          <Facebook className="txt-fb" /> {FacebookIcon}
          <i className="fa fa-facebook" />
        </Button>
      </div>
    </div>
  );
};
