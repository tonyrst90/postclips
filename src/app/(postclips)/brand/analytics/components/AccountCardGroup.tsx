import React from "react";
import AccountCard from "./AccountCard";
import "./AccountCardGroup.scss";
import { useAnalytics } from "@/Hooks/useAnalytics";

const accountData = [
  {
    accountUrl: "https://www.tiktok.com/@adinclipsw",
    avatarUrl: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/db27119054a6fa04159a5465c0ad8718~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=37ced240&x-expires=1750208400&x-signature=xwIl%2BFAN0OiSH9%2F5Sx3sqKm0EAw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva",
    username: "Adinclipsw",
    views: " 78,406,392",
    platformIcon: "/assets/icons/analytics/tiktok.svg",
  },
  {
    accountUrl: "https://www.tiktok.com/@fightinginc",
    avatarUrl: "https://p16-pu-sign-no.tiktokcdn-eu.com/tos-no1a-avt-0068c001-no/e312ae50e9ff684796b65e124132dec5~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=b3c8aee8&x-expires=1750208400&x-signature=bQAgKhoZlHRUx7%2F8KhCgI%2Bc%2FKLE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva",
    username: "FightingInc",
    views: "18,799,012",
    platformIcon: "/assets/icons/analytics/youtube.svg",
  },
  {
    accountUrl: "https://www.tiktok.com/@firstclassclip",
    avatarUrl: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4eaa813af282ba63e99326846a2bd4d8~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=5fb8728a&x-expires=1750208400&x-signature=JP1%2BiLj1tWwvyqyiGsS8wj4I%2Fns%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva",
    username: "FirstClassClips",
    views: "29,311,780",
    platformIcon: "/assets/icons/analytics/instagram.svg",
  },
];

const AccountCardGroup: React.FC = () => {
  const { testDataOverview } = useAnalytics();

  return (
    <div className="account-group">
      <div className="account-group__header">
        <h2 className="account-group__title">
          Accounts
          <span className="dot">•</span>
          <span className="date">{testDataOverview?.total_accounts?.toLocaleString()}</span>
        </h2>
        <button className="account-group__view-all">VIEW ALL</button>
      </div>

      <div className="account-group__grid">
        {accountData.map((account, index) => (
          <AccountCard key={index} {...account} accountUrl={account.accountUrl} />
        ))}
      </div>
    </div>
  );
};

export default AccountCardGroup;
