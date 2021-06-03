import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    selectCount,
    items,
    initialState
} from './counterSlice';
import './Shop.css';
//import { data } from './data';
import Card from 'react-bootstrap/Card';
//import Media from 'react-bootstrap/Media';
import Alert from 'react-bootstrap/Alert';
import { ImCross } from 'react-icons/im';


export default function Cart() {
    const count: initialState = useSelector(selectCount);
    console.log(count.price);
    const dispatch = useDispatch();
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

                    !!count.items && count.items.map((detail: items | null) => {

                        
                        return (
                            
                            <div>
                                {detail ? (
                                    <Card style={{ width: '18rem' }} className="card" >
                                        <div>

                                            <ImCross className="crossicon" onClick={() => dispatch(decrement([detail.id, detail.price]))} />
                                        </div>
                                        <Card.Img variant="top" src={detail.imageUrl} />
                                        <Card.Title className="cardtitle">{detail.title}</Card.Title>
                                        <h4>${detail.price}</h4>
                                        <Card.Body>{detail.description}</Card.Body>

                                    </Card>
                                ): ""}
                            </div>)
                    })
                    

                }
            </div>
        </div>
    )
}