//@ts-nocheck
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StarRatingBar } from "@/Constant";
import { starRatingData } from "@/Data/BonusUi/Rating";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const StarRating = () => {
  const [rating, setRating] = useState(1);

  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonCardHeader title={StarRatingBar} span={starRatingData} />
        <CardBody>
          <div className="rating">
            <Rating initialRating={rating} emptySymbol="txt-primary star fa fa-star-o fa-2x" fullSymbol="txt-primary star fa fa-star fa-2x" onChange={(rate) => setRating(rate)} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StarRating;
