import { ImagePath } from '@/Constant'
import { justifyData } from '@/Data/UiKits/ReactstrapTabs'
import { TabContentProp } from '@/Types/UiKits.type'
import Image from 'next/image'
import { CardBody, TabContent, TabPane } from 'reactstrap'

const JustifyTabContent: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <CardBody className="px-0 pb-0">
      <TabContent activeTab={basicTab}>
        {justifyData.map(({ id, items }, index) => (
          <TabPane tabId={id} key={index}>
            <div className="designer-details">
              {items.map(({ src, title, number }, index) => (
                <div className="designer-profile" key={index}>
                  <div className="designer-wrap">
                    <Image width={50} height={50} className="designer-img" src={`${ImagePath}/${src}`} alt="profile" />
                    <div className="designer-content">
                      <h6>{title}</h6>
                      <p> {number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
        ))}
      </TabContent>
    </CardBody>
  )
}
export default JustifyTabContent