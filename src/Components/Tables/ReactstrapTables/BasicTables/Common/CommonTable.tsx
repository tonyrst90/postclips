import { CommonTableProps } from '@/Types/Tables.type';
import React from 'react'
import { Table } from 'reactstrap'

const CommonTable: React.FC<CommonTableProps> = ({ tableClass, strip, caption, size, hover, headClass = '', headRowClass = '', headData, children }) => {
    return (
        <Table className={tableClass} striped={strip} hover={hover} size={size}>
            {caption && <caption>{caption}</caption>}
            <thead className={headClass}>
                <tr className={headRowClass}>
                    {headData.map((head) => (
                        <th key={head.id} scope="col">{head.head}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </Table>
    )
}
export default CommonTable;