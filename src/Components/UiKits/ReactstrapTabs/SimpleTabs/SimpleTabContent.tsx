import { ImagePath } from '@/Constant'
import { TabContentProp } from '@/Types/UiKits.type'
import Image from 'next/image'
import { TabContent, TabPane } from 'reactstrap'

const SimpleTabContent: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <TabContent activeTab={basicTab}>
      <TabPane tabId="1">
        <p className="pt-3">Tabs have long been used to show alternative views of the same group of information tabs in software. Known as<em className="txt-danger"> “module tabs”</em>, these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.</p>
      </TabPane>
      <TabPane tabId="2">
        <div className="pt-3">
          <div className="flex-space flex-wrap align-items-center">
            <Image className="tab-img" width={100} height={100} src={`${ImagePath}/avtar/3.jpg`} alt="profile" />
            <ul className="d-flex flex-column gap-1">
              <li> <strong>Visit Us:</strong> 2600 Hollywood Blvd,Florida, United States-33020</li>
              <li> <strong>Mail Us:</strong> contact@us@gmail.com</li>
              <li><strong>Contact Number: </strong> (954) 357-7760</li>
            </ul>
          </div>
        </div>
      </TabPane>
      <TabPane tabId="3">
        <ul className="pt-3 d-flex flex-column gap-1">
          <li>Us Technology offers web &amp; mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them.</li>
          <li> <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States-	33020</li>
          <li> <strong>Mail Us:</strong> contact@us@gmail.com</li>
          <li> <strong>Contact Number: </strong> (954) 357-7760</li>
        </ul>
      </TabPane>
    </TabContent>
  )
}

export default SimpleTabContent