import { DalbultCaslin, EmailAddress, ExampleTextarea, ImagePath } from "@/Constant";
import { TabContentProp } from "@/Types/UiKits.type";
import Image from "next/image";
import React from "react";
import { CardBody, Form, FormGroup, Input, Label, TabContent, TabPane } from "reactstrap";

const BorderTabContent: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <TabContent activeTab={basicTab}>
      <TabPane tabId="1">
        <p className="pt-3">
          A navigation bar is a particularly important feature because it allows visitors to quickly and easily find
          <em className="txt-danger"> important pages on your website,</em> like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.Create product Builder tool is also pre-bundled in this template so that you can let the audience configure the product by themselves before placing the order.
        </p>
      </TabPane>
      <TabPane tabId="2">
        <CardBody className="pb-0">
          <div className="main-inbox">
            <div className="header-inbox">
              <div className="header-left-inbox">
                <div className="inbox-img">
                  <Image width={50} height={50} src={`${ImagePath}/ecommerce/06.jpg`} alt="profile" />
                </div>
                <div className="inbox-content">
                  <h6>{DalbultCaslin}</h6>
                  <p className="text-muted">stroman.rogers@gmail.com</p>
                </div>
              </div>
              <ul className="header-right-inbox">
                <li><p>8 JAN 11:30PM</p></li>
                <li><i className="txt-danger icofont icofont-ui-delete" /></li>
              </ul>
            </div>
            <div className="body-inbox mt-2">
              <div className="body-h-wrapper">
                <i className="me-2 tab-space icofont icofont-star" />
                <em> Compare Prices Find the Best Computer Assessors Fronted Issue.</em>
              </div>
              <p className="pt-2"> Site speed and design are two of the most important ranking factors Google takes into consideration, as they have the biggest effect of customer staying on site as the website respond faster.</p>
            </div>
          </div>
        </CardBody>
      </TabPane>
      <TabPane tabId="3">
        <CardBody className="px-0 pb-0">
          <Form>
            <FormGroup>
              <Label check for="exampleFormControltwo">{EmailAddress}</Label>
              <Input id="exampleFormControltwo" type="email" placeholder="youremail@gmail.com" />
            </FormGroup>
            <div className="mb-0">
              <Label check for="exampleFormControlTextarea1">{ExampleTextarea}</Label>
              <Input type="textarea" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
          </Form>
        </CardBody>
      </TabPane>
    </TabContent>
  );
};
export default BorderTabContent;