import React from 'react'
import { FormFeedback, Label } from 'reactstrap';
import Select from 'react-select';
import { DropItemChangeProp, DropItemProps, Option } from '@/Types/Forms.type';
import { LooksGood } from '@/Constant';
import { options } from '@/Data/Forms/FormControls';

const DropItem: React.FC<DropItemProps> = ({ selectedOption, setSelectedOption, validate, tip, colClass, className }) => {
    const handleChange: DropItemChangeProp = (newValue, actionMeta) => {
        if (actionMeta.action === 'select-option' || actionMeta.action === 'clear') {
            const newSelectedOption = newValue as Option;
            setSelectedOption(newSelectedOption?.value || null);
        }
    };
    return (
        <div className={colClass}>
            <Label htmlFor="state">{'State'}</Label>
            <Select id="state" options={options} value={options.find(option => option.value === selectedOption)}
                onChange={handleChange} className={className} />
            {validate && !selectedOption && (<FormFeedback tooltip={tip}>{'Please select a valid state.'}</FormFeedback>)}
            {validate && selectedOption && (<FormFeedback tooltip={tip} valid>{LooksGood}</FormFeedback>)}
        </div>
    )
}
export default DropItem;