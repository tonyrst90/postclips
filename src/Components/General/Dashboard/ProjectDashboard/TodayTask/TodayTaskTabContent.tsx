import { TabContent, TabPane } from 'reactstrap'
import { TodayTaskTabType } from '@/Types/Dashboard.type'
import CommonTabContentTable from './CommonTabContentTable'

const TodayTaskTabContent: React.FC<TodayTaskTabType> = ({ tabId }) => {
  return (
    <TabContent className='content-tab' activeTab={tabId}>
      <TabPane tabId={1}>
        <div className="custom-scrollbar">
          <CommonTabContentTable value={5} />
        </div>
      </TabPane>
      <TabPane tabId={2}>
        <div className="custom-scrollbar">
          <CommonTabContentTable value={3} />
        </div>
      </TabPane>
      <TabPane tabId={3}>
        <div className="custom-scrollbar">
          <CommonTabContentTable value={2} />
        </div>
      </TabPane>
      <TabPane tabId={4}>
        <div className="custom-scrollbar">
          <CommonTabContentTable value={4} />
        </div>
      </TabPane>
    </TabContent>
  )
}
export default TodayTaskTabContent