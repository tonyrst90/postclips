import { Href, ImagePath, ReadMoreTour, WilliamJennings } from "@/Constant";
import Image from "next/image";
import Link from "next/link";

export const SecondStyleAboutSection = () => {
  const PainterTour = " Is most renowned for his expressive colorization, creative landscapes, and stormy, sometimes violent maritime works. However, this moody image of the Devil's Bridge in Switzerland, close to the Goatherd Pass, feels incredibly authentic and accurately depicts historical occasions when Russian general Sunroof crossed the Alps and fought not only far larger enemy troops!"
  const PainterTourSpan = "The curved canvas is enclosed in a complex frame that the artist created but that his buddy Goalie Christian Kuhn carved. A variety of Christian symbols are depicted on the frame, including the faces of five infant angels, a star, grapes, vines, corn, and God's eye.Many of the Romantic elements and subjects that he would explore throughout his career are present in this work, one of his earliest, most notable of which is the landscape's significant significance. In spite of the altarpiece's inclusion of a crucifix, the emphasis is"

  return (
    <>
      <h5 className="pb-3">{'Wonderful piece that successfully conveys the magnificence of the mountains and the natural world.'}</h5>
      <p className="block-ellipsis">
        {'English Romantic painter, printer, and water colorist '}<em className="txt-danger">{WilliamJennings}</em>{PainterTour}
      </p>
      <div className="img-container">
        <div id="aniimated-thumbnials">
          <Link href={Href}>
            <Image priority width={1543} height={445} className="img-fluid rounded" src={`${ImagePath}/other-images/profile-style-img3.png`} alt="gallery" />
          </Link>
          <p className="block-ellipsis pt-3">
            {PainterTourSpan}
            <Link className="txt-danger ms-1" href="users/user_profile">{ReadMoreTour}</Link>
          </p>
        </div>
      </div>
    </>
  );
};
