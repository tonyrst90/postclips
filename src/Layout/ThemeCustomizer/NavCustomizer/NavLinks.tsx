import { ImagePath } from "@/Constant"
import { navLinkList } from "@/Data/Layout/ThemeCustomizer"
import Image from "next/image"
import { NavLink } from "reactstrap"

const NavLinks = () => {
  return (
    <>
      {navLinkList &&
        navLinkList.map((item, index) => (
          <NavLink key={index} href={item.path} target="_blank">
            <div>
              <Image width={22} height={22} className="img-fluid" src={`${ImagePath}/customizer/${item.image}`} alt="icons" priority />
            </div>
            <span>{item.name}</span>
          </NavLink>
        ))}
    </>
  )
}

export default NavLinks