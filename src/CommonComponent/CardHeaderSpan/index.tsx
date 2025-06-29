import { CardHeaderSpanType } from '@/Types/CommonComponent.type'
import React from 'react'
import { CardHeader } from 'reactstrap'

const CardHeaderSpan: React.FC<CardHeaderSpanType> = ({ headerClass, smallHeading, spanClass, heading, span, span2, headingClass, span2Class }) => {
    return (
        <CardHeader className={headerClass ? headerClass : ""}>
            {smallHeading ? <h4>{smallHeading}</h4> : <h3 className={headingClass ? headingClass : ""}>{heading}</h3>}
            {span && <span className={spanClass ? spanClass : ''} dangerouslySetInnerHTML={{ __html: span }} />}
            {span2 && <span className={span2Class ? span2Class : ''} dangerouslySetInnerHTML={{ __html: span2 }} />}
        </CardHeader>
    )
}
export default CardHeaderSpan;