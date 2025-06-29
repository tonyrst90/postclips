import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, ImagePath, NewOrder, Processing } from "@/Constant";
import { orderData } from "@/Data/Applications/ECommerce/OrderHistory";
import Image from "next/image";
import { useState } from "react";
import { X } from "react-feather";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody, Col, Media, Row } from "reactstrap";

const NewOrders = () => {
  const [newOrder,setNewOrder]=useState(orderData)
  const deleteHandler = (id: number) => {
    const newData = newOrder.filter((item) => item.id !== id);
    setNewOrder([...newData]);
  }

  return (
    <Card>
      <CommonCardHeader title={NewOrder} headClass="pb-0" />
      <CardBody>
        <Row className="g-sm-4 g-3">
          {newOrder.map((item, index) => (
            <Col xxl={4} md={6} key={index}>
              <div className="prooduct-details-box">
                <div className="d-flex gap-3">
                  <Image width={60} height={60} className="align-self-center img-fluid img-60" src={`${ImagePath}/ecommerce/${item.image}`} alt={item.name} priority/>
                  <div className="flex-grow-1 ms-3">
                    <div className="product-name">
                      <h6><a href={Href}>{item.name}</a></h6>
                    </div>
                    <Rating initialValue={5} size={17} className="mt-1" />
                    <div className="price d-flex">
                      <div className="text-muted me-2">Price &nbsp;</div> : 210$
                    </div>
                    <div className="avaiabilty">
                      <div className="text-success">In stock</div>
                    </div>
                    <Button color="primary" size="xs" href={Href}>{Processing}</Button>
                    <X className="close" onClick={() => deleteHandler(item.id)} />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default NewOrders;