import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  let cartLocalStorage = JSON.parse(localStorage.getItem("cartLocal"));
  const [show, setShow] = useState(false);
  const [allItem, setAllItem] = useState();
  const [search, setSearch] = useState({});
  const [product, setProduct] = useState(
    cartLocalStorage ? cartLocalStorage : []
  );
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);
  const clearCart = () => {
    setProduct([]);
    setShow(false);
  };

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const indexUpdated = product.findIndex(
        (elem) => elem.item.id === item.id
      );
      product[indexUpdated].quantity =
        product[indexUpdated].quantity + quantity;
      setProduct([...product]);
    } else {
      const newObj = {
        item,
        quantity,
      };
      setProduct([...product, newObj]);
    }
  };

  const isInCart = (id) => {
    return product.some((elem) => elem.item.id === id);
  };

  const deleteItem = (id) => {
    const updatedCart = product.filter((elem) => elem.item.id !== id);
    setProduct(updatedCart);
  };

  const cartQuantity = () => {
    const cartQuantity = product.reduce(
      (accum, item) => (accum = accum + item.quantity),
      0
    );
    return cartQuantity;
  };
  const totalPrice = () => {
    return product
      .reduce(
        (accum, element) => accum + element.quantity * element.item.price,
        0
      )
      .toFixed(2);
  };

  const data = {
    clearCart,
    addItem,
    deleteItem,
    cartQuantity,
    totalPrice,
    product,
    isInCart,
    allItem,
    setAllItem,
    search,
    setSearch,
    setShow,
    show,
    theme,
    setTheme,
    user,
    setUser,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
