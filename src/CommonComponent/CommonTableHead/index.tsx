import { TableHeaderProp } from '@/Types/CommonComponent.type'
import React from 'react'

const TableHead: React.FC<TableHeaderProp> = ({ headeData }) => {
    return (
        <thead>
            <tr>
                {headeData && headeData.map((item, index) => (
                    item.class
                        ? <th key={index} className={item.class}>{item.name}</th>
                        : <th key={index}>{item.name}</th>
                ))}
            </tr>
        </thead>
    )
}
export default TableHead;