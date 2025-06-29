import SVG from "@/CommonComponent/SVG";
import { MenuList } from "@/Data/Layout/Menu";
import { MenuItem, SearchSuggestionItem } from "@/Types/Layout.type";
import { ChangeEvent, useEffect, useState } from "react";
import { Col, FormGroup, Input } from "reactstrap";
import ResponsiveSearchList from "./ResponsiveSearchList";

const SearchInput = () => {
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);

  useEffect(() => {
    const suggestionArray: SearchSuggestionItem[] = [];
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.children) {
        item.children.forEach((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        suggestionArray.push({ icon: icon, title: item.title, path: item.path || "" });
      }
    };
    MenuList?.forEach((item) => {
      item.Items?.forEach((child) => {
        getAllLink(child, child.icon);
      });
    });
    setArr(suggestionArray);
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!searchedWord) setSearchedWord("");
    setSearchedWord(e.target.value);
    let data = [...arr];
    let result = data.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchedArray(result);
  };
  return (
    <Col xxl={5} xl={4} md={4} className="left-header col-auto box-col-6 horizontal-wrapper p-0" >
      <div className="left-menu-header">
        <ul className="header-left">
          <li>
            <FormGroup className="w-100">
              <div className="Typeahead Typeahead--twitterUsers">
                <div className="u-posRelative d-flex">
                  <SVG className="search-bg svg-color me-2" iconId="fill-search" />
                  <Input className="demo-input Typeahead-input form-control-plaintext w-100 p-0" type="text" placeholder='Search anything...' name="q" value={searchedWord} onChange={(e) => handleSearch(e)} />
                </div>
                <div className={`Typeahead-menu custom-scrollbar ${searchedWord.length ? "is-open" : ""}`} >
                  <ResponsiveSearchList searchedArray={searchedArray} setSearchedWord={setSearchedWord} />
                </div>
              </div>
            </FormGroup>
          </li>
        </ul>
      </div>
    </Col>
  );
};
export default SearchInput;