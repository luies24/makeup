import React from 'react'

export default function Cart({ cart }) {

    return (
        <div>
            <h1>Cart!</h1>
            {console.log(cart)}
            {cart.map(product =>
                <>
                    <img src={product.image_link} />
                    <h1>{product.brand}</h1>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>${product.price}0</p>
                </>
            )}
        </div>
    )
}