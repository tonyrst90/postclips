"use client"
import { cartTableHead } from '@/Data/Applications/ECommerce/Product';
import { useAppSelector } from '@/Redux/Hooks';
import React from 'react'
import { Row, Table } from 'reactstrap';
import CartTableBody from './CartTableBody';
import EmptyCart from './EmptyCart';

const CartTable = () => {
    const { cartData } = useAppSelector((state) => state.product);

    return (
        <Row>
            {cartData && cartData.length > 0 ? (
                <div className="order-history table-responsive custom-scrollbar wishlist">
                    <Table bordered>
                        <thead>
                            <tr>
                                {cartTableHead.map((items, i) => (
                                    <th key={i}>{items}</th>
                                ))}
                            </tr>
                        </thead>
                        <CartTableBody />
                    </Table>
                </div>
            ) :
                (<EmptyCart />)
            }
        </Row>
    )
}
export default CartTable;