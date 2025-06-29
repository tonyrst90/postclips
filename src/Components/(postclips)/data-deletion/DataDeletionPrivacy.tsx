"use client";

import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const DataDeletionPolicy = () => {
  return (
    <Container fluid>
      <Row className="mt-5">
        <Col sm={12}>
          <Card>
            <CommonCardHeader title={"Data Deletion Policy"} headClass="pb-0" />
            <CardBody>
              <h3 className="mb-3">1. Introduction</h3>
              <p>{`PostClips is committed to protecting user privacy and providing transparency regarding the handling of personal data. Users have the right to request the deletion of their data from our platform.`}</p>
              <h3 className="mb-3">2. How to Request Data Deletion</h3>
              <p>{`Users can request the deletion of their data by following these steps:`}</p>
              <ul>
                <li>{`Go to the PostClips settings page in your account.`}</li>
                <li>{`Click on the "Delete My Data" option.`}</li>
                <li>{`Confirm the deletion request by following the on-screen instructions.`}</li>
              </ul>
              <p>
                {`Alternatively, users can email us at `}
                <strong>support@postclips.com</strong>
                {` with the subject line "Data Deletion Request" and include their account details.`}
              </p>
              <h3 className="mb-3">3. Processing Time</h3>
              <p>{`All data deletion requests will be processed within 7 business days. Users will receive a confirmation email once the deletion is complete.`}</p>
              <h3 className="mb-3">4. What Data is Deleted</h3>
              <p>{`Upon successful request, the following data will be permanently deleted from our servers:`}</p>
              <ul>
                <li>{`Personal profile data (name, email, phone number).`}</li>
                <li>{`Connected social media accounts and associated data.`}</li>
                <li>{`Stored content, analytics, and activity logs.`}</li>
              </ul>
              <h3 className="mb-3">5. Exceptions</h3>
              <p>{`Certain data may be retained for legal or security reasons, such as compliance with regulatory obligations or fraud prevention.`}</p>
              <h3 className="mb-3">6. Contact Us</h3>
              <p>
                {`For any questions regarding data deletion, users can contact our support team at `}
                <strong>support@postclips.com</strong>
                {`.`}
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DataDeletionPolicy;
