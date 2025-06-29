import React from 'react'
import { Card, CardBody } from 'reactstrap'
import HeaderCard from './HeaderCard'
import { HeaderCardProp } from '@/Types/Bookmark.type'

const CommonEmptyCard: React.FC<HeaderCardProp> = ({ title }) => {
    return (
        <Card className="mb-0">
            <HeaderCard title={title} />
            <CardBody>
                <div className="details-bookmark text-center">
                    <span>{'No Bookmarks Found.'}</span>
                </div>
            </CardBody>
        </Card>
    )
}
export default CommonEmptyCard;