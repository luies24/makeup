import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'


const ProductCard = props => {

    const handleClick = () => {
        props.showProduct(props.product)
    }

    const handleCartClick = (event) => {
        event.stopPropagation();
        props.cartList(props.product)
    }
    // <div className="main-product" onClick={handleClick}>
    //     <div className="product">
    //         <Link className="PP-Link" to="/ProductPage"></Link>
    //         <img src={props.product.image_link} />
    //         <h4>{props.product.name}</h4>
    //         <span>${props.product.price}0</span>
    //         {/* <button onClick={handleCartClick}>Add To Cart</button> */}
    //         <Button variant="primary" size="sm" onClick={handleCartClick}>
    //             Add To Cart
    //         </Button>
    //     </div>
    // </div >

    return (
        <div className="main-product" onClick={handleClick}>
            <div className="product">
                <Link className="Poduct-Link" to="/ProductPage">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.product.image_link} />
                        <Card.Body>
                            <Card.Title>{props.product.name}</Card.Title>
                            <Card.Text>${props.product.price}0</Card.Text>
                            <Button variant="primary" size="sm" onClick={handleCartClick}>
                                Add To Cart
                            </Button>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard;