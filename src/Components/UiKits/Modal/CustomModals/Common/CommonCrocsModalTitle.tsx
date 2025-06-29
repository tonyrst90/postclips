import { CommonCrocsModalTitleType } from '@/Types/UiKits.type';
import React from 'react'

const CommonCrocsModalTitle: React.FC<CommonCrocsModalTitleType> = ({ heading, subHeading, text }) => {
  return (
    <>
      <ul className="dot-group pb-3 pt-0">
        <li />
        <li />
        <li />
      </ul>
      <div className="title-wrapper pb-3 modal-heading">
        <h3 className="theme-name mb-0 f-w-600">
          <span>{heading}</span> {subHeading}
        </h3>
        <p>{text}</p>
      </div>
    </>
  )
}
export default CommonCrocsModalTitle;