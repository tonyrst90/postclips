"use client";

import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import StatCard, { CutCorner } from "./components/StatCard";
import GrowthCard from "./components/GrowthCard";
import BudgetAllocationCard from "./components/BudgetAllocationCard";
import SimplePlatformComparison from "./components/SimplePlatformComparison";
import CommentCard from "./components/CommentCard";
import AccountCardGroup from "./components/AccountCardGroup";
import ClipCardGroup from "./components/ClipCardGroup";
import AudienceInsights from "./components/AudienceInsights";
import { useAnalytics } from "@/Hooks/useAnalytics";

// Utility function to format numbers for display
const formatNumber = (num: number | undefined): string => {
  if (num === undefined || num === null) {
    return "0";
  }
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toLocaleString('en-US', { maximumFractionDigits: 0 });
};

// Utility function to format currency
const formatCurrency = (amount: number | undefined): string => {
  if (amount === undefined || amount === null) {
    return "$0";
  }
  if (amount >= 1000000000) {
    return "$" + (amount / 1000000000).toFixed(1) + "B";
  } else if (amount >= 1000000) {
    return "$" + (amount / 1000000).toFixed(1) + "M";
  } else if (amount >= 1000) {
    return "$" + (amount / 1000).toFixed(1) + "K";
  }
  return "$" + amount.toLocaleString('en-US', { maximumFractionDigits: 0 });
};

// Utility function to calculate progress percentage
const calculateProgress = (spent: number | undefined, total: number | undefined): number => {
  if (spent === undefined || spent === null || total === undefined || total === null || total === 0) {
    return 0;
  }
  return Math.round((spent / total) * 100 * 100) / 100; // Round to 2 decimal places
};

