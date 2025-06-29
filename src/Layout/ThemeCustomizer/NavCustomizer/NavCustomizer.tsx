import { Href, ImagePath, QuickOption } from "@/Constant";
import { Nav, NavLink } from "reactstrap";
import NavLinks from "./NavLinks";
import { NavCustomizerType } from "@/Types/ThemeCustomizer.type";
import Image from "next/image";

const NavCustomizer: React.FC<NavCustomizerType> = ({ callbackNav, selected }) => {
  return (
    <Nav className="flex-column nac-pills">
      <NavLink className={`${selected === "sidebar-type" ? "active" : ""} mb-2`} onClick={() => callbackNav("sidebar-type", true)} href={Href}>
        <div className="settings">
          <Image width={22} height={22} className="img-fluid" src={`${ImagePath}/customizer/1.png`} alt="icons" priority />
        </div>
        <span>{QuickOption}</span>
      </NavLink>
      <NavLinks />
    </Nav>
  );
};

export default NavCustomizer;