/** @format */

import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  //dispatch - alternative name for action
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      //name you want to give to the action you want to perform
      type: "ADD_TO_BASKET",
      //data to be pushed to the data layer
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <p className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
          </p>
        </div>
        <img src={image} />
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  );
}

export default Product;
