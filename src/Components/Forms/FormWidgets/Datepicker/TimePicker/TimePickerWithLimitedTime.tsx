import React, { useState } from 'react'
import DatePicker from "react-datepicker";

const TimePickerWithLimitedTime = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);

    return (
        <DatePicker
            className="form-control"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
        />
    )
}
export default TimePickerWithLimitedTime