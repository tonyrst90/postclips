import SVG from "@/CommonComponent/SVG";
import { Href } from "@/Constant";
import React from "react";
import { Mic } from "react-feather";
import { Button, Input } from "reactstrap";
import { ContactList } from "./ContactList";

export const ContactTabPane = () => {
  return (
    <>
      <div className="common-space">
        <p>{'Contacts'}</p>
        <div className="header-top">
          <Button color="transparent" className="badge-light-primary f-w-500" href={Href}>
            <i className="fa fa-plus" />
          </Button>
        </div>
      </div>
      <div className="search-contacts">
        <Input type="text" placeholder='Name and phone number' />
        <SVG iconId="stroke-search" />
        <Mic className="mic-search" />
      </div>
      <ContactList />
    </>
  );
};