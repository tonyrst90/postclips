import React, { useState } from 'react'
import { Input, Label } from 'reactstrap';
import ReactDatePicker from "react-datepicker";
import { timeList } from '@/Data/Applications/Tasks';

const DateDetailsInputs = () => {
    const [selectedDates, setSelectedDates] = useState<any>(new Date());
    const handleChange = (date: Date | null) => {
        setSelectedDates(date);
    };
    return (
        <div className="d-flex date-details">
            <div className="d-inline-block">
                <Label className="d-block mb-0" htmlFor="chk-ani">
                    <Input className="checkbox_animated" id="chk-ani" type="checkbox" />{'Remind on'}
                </Label>
            </div>
            <div className="d-inline-block">
                <ReactDatePicker className="form-control" dateFormat="yyyy-MM-dd" selected={selectedDates} onChange={handleChange} />
            </div>
            <div className="d-inline-block">
                <Input type="select">
                    {timeList.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </Input>
            </div>
            <div className="d-inline-block">
                <Label className="d-block mb-0" htmlFor="chk-ani1">
                    <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />{'Notification'}
                </Label>
            </div>
            <div className="d-inline-block">
                <Label className="d-block mb-0" htmlFor="chk-ani2">
                    <Input className="checkbox_animated" id="chk-ani2" type="checkbox" />{'Mail'}
                </Label>
            </div>
        </div>
    )
}
export default DateDetailsInputs;