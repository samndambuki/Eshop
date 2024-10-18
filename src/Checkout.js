import React from 'react';
import './Checkout.css'

function Checkout(){
    return(
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__add" />
                <h2 className="checkout__title">
                    Your shopping basket
                </h2>
            </div>
            <div className="checkout__right">

            </div>
        </div>
    )
}

export default Checkout;