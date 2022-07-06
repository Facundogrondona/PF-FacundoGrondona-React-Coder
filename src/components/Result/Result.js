//Elements and modules
import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

//Components

import { CartContext } from "../../context/CartContext";
import Footer from "../Footer/Footer";
import ItemList from "../ItemList/ItemList";
import ScrollButton from "../ScrollButton/ScrollButton";

//Styles

function Result() {
  const { allItem, search, setSearch, theme } = useContext(CartContext);

  const [loading, setLoading] = useState(true);
  const { result } = useParams();

  useEffect(() => {
    const inputTextSanit = result.toLowerCase();
    if (inputTextSanit === "") {
      swal({
        title: "Ingrese un producto",
        icon: "warning",
        button: "Aceptar",
      });
    } else {
      let itemFilter = allItem.filter((el) =>
        el.title.toLowerCase().includes(inputTextSanit)
      );
      setSearch(itemFilter);
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <>
      <div className={theme}>
        <Card className="cardContainer">
          <Card.Body className="itemList">
            <ItemList items={search} loading={loading} />
          </Card.Body>
        </Card>
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Result;
