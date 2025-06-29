"use client";

import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const PrivacyPolicy = () => {
  return (
    <>
      <Container fluid>
        <Row className="mt-5">
          <Col sm={12}>
            <Card>
              <CommonCardHeader
                title={"Privacy Policy"}
                headClass="pb-0 bg-transparent"
              />
              <CardBody>
                <h3 className="mb-2 text-white">1. Introduction</h3>
                <p style={{ color: "#bbbbbb" }}>{`We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when using our platform.`}</p>
                <h3 className="mb-2 text-white">2. Information We Collect</h3>
                <p style={{ color: "#bbbbbb" }}>{`We may collect personal and usage data, including but not limited to names, email addresses, social media account information, and analytics related to content engagement.`}</p>
                <h3 className="mb-2 text-white">3. How We Use Your Information</h3>
                <p style={{ color: "#bbbbbb" }} >{`Your information is used to enhance user experience, provide analytics, improve service functionality, and ensure compliance with our terms of service.`}</p>
                <h3 className="mb-2 text-white  ">4. Data Sharing and Disclosure</h3>
                <p style={{ color: "#bbbbbb" }} >{`We do not sell your personal information. However, we may share data with third-party service providers, social media platforms, and law enforcement when required by law.`}</p>
                <h3 className="mb-2 text-white  ">5. Data Security</h3>
                <p style={{ color: "#bbbbbb" }} >{`We implement security measures to protect your data from unauthorized access, alteration, or destruction.`}</p>
                <h3 className="mb-2 text-white  ">6. Your Rights and Choices</h3>
                <p style={{ color: "#bbbbbb" }}   >{`You have the right to access, modify, or delete your data. Contact us for data requests and account management.`}</p>
                <h3 className="mb-2 text-white  ">7. Changes to This Policy</h3>
                <p style={{ color: "#bbbbbb" }}   >{`We may update this Privacy Policy from time to time. Any changes will be communicated through our platform.`}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
