import { Class, ValueClass } from '@/Constant';
import { GridCardFooterProps } from '@/Types/UiKits.type';
import React from 'react'
import { CardFooter, Table } from 'reactstrap'

const GridCardFooter: React.FC<GridCardFooterProps> = ({ code, value }) => {
    return (
        <CardFooter>
            <div className="table-responsive">
                <Table className="w-100" borderless>
                    <tbody>
                        <tr>
                            <th> {Class}</th>
                            <th>{ValueClass}</th>
                        </tr>
                        <tr>
                            <td><code>{code}</code></td>
                            <td>{value}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </CardFooter>
    )
}
export default GridCardFooter;