import { useAppSelector } from "@/Redux/Hooks";
import { Fragment, useState, memo, useEffect } from "react";
import { MenuItem } from "@/Types/Layout.type";
import Menulist from "./Menulist";

const SidebarMenuList = memo(() => {
  const [isClient, setIsClient] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string[]>([]);
  const { menuList, loading } = useAppSelector((state) => state.sidebar);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // On server-side or before hydration, render a placeholder
  if (!isClient) {
    return <div className="sidebar-placeholder" />;
  }

  // After hydration, handle the actual menu rendering
  if (loading || !menuList) {
    return <div className="sidebar-placeholder" />;
  }

  return (
    <>
      {menuList.map((mainMenu: MenuItem, index) => (
        <Fragment key={mainMenu.title || index}>
          <Menulist
            menu={mainMenu.Items}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            level={0}
          />
        </Fragment>
      ))}
    </>
  );
});

SidebarMenuList.displayName = 'SidebarMenuList';

export default SidebarMenuList;
