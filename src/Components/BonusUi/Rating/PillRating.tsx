//@ts-nocheck
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PillRatingBar } from "@/Constant";
import { pillRatingData } from "@/Data/BonusUi/Rating";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const PillRating = () => {
  const [rating, setRating] = useState(1);
  const pillData = ["A", "B", "C", "D", "E"];

  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonCardHeader title={PillRatingBar} span={pillRatingData} />
        <CardBody>
          <div className="rating pill-rating-list">
            <Rating initialRating={rating} emptySymbol={pillData.map((n: string) => (<span className="pill-rating" key={n}>{n}</span>))}
              fullSymbol={pillData.map((n: string) => (<span className="pill-rating br-current" key={n}>{n}</span>))}
              onClick={(rate) => setRating(rate)}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillRating;