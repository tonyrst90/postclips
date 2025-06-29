import { ImagePath } from '@/Constant'
import Image from 'next/image'
import React from 'react'
import { Card } from 'reactstrap'

const BlogShadow = () => {
    return (
        <Card className="o-hidden">
            <div className="blog-box blog-shadow">
                <Image className="img-fluid" src={`${ImagePath}/blog/blog.jpg`} width={830} height={310} alt="" />
                <div className="blog-details">
                    <p>{'25 July 2024'}</p>
                    <h4>{'Accusamus et iusto odio dignissimos ducimus qui blanditiis.'}</h4>
                    <ul className="blog-social">
                        <li><i className="icofont icofont-user" />{'Mark Jecno'}</li>
                        <li><i className="icofont icofont-thumbs-up" />{'02 Hits'}</li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}
export default BlogShadow;