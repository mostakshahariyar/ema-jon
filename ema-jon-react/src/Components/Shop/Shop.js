import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import './Shop.css'
import {Link} from 'react-router-dom'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayproducts, setDisplayproducts] = useState([]);

    useEffect( () =>{
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayproducts(data)
            })
    }, [])
    useEffect(() => {
        const saveCart = getStoredCart();
        const storeCart = [];
        if (products.length) {
            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    storeCart.push(addedProduct);
                    setCart(storeCart)
                    addedProduct.quentity = saveCart[key];
               }
                console.log(addedProduct);
        }
        }
    },[products])

    const hendelToAddCart = product => {
        const exists = cart.find(pd => pd.key === product.key);
        console.log(exists)
        let newArray = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quentity = exists.quentity + 1;
            newArray = [...rest, product]
        }
        else {
            product.quentity = 1; 
            newArray = [...cart, product]
        }
        setCart(newArray)
        addToDb(product.key)
    }
    const heandelchange = event => {
        const searchText = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayproducts(matchProducts)
        console.log(matchProducts.length)
    }

    return (
        <div>
            <div className="search-container">
                <input type="text" onChange={heandelchange}  placeholder='search products'/>
            </div>
            <div className="container">
                <div className="products-container">
                    {
                        displayproducts.map(product=><Product
                            key = {product.key}
                            product = {product}
                            hendelToAddCart = { hendelToAddCart}
                        />)
                    }
                </div>
                <div className="order-container">
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='orderBtn'>Review your order</button>
                        </Link>  
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;