import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BothSideVisibleScrollbars, ImagePath } from "@/Constant";
import { bothSideScrollData } from "@/Data/BonusUi/Scrollable";
import Image from "next/image";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, Row } from "reactstrap";

const BothSideVisibleScrollbar = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={BothSideVisibleScrollbars} span={bothSideScrollData} />
        <CardBody>
          <div className="scroll-bar-wrap">
            <ScrollBar className="scroll-demo" style={{ width: "100%", height: "300px" }}>
              <div className="horz-scroll-content" style={{width: "1600px"}}>
                <Row>
                  <Col sm={3}>
                    <div className="visible-wrapper"><Image priority width={330} height={330} src={`${ImagePath}/banner/2.jpg`} alt="office-work" /></div>
                    <p className="pt-3">Inspiration can take many different forms, and <em className="txt-danger">professional growth never stops</em>{`. In light of this, we've compiled a comprehensive list of web design blogs that will keep your mind stimulated for the entire year. You won't find any stinkers on this list, so don't worry. We value your time and believe that you should only receive the greatest. Because of this, we've only gathered web design blogs that have recently being updated. Get ready to add numerous subscriptions by creating your Feebly account.`}<br />{`-->`} Responsive...<br />{`-->`} Secure your domain...<br />{`-->`} Testing...<br />{`-->`} Content creation...<br />{`-->`} Visual elements...<br />{`-->`} Launch...</p>
                  </Col>
                  <Col sm={3}>
                    <h3 className="pb-2">Latest trends </h3>
                    <p>{`You should stay current with all the most recent advances in the business whether you operate as a freelance web designer or for an agency or design studio. You may be sure you're constantly providing the most intelligent and original design solutions by doing this.`}</p>
                    <p>{`You can keep up with evolving design trends by reading web design blogs. You'll need to be able to comprehend new trends' causes and how they affect user experience. Additionally, you'll discover upgrades to current tools as well as new ones that have recently hit the market.`}</p>
                    <div className="visible-wrapper"><Image priority width={330} height={330} src={`${ImagePath}/email/3.jpg`} alt="office" /></div>
                  </Col>
                  <Col sm={3}>
                    <h3 className="pb-2">The best UX designer</h3>
                    <p>{`The internet is teeming with free resources, no matter what stage of your UX journey you're in, and UX design blogs should be your first point of call. The abundance of blogs available, though, can be somewhat of a double-edged sword because there are so many to choose from. How do you decide which blogs are actually worthwhile reading?`}</p>
                    <p>{`We've collected a selection of the top UX design blogs available right now to spare you hours of scrolling and sorting through search results. We possess:`}<br /><strong>1. Muzli </strong><br /><strong>2. Facebook Design </strong><br /><strong>3. Awwwards</strong><br /></p>
                    <p>{`If you already work in the UX field, the Inside Design blog has all the information you need to expand your knowledge, especially if you're interested in streamlining your UX teams and procedures and getting a better understanding of the whole product design and development process. This is an excellent location to keep an eye out for the most recent UX trends, tools, resources, and events because they are always adding new stuff.`}</p>
                  </Col>
                  <Col sm={3}>
                    <h3 className="pb-2">How to make best website ideas </h3>
                    <div className="visible-wrapper"><Image priority width={330} height={330} src={`${ImagePath}/banner/3.jpg`} alt="website" /></div>
                    <p className="pt-3">{`-->`} Blog <br />{`-->`} Portfolio website <br />{`-->`}Event website <br />{`-->`} personal website <br />{`-->`} Fashion website <br />{`-->`} Admin dashboards <br />{`-->`} E-commerce website <br />{`-->`} Beauty website <br />{`-->`} Food website<br />{`-->`} Animation website <br />{`-->`} Financial website</p>
                  </Col>
                </Row>
              </div>
            </ScrollBar>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BothSideVisibleScrollbar;
