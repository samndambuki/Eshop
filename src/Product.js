import React from 'react';
import './Product.css';

function Product(){
    return(
        <div>
            <div className="product">
                <div className="product__info">
                    <p>Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)</p>
                    <p className="product__price">
                        <small></small>
                        <strong>$</strong>
                    </p>
                    <p className="product__rating">
                        ⭐⭐⭐⭐⭐
                    </p>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="product-image" />
                <button>Add to basket</button>
            </div>
        </div>
    )
}

export default Product;