import React, { useState } from 'react'
import DatePicker from "react-datepicker";

const HumanFriendlyDatePicker = () => {
    const [startDate, setStartDate] = (useState)< Date | null>(new Date());
    const handleChange = (date: Date | null) => {
        setStartDate(date);
    };

    return (
        <DatePicker
            className="form-control flatpickr-input"
            selected={startDate}
            onChange={handleChange}
            dateFormat="MMMM dd,yyyy"
        />
    )
}
export default HumanFriendlyDatePicker