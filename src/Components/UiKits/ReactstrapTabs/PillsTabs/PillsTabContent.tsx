import { ImagePath } from '@/Constant'
import { TabContentProp } from '@/Types/UiKits.type'
import Image from 'next/image'
import { TabContent, TabPane } from 'reactstrap'

const PillsTabContent: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <TabContent activeTab={basicTab}>
      <TabPane tabId="1">
        <p className="pt-3">The ultimate goal of every web design is to create a site that will reach its audience and be useful to them. In order to achieve that, it is necessary to befriend Google's mechanisms and algorithms. There is no use of a pretty website, if it's displayed on a 10th page of search results, because this way no one will ever find it. That brings us to the topic of Google's Website Ranking.Generally speaking, it's a list of pages and their keywords, sorted in the order of search results. The higher your place in the ranking is, the more people are likely to see your page.</p>
      </TabPane>
      <TabPane tabId="2">
        <ul className="d-flex flex-column gap-1 pt-3">
          <li> Create professional web page design. Responsive, fully customizable with easy Drag-n-Drop Nicepage editor. Adjust colors, fonts, header and footer, layout and other design elements, as well as content and images.</li>
          <li><strong>Visit Us: </strong> 4 Marigold Close, Glenmore Park, New South Wales, 2745 Australia- 2745</li>
          <li> <strong>Mail Us:</strong> SamuelMario@armyspy.com</li>
          <li> <strong>Contact Number: </strong> (02) 4733 6337</li>
        </ul>
      </TabPane>
      <TabPane tabId="3">
        <div className="pt-3 d-flex align-items-center gap-3 pills-blogger">
          <div className="blog-wrapper">
            <Image className="blog-img" width={100} height={100} src={`${ImagePath}/dashboard-2/headphones.png`} alt="head-phone" />
          </div>
          <div className="blog-content">
            <p> <em className="txt-danger fw-bold">Smart headphones</em>  — also called smart earbuds or hearable — are high-tech in-ear devices that do more than transmit audio. These headphones are usually wireless, and they can sync up with your phone, tablet, computer or other Bluetooth-enabled device. The main appeal of hearables is convenience, as they allow you to complete common tasks without directly accessing your phone or computer. Smart wireless headphones sync up to other devices using Bluetooth technology, and many of their features rely on data from your smartphone or computer.</p>
          </div>
        </div>
      </TabPane>
    </TabContent>
  )
}

export default PillsTabContent