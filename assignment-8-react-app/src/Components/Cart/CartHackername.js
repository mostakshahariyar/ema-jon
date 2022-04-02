import React from 'react';
import './Cart.css'
const CartHackername = props => {
  const {name, img} = props.hacker;
  return (
    <div className='name-img'>
      <p className='cart-name'>{name}</p>
      <img className='cart-img' src={img} alt=''/>

    </div>
  );
};

export default CartHackername;