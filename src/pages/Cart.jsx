import { Link } from "react-router-dom";
import cartLogo from "../assets/grocery.gif"
import '../styles/Cart.css'
import creditCard from "../assets/creditCard.gif"

export default function Cart(){ 
    
    return(
        <>
     <nav className='navBar fade-in fade-out'>
        <ul className='navLinks fade-in fade-out'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <img src={cartLogo} alt="" style={{width:"60px", height:"40px", marginLeft:"1400px", filter: "invert(100%)"}} />
        </ul>
    </nav>

    <div className="checkoutContainer fade-in">
        <h1 className="paidGlow"> Payment Successful</h1>
        <img src={creditCard} style={{filter: "invert(1)", width:"300px", marginTop: "40px"}} className="fade-in" alt="" />
    </div>
        </>
    );
}