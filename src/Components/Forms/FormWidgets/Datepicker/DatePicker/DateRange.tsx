import React, { useState } from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker';

const DateRange = () => {
    const [value, setValue] = useState<DateObject[]>([new DateObject()]);

    return (
        <DatePicker
            inputClass="form-control"
            range
            value={value}
            onChange={(dates) => setValue(dates as DateObject[])}
        />
    )
}
export default DateRange