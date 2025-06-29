import React, { useState } from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker';

const CustomizingConjunction = () => {
    const [value, setValue] = useState<DateObject[]>([new DateObject()]);

    return (
        <DatePicker
            inputClass="form-control"
            multiple
            dateSeparator="::"
            value={value}
            onChange={(dates) => setValue(dates as DateObject[])}
        />
    )
}
export default CustomizingConjunction