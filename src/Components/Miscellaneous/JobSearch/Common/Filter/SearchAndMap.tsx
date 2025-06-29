import { MapPin, Search } from "react-feather";
import { Input } from "reactstrap";

const SearchAndMap = () => {
  return (
    <>
      <div className="job-filter mb-2">
        <div className="faq-form">
          <Input type="text" placeholder="Search.." />
          <Search className="search-icon" />
          <Search className="search-icon"  />
        </div>
      </div>
      <div className="job-filter">
        <div className="faq-form">
          <Input type="text" placeholder="location.." />
          <MapPin className="search-icon" />
          <MapPin className="search-icon"  />
        </div>
      </div>
    </>
  );
};

export default SearchAndMap;