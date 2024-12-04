import { Link } from "react-router-dom";
import cartLogo from "../assets/grocery.gif"
import '../styles/Cart.css'


export default function Cart(){ 
    // const shopItem = items.map((item,index) => <li key={index} className="itemList">{item}</li>);

    return(
        <>
     <nav className='navBar fade-in fade-out'>
        <ul className='navLinks fade-in fade-out'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='shop'>Shop</Link></li>
            <li><Link to='cart'>Cart</Link></li>
            <img src={cartLogo} alt="" style={{width:"60px", height:"40px", marginLeft:"800px", filter: "invert(100%)"}} />
        </ul>
    </nav>

    <div className="checkoutContainer fade-in">
        <h1>Checkout</h1>
        {/* <div className="checkout">
            <ul>
                {shopItem}
            </ul>
        </div> */}
    </div>
        </>
    );
}