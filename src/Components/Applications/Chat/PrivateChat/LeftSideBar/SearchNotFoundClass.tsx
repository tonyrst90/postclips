import { Col } from "reactstrap";
import { ImagePath } from "@/Constant";
import { SearchNotFoundClassType } from "@/Types/Chat.type";
import Image from "next/image";

const SearchNotFoundClass: React.FC<SearchNotFoundClassType> = ({ word }) => {
  return (
    <Col sm={12}>
      <div>
        <div className="search-not-found text-center p-5">
          <Image className="img-100 mb-4" src={`${ImagePath}/other-images/sad.gif`} width={100} height={100} alt="" />
          <p>{`Sorry, Not Found Any ${word}`}</p>
        </div>
      </div>
    </Col>
  );
};

export default SearchNotFoundClass;