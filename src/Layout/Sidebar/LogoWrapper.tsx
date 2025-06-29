import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setToggleSidebar } from "@/Redux/Reducers/Layout/LayoutSlice";
import Image from "next/image";
import Link from "next/link";

export const LogoWrapper = () => {
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="logo-wrapper">
        <Link href={`/dashboard/default`}>
          <Image className="img-fluid" src={`${ImagePath}/logo/logo.png`} width={121} height={38} alt="" />
        </Link>
      </div>
      <div className="logo-icon-wrapper">
        <Link href={`/dashboard/default`}>
          <Image className="img-fluid" src={`${ImagePath}/logo/logo-icon.png`} width={32} height={32} alt="" />
        </Link>
      </div>
    </>
  );
};