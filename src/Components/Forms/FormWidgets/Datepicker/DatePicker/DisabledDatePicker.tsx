import React, { useState } from 'react'
import DatePicker from "react-datepicker";

const DisabledDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const today = new Date();
    const disabledDates: Date[] = [today];

    return (
        <DatePicker
            className="form-control"
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            excludeDates={disabledDates}
        />
    )
}
export default DisabledDatePicker