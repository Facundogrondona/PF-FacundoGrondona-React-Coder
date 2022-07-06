//Elements and modules

import React, { useContext } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

//Components

import { CartContext } from "../../context/CartContext";
import ScrollButton from "../ScrollButton/ScrollButton";
import Footer from "../Footer/Footer";

//Style

import "./Cart.scss";
import Shop from "../Shop/Shop";

function Cart() {
  const { product, totalPrice, clearCart, deleteItem, setShow, show } =
    useContext(CartContext);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <>
      {product.length > 0 ? (
        <>
          <Card className="cardTotal">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h5>Cantidad de Productos</h5>
                <Card.Text>
                  {product.length}
                  {product.length === 1 ? " producto" : " productos"}
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Total a pagar:</h5>
                <Card.Text>${totalPrice()}</Card.Text>
              </ListGroup.Item>
            </ListGroup>
            <Button variant="danger" onClick={clearCart}>
              Vaciar carrito
            </Button>
            {!show && (
              <Button
                variant="success"
                onClick={() => handleClick()}
                style={{ marginTop: "1px" }}
              >
                Terminar mi compra
              </Button>
            )}
          </Card>
          <Card className="cartContainer">
            {product.map((item) => {
              return (
                <div key={item.item.id}>
                  <Card className="cardCart">
                    <div>
                      <Card.Img
                        variant="left"
                        src={item.item.image}
                        className="imgItem"
                      />
                    </div>
                    <Card.Body>
                      <div className="btnCartDelete">
                        <Button
                          variant="danger"
                          onClick={() => deleteItem(item.item.id)}
                        >
                          X{" "}
                        </Button>
                      </div>
                      <Card.Title className="cartText">
                        {item.item.title}
                      </Card.Title>
                      <Card.Text className="cartText">
                        {item.item.description}
                      </Card.Text>
                      <Card.Text className="cartText">
                        Cantidades: {item.quantity}
                      </Card.Text>
                      <Card.Text className="cartText">
                        Precio por unidad: ${item.item.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Card>
          {show && (
            <>
              <Shop showShop={show} product={product} total={totalPrice()} />
            </>
          )}
        </>
      ) : (
        <>
          <img src="./images/cartEmpty.png" alt="cart" className="cartImg" />
          <Link to="/" className="goToBack">
            Volver
          </Link>
        </>
      )}
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Cart;
