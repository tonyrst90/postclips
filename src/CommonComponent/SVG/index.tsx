import React from "react";
import { SvgPath } from "@/Constant";
import { SvgType } from "@/Types/CommonComponent.type";

const SVG: React.FC<SvgType> = ({ iconId, className, style, onClick }) => {
    return (
        <svg className={className} style={style} onClick={onClick}>
            <use href={`${SvgPath}/icon-sprite.svg#${iconId}`}></use>
        </svg>
    );
};
export default SVG;