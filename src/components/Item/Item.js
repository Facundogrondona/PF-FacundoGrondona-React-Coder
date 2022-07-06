//Elements and modules

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//Styles

import "./Item.scss";

function Item({
  oneItemId,
  oneItemImage,
  oneItemTitle,
  oneItemDescription,
  oneItemRatingCount,
  oneItemPrice,
}) {
  return (
    <>
      <Link
        to={`/item/${oneItemId}`}
        key={oneItemId}
        className="itemDecoration"
      >
        <div>
          <Card className="item">
            <Card.Img
              variant="top"
              src={oneItemImage}
              className="imgItem img-fluid"
              alt={oneItemTitle}
            />
            <Card.Body>
              <Card.Title>{oneItemTitle.substring(0, 20)}...</Card.Title>
              <Card.Text>{oneItemDescription.substring(0, 30)}...</Card.Text>
              <Card.Text>
                Cantidad en stock: {oneItemRatingCount}
                <br />
                Precio: {oneItemPrice}
              </Card.Text>
              <p className="linkButton">Ver detalles</p>
            </Card.Body>
          </Card>
        </div>
      </Link>
    </>
  );
}

export default Item;
