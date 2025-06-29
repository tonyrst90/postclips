import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./TabBar.scss";

const Footer = () => {
  const pathname = usePathname();

  const isAnalyticsPage = pathname.startsWith("/brand/analytics");

  if (isAnalyticsPage) {
    // Tab Bar Footer
    const tabs = [
      {
        label: "Campaigns",
        icon: "campaigns", // your SVG id
        href: "/brand/campaigns",
      },
      {
        label: "Clips approval",
        icon: "clips-approval",
        href: "/brand/clips-approval",
      },
      {
        label: "Analytics",
        icon: "analytics",
        href: "/brand/analytics",
      },
      {
        label: "Profile",
        icon: "profile",
        href: "/brand/profile",
      },
    ];

    return (
      <div className="tab-bar">
        {tabs.map((tab, i) => {
          const isActive = pathname.startsWith(tab.href);
          return (
            <Link
              href={tab.href}
              key={i}
              className={`tab-item ${isActive ? "active" : ""}`}
            >
              <Image
                src={`/assets/icons/analytics/${tab.icon}.svg`}
                alt={"Image tab icon " + (i + 1)}
                className="tab-icon"
                width={24}
                height={24}
              />
              <span className="tab-label">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    );
  }
  return null;
};

export default Footer;
