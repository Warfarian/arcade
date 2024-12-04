import { Link } from "react-router-dom";
import cartLogo from "../assets/grocery.gif"

export default function Cart(){
    return(
        <>
     <nav className='navBar fade-in fade-out'>
        <ul className='navLinks fade-in fade-out'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='shop'>Shop</Link></li>
            <li><Link to='cart'>Cart</Link></li>
        </ul>
    </nav>
    {/* add shopping cart gif thing here */}
        </>
    );
}