import React, { useState } from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker';

const MultiplesDates = () => {
    const [value, setValue] = useState<DateObject[]>([new DateObject()]);

    return (
        <DatePicker
            inputClass="form-control"
            multiple
            value={value}
            onChange={(dates) => setValue(dates as DateObject[])}
        />
    )
}
export default MultiplesDates