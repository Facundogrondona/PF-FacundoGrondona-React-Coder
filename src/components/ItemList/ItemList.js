//Elements and modules

import React from "react";

// Components

import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";

function ItemList({ items, loading }) {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        items.map((oneItem) => {
          return (
            <Item
              key={oneItem.id}
              oneItemId={oneItem.id}
              oneItemImage={oneItem.image}
              oneItemTitle={oneItem.title}
              oneItemDescription={oneItem.description}
              oneItemRatingCount={oneItem.stock}
              oneItemPrice={oneItem.price}
            />
          );
        })
      )}
    </>
  );
}

export default ItemList;
