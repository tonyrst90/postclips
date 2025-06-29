import { useEffect } from "react";
import SVG from "@/CommonComponent/SVG";
import { MenuListType, SidebarItemTypes } from "@/Types/Layout.type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/Redux/Hooks";
import { setHeaderState } from "@/Redux/Reducers/(postclips)/auth/HeaderSlice";

const Menulist: React.FC<MenuListType> = ({ menu, setActiveMenu, activeMenu, level, className }) => {
  const pathname = usePathname();
  const { t } = useTranslation("common");
  const dispatch = useAppDispatch();

  const ActiveNavLinkUrl = (item: any) => {
    if (!item) return false;
    if (pathname === item.path) return true;
    if (item.otherPaths && Array.isArray(item.otherPaths)) {
      return item.otherPaths.some((otherPath: string) =>
        pathname === otherPath || pathname.startsWith(otherPath + "/")
      );
    }
    return false;
  };

  const shouldSetActive = ({ item }: SidebarItemTypes) => {
    var returnValue = false;
    if (item?.path === pathname) returnValue = true;
    if (!returnValue && item?.children) {
      item?.children.every((subItem) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  };

  useEffect(() => {
    menu?.forEach((item: any) => {
      let gotValue = shouldSetActive({ item });
      if (gotValue) {
        let temp = [...activeMenu];
        temp[level] = (item.title);
        setActiveMenu(temp);
        dispatch(setHeaderState(item.title))
      }
    });
  }, [pathname]);

  return (
    <>
      {menu?.map((item, index) => {
        const isActive = ActiveNavLinkUrl(item);
        return (
          <li key={index} className={`${level === 0 ? "sidebar-list" : ""} ${isActive ? "active" : ""}`}>
            <Link
              className={`${!className && level !== 2 ? "sidebar-link sidebar-title" : ""} ${isActive ? "active" : ""}`}
              href={item.path || "#"}
            >
              {item.icon && (
                <div className="menu-icon">
                  <SVG iconId={isActive ? `${item.icon}-active` : item.icon} />
                </div>
              )}
              <span className="menu-title">{t(item.title)}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Menulist;