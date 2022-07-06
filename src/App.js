//Elements and modules

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

//Components

import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Result from "./components/Result/Result";

//Style

import "./App.scss";
import Error404 from "./components/404/Error404";

function App() {
  const [theme, setTheme] = useState("Applight");
  const themeChange = (change) => {
    setTheme(change)
   }
  return (
    <CartProvider>
      <Router>
        <div className={theme}>
          <NavBar themeChange={themeChange} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="category/:categoryID"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/result/:result" element={<Result />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
