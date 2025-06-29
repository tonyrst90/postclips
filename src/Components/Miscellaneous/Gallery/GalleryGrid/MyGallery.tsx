/* eslint-disable @next/next/no-img-element */
import { Col } from "reactstrap";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Href, ImagePath } from "@/Constant";
import { galleryGridImages } from "@/Data/Miscellaneous/Gallery/Gallery";
import Link from "next/link";

export const MyGallery = () => {
  return (
    <Gallery>
      {galleryGridImages.map((item, index) => (
        <Col xl={3} md={4} xs={6} key={index}>
          <figure>
            <Item original={`${ImagePath}/big-lightgallry/${item}`} width="1500" height="850">
              {({ ref, open }) => (
                <Link href={Href} onClick={open}>
                  <img className="img-thumbnail" ref={ref} src={`${ImagePath}/big-lightgallry/${item}`} alt="image" />
                </Link>
              )}
            </Item>
          </figure>
        </Col>
      ))}
    </Gallery>
  );
}