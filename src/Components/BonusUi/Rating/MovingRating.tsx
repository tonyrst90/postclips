//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import Rating from "react-rating";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MovieRatingBar } from "@/Constant";
import { movingRatingDta } from "@/Data/BonusUi/Rating";

const MovingRating = () => {
  const [rating, setRating] = useState(1);
  const [Status, setStatus] = useState("Bad");

  useEffect(() => {
    switch (rating) {
      case 1:
        setStatus("Bad");
        break;
      case 2:
        setStatus("Mediocre");
        break;
      case 3:
        setStatus("Good");
        break;

      default:
        setStatus("Awesome");
        break;
    }
  }, [rating]);

  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonCardHeader title={MovieRatingBar} span={movingRatingDta} headClass="pb-0" />
        <CardBody className="m-2">
          <div className="rating">
            <Rating stop={4} initialRating={rating} emptySymbol="br-widget" fullSymbol="br-widget br-current" onChange={(rate: number) => setRating(rate)} />
            <span className="txt-primary current-rating fs-6">{Status}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MovingRating;