import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const ProductCard = props => {

    const handleClick = () => {
        props.showProduct(props.product)
    }

    const handleCartClick = (event) => {
        event.stopPropagation();
        props.cartList(props.product)
    }

    return (
        <div className="main-product" onClick={handleClick}>
            <div className="product">
                <Link className="PP-Link" to="/ProductPage"></Link>
                <img src={props.product.image_link} />
                <h4>{props.product.name}</h4>
                <span>${props.product.price}0</span>
                {/* <button onClick={handleCartClick}>Add To Cart</button> */}
                <Button variant="primary" size="sm" onClick={handleCartClick}>
                    Add To Cart
                </Button>
            </div>
        </div >
    )
}

export default ProductCard;