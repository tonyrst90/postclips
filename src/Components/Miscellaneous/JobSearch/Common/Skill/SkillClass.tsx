import { useState } from 'react';
import { Button, Card, Collapse } from 'reactstrap';
import SkillCheckBox from './SkillCheckBox';
import HeaderWithIcon from '../HeaderWithIcon';
import { AllSkills, SpecificSkills } from '@/Constant';

const SkillClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Card>
      <HeaderWithIcon heading={SpecificSkills} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <SkillCheckBox />
        <Button block className='text-center' color='primary'>{AllSkills}</Button>
      </Collapse>
    </Card>
  );
};

export default SkillClass;
