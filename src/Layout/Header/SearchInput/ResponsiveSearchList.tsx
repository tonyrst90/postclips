import SVG from "@/CommonComponent/SVG";
import { useAppDispatch } from "@/Redux/Hooks";
import { setResponsiveSearch } from "@/Redux/Reducers/Layout/LayoutSlice";
import { SearchSuggestionListType } from "@/Types/Layout.type";
import Link from "next/link";
import React from "react";

const ResponsiveSearchList: React.FC<SearchSuggestionListType> = ({ searchedArray, setSearchedWord }) => {
  const dispatch = useAppDispatch();
  const handleSearch = () => {
    setSearchedWord("");
    dispatch(setResponsiveSearch());
  };
  return (
    <>
      {searchedArray?.map((item, index) => (
        <div className="ProfileCard u-cf" key={index}>
          <div className="ProfileCard-avatar">
            <SVG className="fill-icon" iconId={`fill-${item.icon}`} />
          </div>
          <div className="ProfileCard-details">
            <div className="ProfileCard-realName">
              <Link className="realname w-auto d-flex justify-content-start gap-2" href={item.path} onClick={handleSearch}>{item.title}</Link>
            </div>
          </div>
        </div>
      ))}
      {!searchedArray?.length && <p>Opps!! There are no result found.</p>}
    </>
  )
}
export default ResponsiveSearchList