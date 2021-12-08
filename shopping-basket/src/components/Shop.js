import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addProduct,
    increment,
} from './counterSlice';
import './Shop.css';
import { data } from './data';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export function Counter() {
    const count = useSelector((state) => state.counter);
    console.log(count);
    const dispatch = useDispatch();
    return (
        <div>

            <div className="mainDiv">
                {
                    data.map((data) => (
                        <div >
                            <Card style={{ width: '18rem' }} className="card">
                                <Card.Img variant="top" src={data.imageUrl} />
                                <Card.Title className="cardtitle">{data.title}</Card.Title>
                                <h4>${data.price}</h4>
                                <Card.Body>{data.description}</Card.Body>
                                <Button variant="outline-success" onClick={() => dispatch(addProduct({productName:data.title,price:data.price}))}>ADD TO CART</Button>{' '}
                            </Card>

                        </div>))
                }
            </div>

        </div>
    );
}
