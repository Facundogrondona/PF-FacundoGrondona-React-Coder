////Elements and modules

import React, { useState } from "react";
import { Button } from "react-bootstrap";

//Styles

import "./ItemCount.scss";

function ItemCount({ stock, initial, onAdd, itemId }) {
  let disableButtonRest = false;
  let disableButton = false;

  const [counterItem, setCounterItem] = useState(initial);

  const handlerClick = (num) => {
    setCounterItem(counterItem + num);
  };

  if (counterItem === 0) {
    disableButtonRest = true;
  }

  if (counterItem >= stock) {
    disableButton = true;
  }

  return (
    <>
      <div>
        <p> Cantidades disponibles: {stock - counterItem}</p>
        <div>
          <Button
            variant="primary"
            disabled={disableButtonRest}
            className="itemButton"
            onClick={() => handlerClick(-1)}
          >
            {" "}
            -{" "}
          </Button>

          <span> {counterItem} </span>

          <Button
            variant="primary"
            disabled={disableButton}
            className="itemButton"
            onClick={() => handlerClick(+1)}
          >
            {" "}
            +{" "}
          </Button>
        </div>
        <Button
          variant="success"
          disabled={disableButtonRest}
          className="itemButton"
          onClick={() => onAdd(counterItem, itemId)}
        >
          Agregar al Carrito
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
