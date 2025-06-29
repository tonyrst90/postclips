import React, { useEffect } from 'react'
import { TabContent, TabPane } from 'reactstrap';
import AllTab from './AllTab';
import ImageTab from './ImageTab';
import VideoTab from './VideoTab';
import { SearchTabContentProp } from '@/Types/SearchResult.type';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { fetchSearchData } from '@/Redux/Reducers/SearchResultSlice';

const SearchTabContent: React.FC<SearchTabContentProp> = ({ activeTab }) => {
    const { allResult } = useAppSelector((state) => state.searchResult);
    const dispatch = useAppDispatch();
    useEffect(() => { dispatch(fetchSearchData()); }, []);

    return (
        <TabContent activeTab={activeTab}>
            <TabPane className='search-links' tabId={1}>
                <AllTab allResult={allResult} />
            </TabPane>
            <TabPane tabId={2}>
                <ImageTab />
            </TabPane>
            <TabPane tabId={3}>
                <VideoTab allResult={allResult} />
            </TabPane>
        </TabContent>
    )
}
export default SearchTabContent;