import { useState, useEffect } from "react";



export default function Card({image,item,price,rating,cart,quantity}){


    let handleAddToCart = () => {
        setCart([...cart, item]);
        setQuantity((quantity) => quantity + 1);
    }


    let handleAddItem = () => {
        setQuantity((quantity) => quantity + 1);
    }

    let handleRemoveItem = () => {
        quantity >= 0 && setQuantity((quantity) => quantity - 1)
    }
    
    return(
        <div className="card">
            <img src={image} />
            <h1 style={{color : "black"}}>{item}</h1>
            <p>{price}</p>
            <p>{rating}</p>
            <button onClick={handleAddToCart}>Add to cart</button>
            <button style={{width: "50px", marginLeft: "100px"}} onClick={handleAddItem}>+</button>
            <button style={{width: "50px", marginLeft: "10px"}} onClick={handleRemoveItem}>-</button>   
        </div>
    );
}