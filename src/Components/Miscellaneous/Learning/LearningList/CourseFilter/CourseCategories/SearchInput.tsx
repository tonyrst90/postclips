import { Search } from "react-feather";
import { Input } from "reactstrap";

const SearchInput = () => {
  return (
    <div className="job-filter">
      <div className="faq-form">
        <Input type="text" placeholder="Search.." />
        <Search className="search-icon" />
      </div>
    </div>
  );
};

export default SearchInput;