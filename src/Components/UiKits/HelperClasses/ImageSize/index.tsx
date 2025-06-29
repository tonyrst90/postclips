import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ImagePath, ImageSizeTitle } from '@/Constant';
import { imageData, imageSubTitle } from '@/Data/UiKits/HelperClasses';
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'

const ImageSize = () => {
    return (
        <Col xl={6}>
            <Card className='height-equal'>
                <CommonCardHeader headClass="pb-0" title={ImageSizeTitle} span={imageSubTitle} />
                <CardBody>
                    <div className='gradient-border gap-3'>
                        {imageData && imageData.map((item, index) => (
                            <img className={`img-${item} img-h-${item}`} src={`${ImagePath}/blog/comment.jpg`} alt="img-size" key={index} />
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ImageSize;