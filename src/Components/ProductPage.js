import React from 'react'
import { Button } from 'react-bootstrap'

export default function ProductCard({ product, cartList }) {

    const handleCartClick = (event) => {
        event.stopPropagation();
        cartList(product)
    }

    return (
        <div>
            <img className="product-page-img" src={product.image_link} />
            <h1 className="product-page-h1">{product.brand}</h1>
            <h1 className="product-page-h1">{product.name}</h1>
            <p className="product-page-p">{product.description}</p>
            <p className="product-page-p">${product.price}0</p>
            <Button
                className="product-page-button"
                variant="primary"
                size="sm"
                onClick={handleCartClick}
            >
                Add To Cart
            </Button>
        </div>
    )
}