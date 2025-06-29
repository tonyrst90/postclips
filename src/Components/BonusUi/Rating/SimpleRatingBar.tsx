//@ts-nocheck
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RatingBars } from "@/Constant";
import { barRatingData } from "@/Data/BonusUi/Rating";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const SimpleRatingBar = () => {
  const [rating, setRating] = useState(8);

  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonCardHeader title={RatingBars} span={barRatingData} />
        <CardBody>
          <div className="rating">
            <Rating stop={10} initialRating={rating} emptySymbol="br-selected" fullSymbol="br-selected br-current" onChange={(rate) => setRating(rate)} />
            <span className="current-rating">{rating}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleRatingBar;
