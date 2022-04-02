import React from 'react';
import './Cart.css'
import CartHackername from './CartHackername';
const Cart = props => {
  // console.log(props.cart)
  let total = 0;
  const {cart} = props;
  for(const hacker of cart){
    const priceString = hacker.hireCost; 
    const price = parseFloat(priceString)
    total = total + price;
  }
  

  return (
    <div className='cart-items'>
      <h5 className='cart-title'>Add Hacker</h5>
      <h5 style={{fontSize: '15px'}}>Total Cost: ${total}</h5>
      <p style={{fontSize: '20px', fontWeight: '600', color: 'whitesmoke'}}>Count: {props.cart.length}</p>
      <div>
        {
          cart.map(hacker =><CartHackername
            key = {hacker.id}
            hacker = {hacker}
          />)
        }
      </div>

    </div>
  );
};

export default Cart;