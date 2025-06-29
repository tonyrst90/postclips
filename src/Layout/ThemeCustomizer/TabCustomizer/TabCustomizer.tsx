import { TabContent, TabPane } from 'reactstrap'
import TabHeader from './TabHeader'
import SidebarCustomizer from './SidebarCustomizer'
import { TabCustomizerType } from '@/Types/ThemeCustomizer.type'

const TabCustomizer :React.FC<TabCustomizerType> = ({ callbackNav, selected }) => {
  return (
    <TabContent activeTab={selected}>
      <TabHeader callbackNav={callbackNav} />
      <div className="customizer-body custom-scrollbar">
        <TabPane tabId="sidebar-type">
          <SidebarCustomizer />
        </TabPane>
      </div>
    </TabContent>
  )
}

export default TabCustomizer