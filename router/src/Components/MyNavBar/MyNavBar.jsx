import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./MyNavBar.css";
import ReactStars from "react-rating-stars-component";

function MyNavbar({ getSearchRate, getSearchTitle }) {
    const ratingChanged = (newRating) => {
        getSearchRate(newRating);
    };
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Movie App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => getSearchTitle(e.target.value)}
                />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    );
}

export default MyNavbar;
