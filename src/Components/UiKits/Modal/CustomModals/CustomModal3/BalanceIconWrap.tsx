import { balanceIconWrapData } from '@/Data/UiKits/Modal';
import React from 'react'
import { ArrowDownRight, ArrowUpRight } from 'react-feather'
import { Badge } from 'reactstrap';

const BalanceIconWrap = () => {
    return (
        <ul>
            {balanceIconWrapData.map((item) => (
                <li key={item.id}>
                    <div className={`balance-item ${item.color}`}>
                        <div className="balance-icon-wrap">
                            <div className="balance-icon">
                                {item.id === 1 ? <ArrowDownRight /> : <ArrowUpRight />}
                            </div>
                        </div>
                        <div>
                            <span className="f-12 f-light">{item.text} </span>
                            <h5 className="f-w-600">{item.rate}{'K'}</h5>
                            <Badge className={`badge-light-${item.color}`} color='' pill>{item.badge}{'%'}</Badge>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
export default BalanceIconWrap;