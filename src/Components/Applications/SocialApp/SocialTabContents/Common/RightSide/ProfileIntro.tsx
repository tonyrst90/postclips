import React, { Fragment } from 'react'
import { Button, CardBody, Col } from 'reactstrap'
import { ProfileIntroTitle } from '@/Constant'
import { profileIntroList } from '@/Data/Applications/SocialApp'
import CommonCard from '../CommonCard'

const ProfileIntro = () => {
    return (
        <Col xl={12} className='xl-50 box-col-6'>
            <CommonCard cardClass='profile-intro' title={ProfileIntroTitle}>
                <CardBody className="filter-cards-view">
                    {profileIntroList.map((item) => (
                        <Fragment key={item.id}>
                            <span className="mb-2 d-block">{item.text}:</span>
                            <p>{item.paragraph}</p>
                        </Fragment>
                    ))}
                    <div className="social-network theme-form">
                        <span>{'Social Networks'}</span>
                        <Button color='transparent' className="social-btn btn-fb mb-2 text-center"><i className="fa fa-facebook m-r-5" />{'Facebook'}</Button>
                        <Button color='transparent' className="social-btn btn-twitter mb-2 text-center"><i className="fa fa-twitter m-r-5" />{'Twitter'}</Button>
                        <Button color='transparent' className="social-btn btn-google text-center"><i className="fa fa-dribbble m-r-5" />{'Dribbble'}</Button>
                    </div>
                </CardBody>
            </CommonCard>
        </Col>
    )
}
export default ProfileIntro