/* eslint-disable @next/next/no-img-element */
import { Col } from "reactstrap";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Href, ImagePath } from "@/Constant";
import { galleryGridImages } from "@/Data/Miscellaneous/Gallery/Gallery";

export const DescriptionMyGallery = () => {
  const description: string = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."

  return (
    <Gallery withCaption>
      {galleryGridImages.map((item, index) => (
        // eslint-disable-next-line react/jsx-key
        <Col xl={3} sm={6}>
          <figure key={index} itemProp="caption description">
            <Item original={`${ImagePath}/big-lightgallry/${item}`} width="1500" height="780" caption={description}>
              {({ ref, open }) => (
                <Link href={Href} onClick={open}>
                  <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref} src={`${ImagePath}/big-lightgallry/${item}`} alt="thumbnail" />
                  <div className="caption border-top-0 p-2">
                    <h4>{'Portfolio Title'}</h4>
                    <p>{`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.`}</p>
                  </div>
                </Link>
              )}
            </Item>
          </figure>
        </Col>
      ))}
    </Gallery>
  );
};