import SVG from "@/CommonComponent/SVG";
import { useAppSelector } from "@/Redux/Hooks";
import { BookmarkListData } from "./BookmarkListData";
import { BookmarkBack } from "./BookmarkBack";

const HeaderBookmark = () => {
  const { flip } = useAppSelector((state) => state.layout);

  return (
    <li className="onhover-dropdown">
      <SVG iconId="fill-star" />
      <div className={`onhover-show-div bookmark-flip ${flip ? "active" : ""}`}>
        <div className="flip-card">
          <div className={`flip-card-inner ${flip ? "flipped" : ""}`}>
            <BookmarkListData />
            <BookmarkBack />
          </div>
        </div>
      </div>
    </li>
  );
};
export default HeaderBookmark;