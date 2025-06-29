import { RatioImageProp } from "@/Types/CommonComponent.type";
import React, { useEffect, useRef } from "react";

const RatioImage: React.FC<RatioImageProp> = (props) => {
    const { alt } = props;
    const bgImg = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const image = bgImg.current;
        if (image && image.classList.contains('bg-img-cover')) {
            const parentElement = image.parentElement;
            const src = image.getAttribute('src');
            if (parentElement) {
                parentElement.classList.add('bg-size');
                image.style.display = 'none';
                parentElement.setAttribute(
                    'style',
                    `
          background-image: url(${src});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: block;
          `,
                );
            }
        }
    }, []);

    return <img ref={bgImg} {...props} alt={alt} />;
};
export default RatioImage;
