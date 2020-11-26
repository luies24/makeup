import React from 'react'

export default function ProductCard({ product }) {

    return (
        <div>
            <img src={product.image_link} />
            <h1>{product.brand}</h1>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}0</p>
        </div>
    )
}