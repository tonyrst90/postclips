import { Label, Input } from 'reactstrap';
import { StatusLearning } from '@/Constant';
import { statusCheckData } from '@/Data/Miscellaneous/Learning/Learning';

const StatusCheckBox = () => {
  return (
    <div className="checkbox-animated mt-0">
      <div className="learning-header">
        <span className="f-w-600">{StatusLearning}</span>
      </div>
      {statusCheckData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`StatusCheckBox-${index}`} check>
          <Input className="checkbox_animated" id={`StatusCheckBox-${index}`} type="checkbox" />
          {data}
        </Label>
      ))}
    </div>
  );
};

export default StatusCheckBox;