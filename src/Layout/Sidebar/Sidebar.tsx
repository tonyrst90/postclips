import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImagePath } from "@/Constant";
import { useMobile } from "@/Hooks/useMobile";
import { usePathname } from "next/navigation";

import SettingsIcon from "@/assets/images/(postclips)/header/settings.svg";
import CampaignIcon from "@/assets/images/(postclips)/header/campaign.svg";
import AnalyticsIcon from "@/assets/images/(postclips)/header/analytics.svg";
import ClipsApprovalIcon from "@/assets/images/(postclips)/header/clips-approval.svg";
import { useMemo } from "react";

export const SideBar = () => {
  const { mobile } = useMobile();
  const pathname = usePathname();
  const ITEMS = useMemo(() => [
    { name: "Campaigns", icon: CampaignIcon, href: "/brand/campaigns" },
    { name: mobile ? "Clips" : "Clips approval", icon: ClipsApprovalIcon, href: "/brand/clips-approval" },
    { name: "Analytics", icon: AnalyticsIcon, href: "/brand/analytics" },
    { name: mobile ? "Profile" : "Account & settings", icon: SettingsIcon, href: "/brand/settings" },
  ], [mobile]);
  const activeIndex = ITEMS.findIndex(item => pathname.startsWith(item.href));

  return (
    <div className={cn("custom-sidebar", { "desktop": !mobile, })}>
      {(!mobile) && (
        <div className="d-flex align-items-center w-100 justify-content-center align-items-center" style={{ height: "2.6rem" }}>
          <Image
            className="img-fluid"
            src={`${ImagePath}/logo/logo-icon.png`}
            width={32}
            height={32}
            alt="Logo"
          />
          <span className="ms-2 fs-5 fw-semibold">PostClips</span>
        </div>
      )}

      {/* Menu Items */}
      <ul className="nav nav-pills w-100">
        {ITEMS.map(({ icon: Icon, ...item }, index) => (
          <li className="nav-item" key={index}>
            <Link
              href={item.href}
              className={cn("custom-menu-item d-flex align-items-center gap-2 nav-link", { "active": index === activeIndex })}
            >
              <Icon
                width={26}
                height={26}
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};