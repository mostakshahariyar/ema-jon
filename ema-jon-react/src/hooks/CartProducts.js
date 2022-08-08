import { useEffect } from "react";
import { useState } from "react";
import { getStoredCart } from "../utilities/fakedb"

const CartProducts = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const saveCart = getStoredCart();
        const storeCart = [];
        if (products.length) {
            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    addedProduct.quentity = saveCart[key]
                    storeCart.push(addedProduct)

                }
            }
        }
        setCart(storeCart)
    }, [products])
    return [cart, setCart];
}

export default CartProducts;
