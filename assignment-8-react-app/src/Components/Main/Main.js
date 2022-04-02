import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hacker from '../Hacker/Hacker';
import './Main.css'

const Main = () => {
  const [hackers, setHackers] = useState([]);
  const [cart, setCart] = useState([]);
  
  const handelAddtoCart = hacker =>{
      const newArray = [...cart, hacker];
      setCart(newArray)
  }
  useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setHackers(data))
  },[])
  return (
    <div className="main">
      <div className="titel-container">
        <h2 style={{fontFamily: 'BIZ UDGothic'}}>HACKERS GROUP</h2>
        <p style={{fontSize: '20px',fontFamily: 'BIZ UDGothic', fontWeight: '600'}}>Hacker Budget: 10 Milliom</p>
      </div>
      <div className='hacker'>
        <div className='hacker-info'>
          {hackers.map(hacker => <Hacker
            key={hacker.id}
            hacker={hacker}
            handelAddtoCart={handelAddtoCart} />)}
        </div>
        <div>
          <Cart
            cart={cart} />
        </div>
      </div>
    
   </div>

  );
};
export default Main;<div></div>