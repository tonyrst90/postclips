//@ts-nocheck
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HalfStarRatingBar } from "@/Constant";
import { halfStarRatingData } from "@/Data/BonusUi/Rating";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const HalfStarRating = () => {
  const [rating, setRating] = useState(1.5);

  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonCardHeader title={HalfStarRatingBar} span={halfStarRatingData} />
        <CardBody>
          <div className="rating">
            <Rating initialRating={rating} fractions={2} emptySymbol="txt-primary star fa fa-star-o fa-2x" fullSymbol="txt-primary star fa fa-star fa-2x" onChange={(rate) => setRating(rate)} />
            <span className="txt-primary current-rating">{rating}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HalfStarRating;