import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {

    return (
        <div className="main-header">
            <div>
                <h1 ><Link to="/Home">MakeUp</Link></h1>
            </div>
            <div className="cart-div">
                <button className="cart-button"><Link to="/Cart">🛒</Link></button>
            </div>
        </div>
    )
}