import SVG from '@/CommonComponent/SVG';
import { ImagePath } from '@/Constant';
import { userCardData, usersSocialData } from '@/Data/Applications/Users';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, Col } from 'reactstrap';

const SocialProfileCards = () => {

    return (
        <>
            {userCardData.map((item) => (
                <Col sm={6} xxl={3} xl={4} className='col-ed-4 box-col-4' key={item.id}>
                    <Card className="social-profile">
                        <CardBody>
                            <div className="social-img-wrap">
                                <div className="social-img">
                                    <Image src={`${ImagePath}/${item.avatar}`} alt="profile" width={68} height={68} />
                                </div>
                                <div className="edit-icon"><SVG iconId='profile-check' /></div>
                            </div>
                            <div className="social-details">
                                <h5 className="mb-1">
                                    <Link href={'/app/social_app'}>{item.name}</Link>
                                </h5>
                                <span className="f-light">{item.email}</span>
                                <ul className="card-social">
                                    {usersSocialData.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.link} target="_blank" rel="noreferrer"><i className={`fa fa-${item.icon}`} /></a>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="social-follow">
                                    <li><h5 className="mb-0">{item.totalPost}</h5><span className="f-light">{'Posts'}</span></li>
                                    <li><h5 className="mb-0">{item.follower}</h5><span className="f-light">{'Followers'}</span></li>
                                    <li><h5 className="mb-0">{item.following}</h5><span className="f-light">{'Following'}</span></li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
export default SocialProfileCards;