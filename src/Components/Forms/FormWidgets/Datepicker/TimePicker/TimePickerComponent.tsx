import React, { useState } from 'react'
import DatePicker from "react-datepicker";

const TimePickerComponent = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <DatePicker
            className="form-control"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
        />
    )
}
export default TimePickerComponent