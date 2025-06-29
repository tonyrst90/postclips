import { CurrentCartTitle } from '@/Constant'
import React from 'react'
import { Col, Table } from 'reactstrap'
import CurrentCartTableBody from './CurrentCartTableBody'
import { currentCartTableFooterData } from '@/Data/Forms/FormLayout'

const CurrentCart = () => {
    return (
        <Col xl={4}>
            <div className="shipping-info">
                <h5>{CurrentCartTitle}</h5>
                <div className="overflow-auto custom-scrollbar">
                    <Table striped>
                        <thead>
                            <tr>
                                <th scope="col">{'Product'}</th>
                                <th scope="col">{'Product Detail'}</th>
                                <th scope="col">{'Price'}</th>
                            </tr>
                        </thead>
                        <CurrentCartTableBody />
                        <tfoot>
                            {currentCartTableFooterData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.footerTittle}</td>
                                    <td colSpan={2}>{'$'}{data.price} </td>
                                </tr>
                            ))}
                        </tfoot>
                    </Table>
                </div>
            </div>
        </Col>
    )
}
export default CurrentCart