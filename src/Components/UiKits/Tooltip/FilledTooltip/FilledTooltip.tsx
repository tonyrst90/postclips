import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { FilledTooltips, TooltipPrimary } from '@/Constant';
import { fillTooltipData, fillTooltipList } from '@/Data/UiKits/Tooltip';
import { useState } from 'react'
import { Button, Card, CardBody, Col, Tooltip } from 'reactstrap';
import CommonTooltip from '../Common/CommonTooltip';

const FilledTooltip = () => {
  const [tooltip, setTooltip] = useState<boolean>(false);
  const toggle = () => setTooltip(!tooltip);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FilledTooltips} span={fillTooltipData} />
        <CardBody>
          <div className="common-flex">
            <Button outline color="primary" id="Tooltip-16" className="mb-0 me-0">{TooltipPrimary}</Button>
            <Tooltip isOpen={tooltip} toggle={toggle} placement="top" target="Tooltip-16">Tooltip Primary</Tooltip>
            {fillTooltipList.map((data) => (
              <CommonTooltip key={data.id} outline={true} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FilledTooltip