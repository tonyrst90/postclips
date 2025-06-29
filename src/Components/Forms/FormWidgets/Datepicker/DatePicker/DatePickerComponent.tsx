import React, { useState } from 'react'
import DatePicker from "react-datepicker";

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState<any>(new Date());
    const handleChange = (date: Date | null) => {
        setStartDate(date);
    };

    return (
        <DatePicker
            className="form-control flatpickr-input"
            selected={startDate}
            onChange={handleChange}
        />
    )
}
export default DatePickerComponent