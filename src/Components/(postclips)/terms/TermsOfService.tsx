"use client";

import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const TermsOfService = () => {
  return (
    <Container fluid>
      <Row className="mt-5">
        <Col sm={12}>
          <Card>
            <CommonCardHeader
              title={"Terms of Service"}
              headClass="pb-0 bg-transparent"
            />
            <CardBody>
              <h2 className="mb-3 text-white">Social Media & Content Extraction Terms of Service</h2>
              <h3 className="mb-2 text-white">1. Introduction</h3>
              <p style={{ color: "#bbbbbb" }}>{`By using the APIs provided by X (formerly Twitter), TikTok, Instagram, and Facebook, you agree to adhere to their respective terms and conditions. Additionally, our platform provides services for campaign content extraction, ensuring compliance with intellectual property laws and brand guidelines.`}</p>
              <h3 className="mb-2 text-white">2. X (Twitter) API</h3>
              <p style={{ color: "#bbbbbb" }}>{`Users must comply with X's developer policy, including rate limits, content restrictions, and security guidelines.`}</p>
              <h3 className="mb-2 text-white">3. TikTok API</h3>
              <p style={{ color: "#bbbbbb" }}>{`TikTok requires developers to obtain proper authentication and adhere to its privacy policies when accessing user data.`}</p>
              <h3 className="mb-2 text-white">4. Instagram API</h3>
              <p style={{ color: "#bbbbbb" }}>{`Instagram's Graph API follows Meta's platform policies, including restrictions on data access and automated posting.`}</p>
              <h3 className="mb-2 text-white">5. Facebook API</h3>
              <p style={{ color: "#bbbbbb" }}>{`Facebook Graph API has strict security measures, ensuring compliance with its privacy and data-sharing policies.`}</p>
              <h3 className="mb-2 text-white">6. Campaign Content Extraction & Usage</h3>
              <p style={{ color: "#bbbbbb" }}>{`Our platform provides tools for clippers to extract clips from brand campaigns while ensuring compliance with the terms and conditions set by the brand owners.`}</p>
              <p style={{ color: "#bbbbbb" }}>{`The extracted content remains the intellectual property of our platform, and its usage must align with the agreed campaign terms. Unauthorized redistribution or modification is strictly prohibited.`}</p>
              <h3 className="mb-2 text-white">7. Compliance and Restrictions</h3>
              <p style={{ color: "#bbbbbb" }} >{`Each platform and brand has its own set of restrictions regarding automated actions, data retention, and API usage limits. Violations may result in account bans, legal action, or API access termination.`}</p>
              <h3 className="mb-2 text-white  ">8. Updates to Terms</h3>
              <p style={{ color: "#bbbbbb" }}>{`These policies are subject to change by the respective platforms and brands. Ensure you regularly review the terms to stay compliant.`}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsOfService;
