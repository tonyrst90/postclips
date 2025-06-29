import { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { ChatTabPane } from "./ChatTabPane";
import { ContactTabPane } from "./ContactTabPane";
import { Chats, Contacts } from "@/Constant";

export const ChatOptionTab = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="advance-options">
      <Nav className="border-tab" id="chat-options-tab">
        <NavItem><NavLink className={activeTab === "1" ? "active" : ""} onClick={() => setActiveTab("1")} id="chats-tab">{Chats}</NavLink></NavItem>
        <NavItem><NavLink className={activeTab === "2" ? "active" : ""} onClick={() => setActiveTab("2")} id="contacts-tab">{Contacts}</NavLink></NavItem>
      </Nav>
      <TabContent activeTab={activeTab} id="chat-options-tabContent">
        <TabPane id="chats" tabId="1">
          <ChatTabPane />
        </TabPane>
        <TabPane id="contacts" tabId="2">
          <ContactTabPane />
        </TabPane>
      </TabContent>
    </div>
  );
};