import { Sidebar_Type } from "@/Constant";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";

const SidebarType = () => {
  return (
    <div>
      <h6>{Sidebar_Type}</h6>
      <ul className="sidebar-type layout-grid">
        <Vertical/>
        <Horizontal />
      </ul>
    </div>
  );
};

export default SidebarType;
