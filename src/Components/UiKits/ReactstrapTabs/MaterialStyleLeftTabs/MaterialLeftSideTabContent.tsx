import { DalbultCaslin, ImagePath } from '@/Constant'
import { TabContentProp } from '@/Types/UiKits.type'
import Image from 'next/image'
import React from 'react'
import { CardBody, TabContent, TabPane } from 'reactstrap'

const MaterialLeftSideTabContent: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <div className="material-content">
      <TabContent activeTab={basicTab}>
        <TabPane tabId="1">
          <p>This product is meant for educational purposes only. Any resemblance to real persons, living or dead is purely coincidental. Void where prohibited. Some assembly required. List each check separately by bank number. Batteries not included.Google Web Designer gives you the power to create beautiful and compelling videos, images and HTML5 ads. Use animation and interactive elements to build out your creative vision, then scale your content for different sizes or audiences with responsive and dynamic workflows.</p>
        </TabPane>
        <TabPane tabId="2">
          <p className="mb-0"></p>
          <div className="flex-space flex-wrap align-items-center">
            <Image className="tab-img" width={92} height={100} src={`${ImagePath}/ecommerce/08.jpg`} alt="profile" />
            <ul className="d-flex flex-column gap-1">
              <li> <strong> Name: </strong> Jully Catlin</li>
              <li><strong>Visit Us: </strong> 50006 Ehrenberg/Parker,Arkansas-85334</li>
              <li><strong>Mail Us:</strong> hello.@gmail.com</li>
              <li><strong>Contact Number: </strong> (928) 923-7940</li>
            </ul>
          </div>
        </TabPane>
        <TabPane tabId="3">
          <CardBody className="p-0">
            <div className="main-inbox">
              <div className="header-inbox justify-content-start gap-2">
                <div className="header-left-inbox">
                  <div className="inbox-img">
                    <Image width={50} height={50} src={`${ImagePath}/ecommerce/07.jpg`} alt="profile" />
                  </div>
                </div>
                <div className="inbox-content">
                  <h6>{DalbultCaslin}</h6>
                  <p className="text-muted">stroman.rogers@gmail.com</p>
                </div>
              </div>
              <div className="body-inbox mt-2">
                <div className="body-h-wrapper">
                  <i className="me-2 tab-space icofont icofont-star" />
                  <em>Compare Prices Find the Best Computer Assessors Fronted Issue.</em>
                </div>
                <p className="pt-2">Site speed and design are two of the most important ranking factors Google takes into consideration, as they have the biggest effect of customer staying on site as the website respond faster.</p>
              </div>
            </div>
          </CardBody>
        </TabPane>
        <TabPane tabId="4">
          <p><strong> In this situation, you would probably do two things:</strong> exit the page, or look for the trusty search bar. If you decide to stick around, a proper search function should take your query and send you to your destination. Problem solved. It's not a perfect experience, but it's a hard one to avoid on larger websites that simply can't link to every piece of content from the homepage.</p>
        </TabPane>
      </TabContent>
    </div>
  )
}
export default MaterialLeftSideTabContent