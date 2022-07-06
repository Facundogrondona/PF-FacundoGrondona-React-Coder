//Elements and modules

import React, { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

//Components

import ItemDetail from "../ItemDetail/ItemDetail";
import ScrollButton from "../ScrollButton/ScrollButton";
import Footer from "../Footer/Footer";
import { db } from "../../firebase/firebaseConfig";
import { CartContext } from "../../context/CartContext";

//Style

import "./ItemDetailContainer.scss";

function ItemDetailContainer() {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(CartContext);
  useEffect(() => {
    const getItem = async () => {
      const q = query(collection(db, "Items"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItemDetail(docs[0]);
      setLoading(false);
    };
    getItem();
  }, [id]);

  let initial = 0;

  return (
    <>
      <Card className="cardContainer">
        <Card.Body className={theme}>
          <ItemDetail
            loading={loading}
            itemDetail={itemDetail}
            initial={initial}
          />
        </Card.Body>
      </Card>

      <ScrollButton />
      <Footer />
    </>
  );
}

export default ItemDetailContainer;
