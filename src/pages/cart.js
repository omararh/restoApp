import React from 'react';
import '../pages/cart.css';


const Cart = ({cartItems}) => {
    return (
        <div>
           {
               cartItems.map(e => {
                   <p>e.id</p>
               }) 
           }
            <p>ici PANIER!</p>
        </div>
    )
}

export default Cart;
