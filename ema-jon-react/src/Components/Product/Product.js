import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {img, name, price, seller, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img style={{cursor: "copy"}} src={img} alt="product picture" />
            </div>
            <div>
                <h3 className='name'>{name}</h3>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - <br /> order soon</small></p>
                <button onClick={() =>props.hendelToAddCart(props.product)} className='btn-regular'>{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;