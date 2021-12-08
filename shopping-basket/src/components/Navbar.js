
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineShoppingCart } from 'react-icons/ai';
//import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Shop.css';

export default function Nav() {


    return (
        <Navbar expand="lg" variant="light" className="Navbar">

            <Navbar.Brand id="navheading">Clothes Shop</Navbar.Brand>
            <div id="links">
                <Link to="/cart"> <AiOutlineShoppingCart className="carticon" /></Link>
                <Link to="/" className="carticon"> Products</Link>
            </div>
        </Navbar>
    );
}