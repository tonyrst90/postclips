/* eslint-disable @next/next/no-img-element */
import { CardBody } from "reactstrap";
import { Href, ImagePath } from "@/Constant";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { masonryImageData } from "@/Data/Miscellaneous/Gallery/Gallery";

export const MasonryGalleryBody = () => {
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };

  return (
    <CardBody className="photoswipe-pb-responsive">
      <Gallery>
        <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery" columnClassName="col-md-3 col-sm-6 grid-item">
          {masonryImageData.map((element, index) => (
            <figure key={index} className="m-0">
              <Item original={`${ImagePath}/masonry/${element.src}`} width="700" height="850">
                {({ ref, open }) => (
                  <Link href={Href} onClick={open}>
                    <img className="img-thumbnail mb-4" ref={ref} src={`${ImagePath}/masonry/${element.src}`} alt="images" />
                  </Link>
                )}
              </Item>
            </figure>
          ))}
        </Masonry>
      </Gallery>
    </CardBody>
  );
};