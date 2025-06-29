import { useState } from 'react';
import { Button, Card, Collapse } from 'reactstrap';
import IndustryCheckBox from './IndustryCheckBox';
import HeaderWithIcon from '../HeaderWithIcon';
import { AllIndustries, IndustryHeading } from '@/Constant';

const Industry = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Card>
      <HeaderWithIcon heading={IndustryHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <IndustryCheckBox />
        <Button block className='text-center' color='primary'>{AllIndustries}</Button>
      </Collapse>
    </Card>
  );
};


export default Industry;
