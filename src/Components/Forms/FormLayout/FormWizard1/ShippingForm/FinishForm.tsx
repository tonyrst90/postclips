import { ImagePath, OrderConfirmed } from '@/Constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FinishForm = () => {
    return (
        <div className="order-confirm">
            <Image src={`${ImagePath}/gif/dashboard-8/successful.gif`} width={140} height={140} alt="paypal" />
            <h5>{OrderConfirmed}</h5>
            <p className="mb-0">{"An email with your orders specifics will be sent to you as order confirmation."}</p>
            <p className="text-center f-w-600 mt-2">
                {'Order ID: '}
                <Link className="text-decoration-underline" href={`/app/ecommerce/recent_order`}>
                    {'GE34598'}
                </Link>
            </p>
        </div>
    )
}
export default FinishForm