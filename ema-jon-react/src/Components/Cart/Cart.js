import React from 'react';
import './cart.css'
// import {Link} from 'react-router-dom'



const Cart = (props) => {
    // console.log(props.children);
    const tax = 20;
 const {cart} = props;
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        product.quentity = !product.quentity ? 1 : product.quentity;
     total = total + product.price *product.quentity;
     totalQuantity = totalQuantity + product.quentity;
 }
 const orderTotal = total + tax;
    return (
        <div>
            <div className="cart">
                <h3>Order Summary</h3>
                <p>Items ordered: {totalQuantity}</p>  
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>$ {total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping &amp; Handling:</td>
                        <td>$ 0</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>$ 0</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>$ {tax}</td>
                    </tr>
                    <tr class="total-row">
                        <td>Order Total:</td>
                        <td>$ {orderTotal.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <div className="cart">
                {props.children}   
            </div>
        </div>
    );
};

export default Cart;