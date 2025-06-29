"use client";

import { ECommerceTitle, ProductListTitle } from "@/Constant";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import CampaignTable from "@/Components/(postclips)/campaigns/CampaignList/CampaignTable";
import CampaignHeader from "@/Components/(postclips)/campaigns/CampaignList/CampaignHeader";
import { fetchAPI } from "@/Clients/postclips/server/ApiClient";
import { useAuth } from "@/Providers/SessionProvider";
import { useDispatch } from "react-redux";

const Campaigns = () => {
  const { token } = useAuth();
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (token) {
      const fetchCampaigns = async () => {
        try {
          setIsLoading(true);
          const response = await fetchAPI(
            "GET",
            "/campaigns/brand"
          );
          console.log("API Response:", response); // Debug log
          if (response.data) {
            setCampaigns(response.data);
          } else {
            setCampaigns([]);
          }
        } catch (err) {
          console.error("Error fetching campaigns:", err);
          setError("Failed to load campaigns");
        } finally {
          // dispatch(setCurrentState({
          //   mainPage: {
          //     name: "Campaigns",
          //     route: "/campaigns",
          //   },
          // }));
          setIsLoading(false);
        }
      };
      fetchCampaigns();
    }
  }, [token]);

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card className="mt-5">
            <CardBody>
              <CampaignHeader linkTitle="New Campaign" />
              <CampaignTable
                campaigns={campaigns}
                isLoading={isLoading}
                error={error}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Campaigns;
