import { Href } from '@/Constant'
import React from 'react'

const ShareIcons = () => {
    return (
        <ul className="share-icons">
            <li>
                <a className="social-icon bg-primary" href={Href}>
                    <i className="fa fa-smile-o" />
                </a>
            </li>
            <li>
                <a className="social-icon bg-secondary" href={Href}>
                    <i className="fa fa-wechat" />
                </a>
            </li>
            <li>
                <a className="social-icon bg-warning" href={Href}>
                    <i className="fa fa-share-alt" />
                </a>
            </li>
        </ul>
    )
}
export default ShareIcons