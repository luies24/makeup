# README

# Makeup Shop App

> Makeup ecommerce website

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)


## General info

Allows users to browse through a catalog of makeup and purchase the products they like.

## Technologies

- React.js - Version 17.0.0
- HTML - Version 5
- CSS - Version 3 
- React-bootstrap - Version 1.4.0

## Setup

To run this project, install it locally by cloning the GitHub repository and 
typing the following command in your terminal:

$ npm start

## Code Examples

React.js 

```
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

```

## Features

- Users can click on a product and get more detail.
- When viewing a product users can add to cart.
- Users can look at their cart and see what product they have.

## Status

Project is: unfinished and currently making changes and adding features.


## Contact

Created by [Luis Garcia](https://www.linkedin.com/in/garciale308/)
Feel free to contact us to talk music or talk code!!! 
