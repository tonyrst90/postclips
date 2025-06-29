import React from 'react'
import { Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { imageTabData } from '@/Data/Applications/SearchResult'
import { Href, ImagePath } from '@/Constant'
import Link from 'next/link'
import PaginationCard from '../Common/PaginationCard'

const ImageTab = () => {
    return (
        <div>
            <h5 className="f-w-700 mb-2">{'About 12,120 results (0.50 seconds)'}</h5>
            <Row className="my-gallery gallery-with-description">
                <Gallery withCaption>
                    {imageTabData.map((item, index) => (
                        <Col xl={3} sm={6} key={index}>
                            <figure>
                                <Item original={`${ImagePath}/big-lightgallry/${item}.jpg`} caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." width={684} height={406}>
                                    {({ ref, open }) => (
                                        <Link href={Href} onClick={open}>
                                            <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref} src={`${ImagePath}/big-lightgallry/${item}.jpg`} alt="Image description" />
                                            <div className="caption border-top-0 p-2">
                                                <h5>{'Portfolio Title'}</h5>
                                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                            </div>
                                        </Link>
                                    )}
                                </Item>
                            </figure>
                        </Col>
                    ))}
                </Gallery>
            </Row>
            <PaginationCard />
        </div>
    )
}
export default ImageTab;