"use client";

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";
import { useCampaigns } from "@/Hooks/useCampaigns";
import { useClips, Clip } from "@/Hooks/useClips";
import { ChevronDown, Play } from "react-feather";
import moment from "moment";

const STATUS_OPTIONS = [
  { label: "In review", value: "in_review" },
  { label: "Approved", value: "approved" },
  { label: "Overdue", value: "overdue" },
  { label: "Rejected", value: "rejected" },
  { label: "Posted", value: "posted" },
];

const ClipsApproval = () => {
  const { campaigns, loading: campaignsLoading, error: campaignsError, refetchCampaigns } = useCampaigns();
  const { clips, loading: clipsLoading, error: clipsError, fetchClips } = useClips();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>("in_review");

  // Fetch campaigns on mount
  useEffect(() => {
    refetchCampaigns("active");
  }, []);

  // Fetch clips when campaign or status changes
  useEffect(() => {
    fetchClips({
      campaignId: selectedCampaign ? selectedCampaign.id : undefined,
      status: selectedStatus,
    });
  }, [selectedCampaign, selectedStatus]);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Dummy stats for the status bar (replace with real data if available)
  const statusCounts = {
    in_review: 1042,
    approved: 17,
    overdue: 5,
    rejected: 73,
    posted: 461,
  };

  return (
    <Container fluid className="clips-approval__container">
      <Row className="clips-approval__header">
        <Col xs="12" md="6">
          <h2 className="clips-approval__title">Clips approval</h2>
        </Col>
        <Col xs="12" md="6" className="clips-approval__dropdown-container">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="clips-approval__dropdown">
            <DropdownToggle caret color="dark">
              {selectedCampaign ? selectedCampaign.title : "All campaigns"}
            </DropdownToggle>
            <DropdownMenu dark className="clips-approval__dropdown-menu">
              <DropdownItem
                key="all"
                active={selectedCampaign === null}
                onClick={() => setSelectedCampaign(null)}
                className="clips-approval__dropdown-item"
              >
                All campaigns
              </DropdownItem>
              {campaigns && campaigns.map((campaign: any) => (
                <DropdownItem
                  key={campaign.id}
                  active={selectedCampaign && selectedCampaign.id === campaign.id}
                  onClick={() => setSelectedCampaign(campaign)}
                  className="clips-approval__dropdown-item"
                >
                  {campaign.title} <ChevronDown />
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <div className="clips-approval__status-bar">
        {STATUS_OPTIONS.map((status) => (
          <div
            key={status.value}
            className={`clips-approval__status-btn${selectedStatus === status.value ? " active" : ""}`}
            onClick={() => setSelectedStatus(status.value)}
          >
            {status.label}
            <span className="clips-approval__status-count">
              {statusCounts[status.value as keyof typeof statusCounts] ?? 0}
            </span>
          </div>
        ))}
      </div>
      <Row>
        <Col>
          {clipsLoading ? (
            <div>Loading clips...</div>
          ) : clipsError ? (
            <div>Error: {clipsError}</div>
          ) : (
            <div className="clips-approval__grid">
              {clips.map((clip: Clip) => (
                <Card key={clip.id} className="clips-approval__card">
                  <div className="clips-approval__thumb-container">
                    <img
                      src={clip.thumbnail_url || "/placeholder.jpg"}
                      alt={clip.campaign?.title || "Clip"}
                      className="clips-approval__thumb"
                    />
                    <div className="clips-approval__play-overlay">
                      <div className="clips-approval__play-bg">
                        <Play className="clips-approval__play-icon" />
                      </div>
                    </div>
                  </div>
                  <CardBody className="clips-approval__card-body">
                    <div className="clips-approval__user-row">
                      <img src="/avatar.png" alt="user" className="clips-approval__user-avatar" />
                      <span className="clips-approval__user-handle">@{clip.user?.email?.split('@')[0]}</span>
                    </div>
                    <div className="clips-approval__desc">
                      {clip.metadata?.description || "No description"}
                    </div>
                    <div className="clips-approval__campaign-title">{clip.campaign?.title || "Unknown Campaign"}</div>
                    <div className="clips-approval__time">
                      <span className="clips-approval__time-icon">🕒</span>
                      {moment(clip.created_at).fromNow()}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ClipsApproval; 