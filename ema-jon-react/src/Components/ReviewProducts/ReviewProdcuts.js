import React from 'react';

const ReviewProdcuts = (props) => {
    const { name, price, quentity, key } = props.product;
    const { handelRemove } = props;
    return (
        <div>
            <h4 className='name'>{name}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quentity}</p>
            <button onClick={ () =>{handelRemove(key)}} className='btn-regular'>Remove</button>
        </div>
    );
};

export default ReviewProdcuts;