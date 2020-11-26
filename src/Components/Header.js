import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Link to="/Home">MakeUp</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link> */}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    )
}