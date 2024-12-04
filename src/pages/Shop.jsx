import { Link } from "react-router-dom";
import Image from "../Image";
import Card from "./Card";
import { useState } from "react";
import "../styles/Shop.css"

export default function Shop(){
    const [cart, setCart] = useState([]);
    const [quantity,setQuantity] = useState(0)

    return(
        <>
    <nav className='navBar fade-in fade-out'>
        <ul className='navLinks fade-in fade-out'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='shop'>Shop</Link></li>
            <li><Link to='cart'>Cart: {cart.length}</Link></li>
        </ul>
    </nav>

        <div className="listing fade-in">
            <Card image="https://images.unsplash.com/photo-1619253790960-83acb6df8cc3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="Grand Theft Auto #1" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/>
            <Card image="https://images.unsplash.com/photo-1700154117794-277371e27705?q=80&w=1844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="San Andreas #2" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/>
            <Card image = "https://images.unsplash.com/photo-1591196702597-062a87208fed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="Sonic #3" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/>
            <Card image="https://plus.unsplash.com/premium_photo-1687854992749-e15cba89631d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" item="Super Mario #4" price= "4$" rating ="4.0" cart={cart} quantity={quantity}/>
        </div>
        </>  
    );
}

