import { Col } from "reactstrap";
import Feedback from "./Feedback/Feedback";
import Notifications from "./Notifications/Notifications";
// import ResponsiveSearchInput from "./ResponsiveSearchInput/ResponsiveSearchInput";
// import HeaderBookmark from "./HeaderBookmark";
// import HeaderMessage from "./HeaderMessage/HeaderMessage";
// import UserProfile from "./UserProfile/UserProfile";
// import HeaderCart from "./HeaderCart/HeaderCart";
// import ZoomInOut from "./ZoomInOut/ZoomInOut";
// import DarkMode from "./DarkMode/DarkMode";
// import Language from "./Language/Language";

const RightHeaderIcon = () => {
  return (
    <div
      className="nav-right col-auto box-col-6 pull-right right-header p-0 ms-auto"
    >
      <ul className="nav-menus">
        {/* <ResponsiveSearchInput /> */}
        {/* <Language /> */}
        {/* <ZoomInOut /> */}
        {/* <HeaderBookmark /> */}
        {/* <DarkMode /> */}
        {/* <HeaderMessage /> */}
        {/* <HeaderCart /> */}
        {/* <UserProfile /> */}
        <Feedback />
        <Notifications />
      </ul>
    </div>
  );
};
export default RightHeaderIcon;
