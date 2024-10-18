import React from 'react';
import './CheckoutProduct.css'

function CheckoutProduct(){
 return(
    <div>
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <p className="product__rating">
                        {Array(rating).fill().map((_,i)=>(
                            <span key={i}>⭐</span>
                        ))}
                    </p>
                </div>
                <img src={image} />
                <button>Add to basket</button>
            </div>
    </div>
 )   
}

export default CheckoutProduct;