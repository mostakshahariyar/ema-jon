import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartProducts from '../../hooks/CartProducts';
import useProducts from '../../hooks/Products';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart'

import ReviewProdcuts from '../ReviewProducts/ReviewProdcuts';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = CartProducts(products);
    const handelRemove = key => {
        const newProducts = cart.filter(product => product.key !== key)
        setCart(newProducts);
        deleteFromDb(key);
    }
    let navigate = useNavigate();

    
    
    const heandelclick = () => {
        navigate('/placeholder');
        setCart([]);
        clearTheCart();


    }
    // console.log(cart);
    return (
        <div className='container'>
            <div className="products-container">
                {
                    cart.map(product => <ReviewProdcuts
                        product={product}
                        key={product.key}
                        handelRemove = {handelRemove}
                        
                    ></ReviewProdcuts>)
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}>
    
                    {/* <Link to={"/placeholder"}>
                        
                    </Link> */}
                    <button onClick={() => heandelclick()}
                         className='btn-regular'>Place Your Order</button>
                    
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;