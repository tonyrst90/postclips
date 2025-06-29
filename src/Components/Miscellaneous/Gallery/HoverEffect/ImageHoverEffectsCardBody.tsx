/* eslint-disable @next/next/no-img-element */
import { Href, ImagePath } from "@/Constant";
import { hoverImageDataList } from "@/Data/Miscellaneous/Gallery/Gallery";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { CardBody, Row } from "reactstrap";

export const ImageHoverEffectsCardBody = (props: { data: number }) => {
  return (
    <CardBody>
      <Row className="my-gallery gallery mb-auto">
        <Gallery>
          {hoverImageDataList &&
            hoverImageDataList.map((item, index) => (
              <figure className={`mx-0 col-md-3 col-6 img-hover hover-${props.data}`} key={index}>
                <Item original={`${ImagePath}/lightgallry/${item}`} width="1024" height="768">
                  {({ ref, open }) => (
                    <Link href={Href} onClick={open}>
                      <div className="overflow-hidden">
                        <img ref={ref} src={`${ImagePath}/lightgallry/${item}`} alt="" className="w-100 h-100" />
                      </div>
                    </Link>
                  )}
                </Item>
              </figure>
            ))}
        </Gallery>
      </Row>
    </CardBody>
  );
};