const Analytics: React.FC = () => {
  const { overviewData, testDataOverview, loading, error, fetchAnalyticsOverview } = useAnalytics();
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    endDate: new Date().toISOString() // now
  });

  useEffect(() => {
    // Fetch analytics data on component mount
    fetchAnalyticsOverview(dateRange.startDate, dateRange.endDate);
  }, [fetchAnalyticsOverview, dateRange.startDate, dateRange.endDate]);

  // Create card data from API response
  const cardData: {
    title: string;
    value: string;
    suffix?: string;
    change?: string;
    cutCorners?: CutCorner[];
    icon?: string;
    progress?: number;
    progressColor?: string;
  }[] = testDataOverview ? [
    {
      title: "Total views generated",
      value: formatNumber(testDataOverview.total_views),
      change: `+${testDataOverview.views_growth_percentage || 0}%`,
      cutCorners: ["br"],
    },
    {
      title: "Total clips posted",
      value: formatNumber(Number(testDataOverview.total_clips_posted)),
      change: `+${testDataOverview.clips_growth_percentage || 0}%`,
      cutCorners: ["bl"],
    },
    {
      title: "Average views per clip",
      value: formatNumber(testDataOverview.average_views_per_clip),
      change: `+${testDataOverview.total_clips_posted > 0 ? Math.round(((testDataOverview.total_views / testDataOverview.total_clips_posted - testDataOverview.average_views_per_clip) / testDataOverview.average_views_per_clip) * 100) : 0}%`,
      cutCorners: ["tr", "br"],
    },
    {
      title: "Likes",
      value: formatNumber(testDataOverview.total_likes),
      change: `+${testDataOverview.likes_growth_percentage || 0}%`,
      cutCorners: ["tl", "bl"],
      icon: "/assets/icons/analytics/arrow-up-right.svg",
    },
    {
      title: "Comments",
      value: formatNumber(testDataOverview.total_comments),
      change: `+${testDataOverview.comments_growth_percentage || 0}%`,
      cutCorners: ["tr", "br"],
      icon: "/assets/icons/analytics/arrow-up-right.svg",
    },
    {
      title: "Shares",
      value: formatNumber(testDataOverview.total_shares),
      change: `+${testDataOverview.shares_growth_percentage || 0}%`,
      cutCorners: ["tl", "bl"],
      icon: "/assets/icons/analytics/arrow-up-right.svg",
    },
    {
      title: "Estimated budget spent",
      value: formatCurrency(testDataOverview.total_budget_spent),
      suffix: `/${formatCurrency(testDataOverview.total_budget_allocated)}`,
      progress: calculateProgress(testDataOverview.total_budget_spent, testDataOverview.total_budget_allocated),
      cutCorners: ["tr"],
    },
    {
      title: "Remaining views",
      value: formatNumber(testDataOverview.remaining_views),
      suffix: `/${formatNumber(testDataOverview.total_views_allocated)}`,
      progress: calculateProgress(testDataOverview.remaining_views, testDataOverview.total_views_allocated),
      cutCorners: ["tl"],
      progressColor: "#FA4D56", // Red color for remaining views
    },
    {
      title: "Saves",
      value: formatNumber(testDataOverview.total_link_clicks),
      change: `+${testDataOverview.link_clicks_growth_percentage || 0}%`,
      icon: "/assets/icons/analytics/arrow-up-right.svg",
    },
    {
      title: "Accounts",
      value: formatNumber(testDataOverview.total_accounts),
      change: `+${testDataOverview.accounts_growth_percentage || 0}%`,
      icon: "/assets/icons/analytics/arrow-up-right.svg",
    },
  ] : [];

  const handleDateRangeChange = (range: string) => {
    const now = new Date();
    let startDate: Date;

    switch (range) {
      case "7":
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case "30":
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      case "90":
        startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
        break;
      default:
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    }

    setDateRange({
      startDate: startDate.toISOString(),
      endDate: now.toISOString()
    });
  };

  if (loading) {
    return (
      <div className="analytics-page-content">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="analytics-page-content">
        <div className="alert alert-danger" role="alert">
          Error loading analytics data: {error}
        </div>
      </div>
    );
  }
  return (
    <div className="analytics-page-content">
      <header className="campaign-performance-header">
        <h2 className="campaign-performance-header__title">
          Campaign performance
        </h2>
        <button className="campaign-performance-header__export-btn">
          EXPORT PDF
        </button>
      </header>

      <section className="analytics-filters">
        <Row className="mb-3">
          <Col>
            <select
              className="analytics-filter-select"
              aria-label="Campaign filter"
            >
              <option>All campaigns</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex gap-3">
              <select
                className="analytics-filter-select flex-grow-1"
                aria-label="Platform filter"
              >
                <option>All platforms</option>
              </select>
              <select
                className="analytics-filter-select flex-grow-1"
                aria-label="Time range filter"
                onChange={(e) => handleDateRangeChange(e.target.value)}
                defaultValue="7"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
              </select>
            </div>
          </Col>
        </Row>
      </section>
      <section aria-label="Campaign performance metrics">
        <Row className="gx-1 gy-1">
          {cardData.map((card, idx) => (
            <Col key={card.title} xs={6}>
              <StatCard {...card} />
            </Col>
          ))}
        </Row>
      </section>
      <section aria-label="Views growth chart">
        <Row>
          <Col md={6}>
            <div className="growth-card-wrapper">
              <GrowthCard />
            </div>
          </Col>
        </Row>
      </section>
      <section aria-label="Budget allocation">
        <Row>
          <Col md={6}>
            <div className="budget-allocation-card-wrapper">
              <BudgetAllocationCard />
            </div>
          </Col>
        </Row>
      </section>
      {/* <section aria-label="Platform performance comparison">
        <Row>
          <Col xs={12}>
            <div style={{ marginTop: "24px" }}>
              <SimplePlatformComparison />
            </div>
          </Col>
        </Row>
      </section> */}
      <section aria-label="Clips">
        <Row>
          <Col xs={12}>
            <div style={{ marginTop: "24px" }}>
              <ClipCardGroup
                topClips={testDataOverview?.top_clips || []}
                loading={loading}
              />
            </div>
          </Col>
        </Row>
      </section>
      <section aria-label="Top accounts">
        <Row>
          <Col xs={12}>
            <div style={{ marginTop: "24px" }}>
              <AccountCardGroup />
            </div>
          </Col>
        </Row>
      </section>
      <section aria-label="Comments">
        <Row>
          <Col xs={12}>
            <div style={{ marginTop: "24px" }}>
              <div className="comment-card">
                <div className="comment-card__header">
                  <h2 className="comment-card__title">
                    Comments
                    <span className="dot">•</span>
                    <span className="date">{testDataOverview?.total_comments?.toLocaleString()}</span>
                  </h2>
                  <button className="view-all">VIEW ALL</button>
                </div>
                <CommentCard
                  clipUrl="https://www.tiktok.com/t/ZTjtPChWH/"
                  avatarUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7346398712303714347~tplv-tiktokx-cropcenter:100:100.jpg?dr=14579&refresh_token=4e584e97&x-expires=1750122000&x-signature=SVjDbi46wkiL5h%2Fu3FljO6IJBFg%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=maliva"
                  username="Iaan"
                  date="2024-7-31"
                  comment={"idk my left is dangeroussssss bro"}
                  likes={"1626"}
                  thumbnailUrl="https://sb.postclips.com/storage/v1/object/public/mock_data//test2thumbnail.png"
                />
                <CommentCard
                  clipUrl="https://www.tiktok.com/t/ZTjtPhV4T/"
                  avatarUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e8a3f0a38f4341eb2c1dfe5868ca1131~tplv-tiktokx-cropcenter:100:100.jpg?dr=14579&refresh_token=9997e749&x-expires=1750122000&x-signature=AEtx6qRfy6zeh7IsAaAfiuVlQWw%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=maliva"
                  username="Waltuh"
                  date="2024-8-2"
                  comment={"The vitaly redemption arc is absolutely insane😭🙏"}
                  likes={"408"}
                  thumbnailUrl="https://sb.postclips.com/storage/v1/object/public/mock_data//test1thumbnail.png"
                />
                <CommentCard
                  clipUrl="https://www.tiktok.com/t/ZTjtPhV4T/"
                  avatarUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7ebf82a00ca065f23f6d47d19ebe5fe6~tplv-tiktokx-cropcenter:100:100.jpg?dr=14579&refresh_token=bf4b93c1&x-expires=1750122000&x-signature=sFTgHiiRI6IPigizN7%2BQ6yKh2Ug%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=ff37627b&idc=maliva"
                  username="thatmfariana"
                  date="2024-8-1"
                  comment={"can we appreciate the vocals lmfaoo akon still sounds exactly the same 😭🔥"}
                  likes={"16.9K"}
                  thumbnailUrl="https://sb.postclips.com/storage/v1/object/public/mock_data//test1thumbnail.png"
                />
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section aria-label="Audience insights">
        <Row>
          <Col xs={12} style={{ marginTop: "24px" }}>
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              Audience insights
            </h2>
            <AudienceInsights />
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Analytics;
