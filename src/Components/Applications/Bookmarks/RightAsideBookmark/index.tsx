import React from 'react'
import { Card, CardBody, Col, TabContent, TabPane } from 'reactstrap'
import HeaderCard from './Common/HeaderCard';
import DataLoop from './DataLoop';
import FavDataLoop from './FavDataLoop';
import CommonEmptyCard from './Common/CommonEmptyCard';
import EditBookmarkModal from '../BookmarkModals/EditBookmarkModal';
import { useAppSelector } from '@/Redux/Hooks';
import { Business, CreatedByMe, Favourites, Holidays, Important, MyBookmark, Newsletter, Notification, Organization, SharedWithMe } from '@/Constant';

const RightAsideBookmark = () => {
    const { activeTabs, gridView } = useAppSelector((state) => state.bookmark);
    return (
        <Col xl={9} md={12} className="box-col-80">
            <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body radius-left">
                    <div className="ps-0">
                        <TabContent activeTab={activeTabs}>
                            <TabPane tabId={'1'}>
                                <Card className="mb-0">
                                    <HeaderCard title={CreatedByMe} />
                                    <CardBody className="pb-0">
                                        <div className={`details-bookmark text-center ${!gridView ? 'list-bookmark' : ''}`}>
                                            <DataLoop />
                                        </div>
                                    </CardBody>
                                </Card>
                            </TabPane>
                            <TabPane tabId={'2'}>
                                <Card className='mb-0'>
                                    <HeaderCard title={Favourites} />
                                    <CardBody>
                                        <div className={`details-bookmark text-center ${!gridView ? 'list-bookmark' : ''}`}>
                                            <FavDataLoop />
                                        </div>
                                    </CardBody>
                                </Card>
                            </TabPane>
                            <TabPane tabId={'3'}><CommonEmptyCard title={SharedWithMe} /></TabPane>
                            <TabPane tabId={'4'}>
                                <Card className="mb-0">
                                    <HeaderCard title={MyBookmark} />
                                    <CardBody>
                                        <div className={`details-bookmark text-center ${!gridView ? 'list-bookmark' : ''}`}>
                                            <DataLoop />
                                        </div>
                                    </CardBody>
                                </Card>
                            </TabPane>
                            <TabPane tabId={'5'}><CommonEmptyCard title={Notification} /></TabPane>
                            <TabPane tabId={'6'}><CommonEmptyCard title={Newsletter} /></TabPane>
                            <TabPane tabId={'7'}><CommonEmptyCard title={Business} /></TabPane>
                            <TabPane tabId={'8'}><CommonEmptyCard title={Holidays} /></TabPane>
                            <TabPane tabId={'9'}><CommonEmptyCard title={Important} /></TabPane>
                            <TabPane tabId={'10'}><CommonEmptyCard title={Organization} /></TabPane>
                            <EditBookmarkModal />
                        </TabContent>
                    </div>
                </Card>
            </div>
        </Col>
    )
}
export default RightAsideBookmark;