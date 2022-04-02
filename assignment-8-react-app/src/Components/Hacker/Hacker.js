import React from 'react';
import './Hacker.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Hacker = (props) => {
  console.log(props.handelAddtoCart)
  const element = <FontAwesomeIcon icon={faShoppingCart}/>

  const {img,Email, name, country, profession, hireCost} = props.hacker;
  console.log(props.hacker);
  return (
    <div className='hackers-info'>
      <div className='hacke-info'>
        <div className='hackers'>
        <img src={img} alt="hacker pic" />
        <h4 className='aline'>Name: {name}</h4>
        <p className='aline'>Country: {country}</p>
        <p className='aline'>Profession: {profession}</p>
        <p>Email: {Email}</p>
        <p className='aline'>Hiring Cost:$ {hireCost}</p>
        <div className='btn' style={{paddingBottom: '5px'}}>

          <button onClick={()=>props.handelAddtoCart(props.hacker)} className='addtocart'>{element}Add to cart</button>
        </div>
        </div>
        

      </div>
    </div>
  );
};

export default Hacker;