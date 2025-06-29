import { Row, Col } from "reactstrap";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import SVG from "@/CommonComponent/SVG";
import { setFlip } from "@/Redux/Reducers/Layout/LayoutSlice";
import { Href } from "@/Constant";

export const BookmarkListData = () => {
  const { bookmarkedData } = useAppSelector((state) => state.headerBookMark)
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="front">
      <h5 className="f-18 mb-0 dropdown-title">{'Bookmark'}</h5>
      <ul className="bookmark-dropdown">
        <li>
          <Row>
            {bookmarkedData.map((item, index) => (
              <Col xs={4} className="text-center" key={index}>
                <div className="bookmark-content" onClick={() => router.push(`${item.path}`)}>
                  <div className='bookmark-icon'><SVG className='stroke-icon' iconId={`stroke-${item.icon}`} /></div>
                  <span>{item.title}</span>
                </div>
              </Col>
            ))}
          </Row>
        </li>
        <li className="text-center" onClick={() => dispatch(setFlip())}>
          <Link className="flip-btn f-w-700" id="flip-btn" href={Href}>{'Add New Bookmark'}</Link>
        </li>
      </ul>
    </div>
  );
};