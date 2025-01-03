/** @format */
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider.js";

function Checkout() {
  // const product = {
  //   title: "The Lean Startup",
  //   price: 19.99,
  //   rating: 4,
  //   image: "https://example.com/product-image.jpg",
  // };
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {/* <CheckoutProduct
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          /> */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
