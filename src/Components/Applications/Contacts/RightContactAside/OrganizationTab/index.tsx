import CardHeaderSpan from '@/CommonComponent/CardHeaderSpan';
import { OrgenizationTitle } from '@/Constant';
import React, { useState } from 'react'
import { Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap';
import NavOrganization from './NavOrganization';
import { organizationList } from '@/Data/Applications/Contacts';
import OrganizationTabPane from './OrganizationTabPane';

const OrganizationTab = () => {
  const [orgActiveTab, setOrgActiveTab] = useState(1);

  return (
    <Card className="mb-0">
      <CardHeaderSpan headerClass='d-flex' smallHeading={OrgenizationTitle} spanClass='f-14 pull-right mt-0' span={'5 Contacts'} />
      <CardBody className="p-0">
        <Row className="list-persons">
          <NavOrganization orgActiveTab={orgActiveTab} setOrgActiveTab={setOrgActiveTab} />
          <Col md={7} className="xl-50">
            <TabContent activeTab={orgActiveTab}>
              {organizationList.map((user) => (
                <TabPane tabId={user.id} key={user.id}>
                  <OrganizationTabPane user={user} />
                </TabPane>
              ))}
            </TabContent>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default OrganizationTab;