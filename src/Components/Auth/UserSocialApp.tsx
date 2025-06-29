import { FacebookIcon, LinkedInIcon, TwitterIcon } from "@/Constant";
import { signIn } from "next-auth/react";
import React from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { Button } from "reactstrap";

export const UserSocialApp = () => {
  return (
    <div className="social mt-4">
      <div
        className="btn-showcase d-grid gap-2"
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <Button tag="a" color="light">
          <i className="fa fa-facebook text-primary" /> Facebook
        </Button>
        <Button tag="a" color="light">
          <i className="fa fa-google text-danger" /> Google
        </Button>
        <Button tag="a" color="light">
          <i className="fa fa-apple" /> Apple
        </Button>
      </div>
    </div>
  );
};
