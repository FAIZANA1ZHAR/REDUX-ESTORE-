import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    purchase,
    decrement,
    fetchProducts,
    deleteProduct,
} from './counterSlice';
import './Shop.css';
//import { data } from './data';
import Card from 'react-bootstrap/Card';
//import Media from 'react-bootstrap/Media';
import Alert from 'react-bootstrap/Alert';
import { ImCross } from 'react-icons/im';


export default function Cart() {
    const count = useSelector((state) => state.counter);
    console.log(count.items);
    const dispatch = useDispatch();
  useEffect(()=>{

    dispatch(fetchProducts());
  },[1])
  
    if (count.items.length === 0) {
        return (<Alert variant="warning">
            No item Added to Cart!
        </Alert>)
    }

    return (
        <div>
            <h3><span>TOTAL</span>{ }<span>{count.price}</span></h3>
            <div className="mainDiv">

                {

                    count.items && count.items[0].map((detail) => {
                          console.log(detail)
                       const productId = String(detail._id)
                        return (
                            
                            <div key={productId}>
                                {detail ? (
                                    <Card style={{ width: '18rem' }} className="card" >
                                        <div>

                                            <ImCross className="crossicon" onClick={() => dispatch(deleteProduct(productId))} />
                                        </div>
                                        <Card.Img variant="top" src={detail.imageUrl} />
                                        <Card.Title className="cardtitle">{detail.productName}</Card.Title>
                                        <h4>${detail.price}</h4>
                                        <Card.Body>{detail.description}</Card.Body>
                                        <button onClick={()=>dispatch(purchase(detail))}>Purchase</button>
                                    </Card>
                                ): ""}
                            </div>)
                    })
                    

                }
            </div>
            
        </div>
    )
}