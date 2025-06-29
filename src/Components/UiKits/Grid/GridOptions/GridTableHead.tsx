import { gridtableHeadData } from '@/Data/UiKits/Grid';
import React from 'react'

const GridTableHead = () => {
    return (
        <thead>
            <tr>
                <th></th>
                {gridtableHeadData && gridtableHeadData.map((item, index) => (
                    <th key={index} className="text-center">
                        <p>{item.text1} </p>
                        {item.class ? <small className={item.class}>{item.text2}</small> : <small>{item.text2}</small>}
                    </th>
                ))}
            </tr>
        </thead>
    )
}
export default GridTableHead;