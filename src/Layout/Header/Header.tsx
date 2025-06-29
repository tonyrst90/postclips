import { Col, Row } from "reactstrap";
import HeaderLogo from "./HeaderLogo";
import SearchInput from "./SearchInput/SearchInput";
import RightHeaderIcon from "./RightHeaderIcon/RightHeaderIcon";
import AnalyticsHeader from "./AnalyticsHeader";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { useEffect } from "react";
import { headerResponsive } from "@/Redux/Reducers/Layout/LayoutSlice";
import { ImagePath } from "@/Constant";
import { ECommerceTitle } from "@/Constant";
import { AddProductTitle } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { usePathname } from "next/navigation";
import CampaignStepper from "./CampaignStepper";
import Image from "next/image";

const Header = () => {
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  const { currentPage } = useAppSelector((state) => state.header);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
    dispatch(headerResponsive());
  }, []);

  // Show stepper only on /brand/campaigns/detail/[id]
  const showStepper = /^\/brand\/campaigns\/detail\/[\w-]+$/.test(pathname);
  
  // Show analytics header on any analytics page or its sub-routes
  const isAnalyticsPage = pathname.startsWith('/brand/analytics');

  // If it's the analytics page, render the custom analytics header
  if (isAnalyticsPage) {
    return (
      <div className={`page-header analytics-page ${toggleSidebar ? "close_icon" : ""}`}>
        <AnalyticsHeader />
      </div>
    );
  }

  return (
    <div className={`page-header ${toggleSidebar ? "close_icon" : ""}`}>
      <Row className='header-wrapper m-0'>
        <HeaderLogo className="mobile-only" />

        <Col xxl={5} xl={4} md={4} className="left-header col-auto box-col-6 horizontal-wrapper p-0" >
          {showStepper ? <CampaignStepper /> : <Breadcrumbs title={currentPage} />}
        </Col>
        <RightHeaderIcon />
      </Row>
    </div>
  );
};
export default Header;