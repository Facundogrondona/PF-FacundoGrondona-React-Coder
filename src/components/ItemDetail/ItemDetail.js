////Elements and modules

import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//Components

import ItemCount from "../ItemCount/ItemCount";
import Spinner from "../Spinner/Spinner";

//Styles

import "./ItemDetail.scss";

function ItemDetail({ loading, itemDetail, initial }) {
  const { addItem, isInCart } = useContext(CartContext);

  // eslint-disable-next-line no-unused-vars
  const [quantity, setQuantity] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [itemID, setItemID] = useState();

  const onAdd = (quantity, itemID) => {
    setQuantity(quantity);
    setItemID(itemID);
    addItem(itemDetail, quantity);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="card mb-3">
            <h1 className="card-title">{itemDetail.title}</h1>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={itemDetail.image}
                  alt={itemDetail.title}
                  className="imagenItem"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3>Descripción:</h3>
                  <p className="card-text">{itemDetail.description}</p>
                  <h4>Cantidad de items en stock:</h4>
                  <p className="card-text">{itemDetail.stock}</p>
                  <h4>Precio total por unidad:</h4>
                  <p className="card-text">{itemDetail.price}</p>

                  {!isInCart(itemDetail.id) ? (
                    <ItemCount
                      initial={initial}
                      itemId={itemDetail.id}
                      onAdd={onAdd}
                      stock={itemDetail.stock}
                    />
                  ) : (
                    <>
                      <Modal.Dialog>
                        <Modal.Body>
                          <p>Se agregó {itemDetail.title} al carrito </p>
                        </Modal.Body>
                      </Modal.Dialog>
                      <Button variant="secondary" className="itemButton">
                        <Link to="/" className="linkButton">
                          Volver
                        </Link>
                      </Button>
                      <Button variant="success" className="itemButton">
                        <Link
                          to={`/category/${itemDetail.category}`}
                          className="linkButton"
                        >
                          Seguir comprando
                        </Link>
                      </Button>
                      <Button variant="danger" className="itemButton">
                        <Link to="/cart" className="linkButton">
                          Finalizar mi compra
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ItemDetail;
