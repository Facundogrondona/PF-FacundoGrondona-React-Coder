////Elements and modules
import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "react-bootstrap";

//Components

import { CartContext } from "../../context/CartContext";

function CartWidget({ cantItem }) {
  const { theme } = useContext(CartContext);
  return (
    <Button variant={theme}>
      <ShoppingCartIcon />
      {cantItem} {cantItem > 1 ? "productos" : "producto"}
    </Button>
  );
}

export default CartWidget;
