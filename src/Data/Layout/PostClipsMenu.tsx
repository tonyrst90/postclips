import { MenuItem } from "@/Types/Layout.type";

export const PostClipsMenuListAdmin: MenuItem[] | undefined = [
  {
    title: "General",
    lanClass: "lan-1",
    menucontent: "Dashboards",
    Items: [
      {
        path: "/admin/home",
        icon: "fill-home",
        type: "link",
        title: "Dashboard",
        id: 1,
      },
      {
        path: "/admin/users",
        icon: "fill-home",
        type: "link",
        title: "Users",
        id: 2,
      },
      {
        path: "/admin/content",
        icon: "fill-home",
        type: "link",
        title: "Content",
        id: 3,
      },
      {
        path: "/admin/campaigns",
        icon: "fill-home",
        type: "link",
        title: "Campaigns",
        id: 4,
      },
    ],
  },
];

export const PostClipsMenuListBrand: MenuItem[] | undefined = [
  {
    title: "Brand",
    lanClass: "lan-1",
    menucontent: "Brand",
    Items: [
      {
        path: "/brand/campaigns",
        otherPaths: ["/brand/campaigns/detail"],
        icon: "campaigns",
        type: "link",
        title: "Campaigns",
        id: 1,
      },
      {
        path: "/brand/clips-approval",
        icon: "clips-approval",
        type: "link",
        title: "Clips approval",
        id: 2,
      },
      {
        path: "/brand/analytics",
        icon: "analytics",
        type: "link",
        title: "Analytics",
        id: 3,
      },
      {
        path: "/brand/settings",
        icon: "settings",
        type: "link",
        title: "Account & Settings",
        id: 4,
      },
    ],
  },
];

export const PostClipsMenuListClipper: MenuItem[] | undefined = [
  {
    title: "General",
    lanClass: "lan-1",
    menucontent: "Dashboards",
    Items: [
      {
        path: "/home",
        icon: "home",
        type: "link",
        title: "Dashboard",
        id: 1,
      },
      {
        path: "/accounts",
        icon: "activity",
        type: "link",
        title: "Accounts",
        id: 2,
      },
      {
        path: "/campaigns",
        icon: "briefcase",
        type: "link",
        title: "Campaigns",
        id: 3,
      },
      {
        path: "/clips",
        icon: "bookmark",
        type: "link",
        title: "Clips",
        id: 4,
      },
    ],
  },
];
