import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { HTMLElementsWithHoverEffect, NotificationsReceived } from '@/Constant';
import { hoverTooltipData, hoverTooltipList } from '@/Data/UiKits/Tooltip';
import { useState } from 'react'
import { Button, Card, CardBody, Col, Tooltip } from 'reactstrap';
import CommonTooltip from '../Common/CommonTooltip';

const ElementsWithHoverEffect = () => {
  const [tooltip, setTooltip] = useState<boolean>(false);
  const toggle = () => setTooltip(!tooltip);
  
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={HTMLElementsWithHoverEffect} span={hoverTooltipData} />
        <CardBody>
          <div className="common-flex">
            <Button id="Tooltip-12" className="bg-primary mb-0 me-0">{NotificationsReceived}</Button>
            <Tooltip isOpen={tooltip} toggle={toggle} placement="top" target="Tooltip-12"><i>Thank </i> <u>you</u></Tooltip>
            {hoverTooltipList.map((data) => (
              <CommonTooltip key={data.id} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ElementsWithHoverEffect