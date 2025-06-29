import React from 'react'
import { Row } from 'reactstrap'
import PixelstarpSearch from './PixelstarpSearch'
import BlogBox from './BlogBox'
import { SearchResultInitialState } from '@/Types/SearchResult.type'
import PaginationCard from '../Common/PaginationCard'

const AllTab: React.FC<SearchResultInitialState> = ({ allResult }) => {

    return (
        <Row>
            <PixelstarpSearch allResult={allResult} />
            <BlogBox allResult={allResult} />
            <PaginationCard />
        </Row>
    )
}
export default AllTab;